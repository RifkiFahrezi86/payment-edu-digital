# Proses frame ponsel hasil generate GPT (PNG transparan):
# layar = lubang transparan terkurung bodi opak. Deteksi quad-nya, lalu
# BAKE screenshot ke dalam PNG: tiap piksel lubang di-sample dari screenshot
# via inverse-homography (clamp ke tepi) — tanpa celah, tanpa meluber.
import json
import sys
from collections import deque

import numpy as np
import matplotlib.image as mpimg

BASE = r"C:\KKP\payment-edu-digital\public\images"

JOBS = [
    {
        # frame menghadap ke kiri -> ponsel DEPAN (dashboard LIGHT)
        "src": BASE + r"\payway\ChatGPT Image Sep 18, 2026, 10_42_33 PM.png",
        "shot": BASE + r"\LIGHT.jpeg",
        "out": BASE + r"\saku\phone-front.png",
        "name": "front",
        "disp_w": 620.0,  # lebar render container (px CSS)
    },
    {
        # frame menghadap ke kanan -> ponsel BELAKANG (DARK)
        "src": BASE + r"\payway\ChatGPT Image Sep 18, 2026, 10_44_29 PM.png",
        "shot": BASE + r"\DARK.jpeg",
        "out": BASE + r"\saku\phone-back.png",
        "name": "back",
        "disp_w": 520.0,
    },
]


def load_rgba(path):
    img = mpimg.imread(path)  # float 0..1
    if img.dtype != np.float32 and img.dtype != np.float64:
        img = img.astype(np.float64) / 255.0
    if img.shape[2] == 3:
        img = np.dstack([img, np.ones(img.shape[:2])])
    return img


def flood_from_border(mask):
    h, w = mask.shape
    seen = np.zeros((h, w), dtype=bool)
    dq = deque()
    for x in range(w):
        for y in (0, h - 1):
            if mask[y, x] and not seen[y, x]:
                seen[y, x] = True
                dq.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if mask[y, x] and not seen[y, x]:
                seen[y, x] = True
                dq.append((y, x))
    while dq:
        y, x = dq.popleft()
        if y > 0 and mask[y - 1, x] and not seen[y - 1, x]:
            seen[y - 1, x] = True
            dq.append((y - 1, x))
        if y < h - 1 and mask[y + 1, x] and not seen[y + 1, x]:
            seen[y + 1, x] = True
            dq.append((y + 1, x))
        if x > 0 and mask[y, x - 1] and not seen[y, x - 1]:
            seen[y, x - 1] = True
            dq.append((y, x - 1))
        if x < w - 1 and mask[y, x + 1] and not seen[y, x + 1]:
            seen[y, x + 1] = True
            dq.append((y, x + 1))
    return seen


def fit_line(vals, coords):
    # least squares: coord = a*val + b
    A = np.vstack([vals, np.ones_like(vals)]).T
    (a, b), *_ = np.linalg.lstsq(A, coords, rcond=None)
    return a, b


def screen_quad_and_hole(img):
    transparent = img[..., 3] < 0.5
    outer = flood_from_border(transparent)
    hole = transparent & (~outer)
    ys_dbg, xs_dbg = np.nonzero(hole)
    print(f"  hole px={xs_dbg.size}", file=sys.stderr)
    h, w = transparent.shape
    inner_white = hole
    MIN_RUN = 40

    # per baris: run putih-dalam terpanjang -> tepi kiri/kanan layar
    rows, lefts, rights = [], [], []
    for y in range(h):
        xs = np.flatnonzero(inner_white[y])
        if xs.size < MIN_RUN:
            continue
        splits = np.split(xs, np.flatnonzero(np.diff(xs) > 1) + 1)
        runs = [r for r in splits if r.size >= MIN_RUN]
        if not runs:
            continue
        run = max(runs, key=lambda r: r.size)
        rows.append(y)
        lefts.append(run[0])
        rights.append(run[-1])
    rows = np.array(rows); lefts = np.array(lefts); rights = np.array(rights)
    y0, y1 = rows.min(), rows.max()
    band = (rows > y0 + (y1 - y0) * 0.18) & (rows < y1 - (y1 - y0) * 0.18)
    aL, bL = fit_line(rows[band].astype(float), lefts[band].astype(float))
    aR, bR = fit_line(rows[band].astype(float), rights[band].astype(float))

    # per kolom: tepi atas/bawah
    cols, tops, bots = [], [], []
    for x in range(w):
        ys = np.flatnonzero(inner_white[:, x])
        if ys.size < MIN_RUN:
            continue
        splits = np.split(ys, np.flatnonzero(np.diff(ys) > 1) + 1)
        runs = [r for r in splits if r.size >= MIN_RUN]
        if not runs:
            continue
        cols.append(x)
        tops.append(min(r[0] for r in runs))
        bots.append(max(r[-1] for r in runs))
    cols = np.array(cols); tops = np.array(tops); bots = np.array(bots)
    x0, x1 = cols.min(), cols.max()
    bandc = (cols > x0 + (x1 - x0) * 0.18) & (cols < x1 - (x1 - x0) * 0.18)
    aT, bT = fit_line(cols[bandc].astype(float), tops[bandc].astype(float))
    aB, bB = fit_line(cols[bandc].astype(float), bots[bandc].astype(float))

    def isect(av, bv, ah, bh):
        # x = av*y + bv ; y = ah*x + bh
        x = (av * bh + bv) / (1 - av * ah)
        y = ah * x + bh
        return (x, y)

    tl = isect(aL, bL, aT, bT)
    tr = isect(aR, bR, aT, bT)
    br = isect(aR, bR, aB, bB)
    bl = isect(aL, bL, aB, bB)
    return [tl, tr, br, bl], hole


def homography_matrix(w0, h0, quad):
    src = [(0, 0), (w0, 0), (w0, h0), (0, h0)]
    A, b = [], []
    for (sx, sy), (dx, dy) in zip(src, quad):
        A.append([sx, sy, 1, 0, 0, 0, -dx * sx, -dx * sy]); b.append(dx)
        A.append([0, 0, 0, sx, sy, 1, -dy * sx, -dy * sy]); b.append(dy)
    hcf = np.linalg.solve(np.array(A, float), np.array(b, float))
    H = np.array([
        [hcf[0], hcf[1], hcf[2]],
        [hcf[3], hcf[4], hcf[5]],
        [hcf[6], hcf[7], 1.0],
    ])
    return H


def bilinear_sample(img, u, v):
    h, w = img.shape[:2]
    u = np.clip(u, 0.0, w - 1.001)
    v = np.clip(v, 0.0, h - 1.001)
    x0 = np.floor(u).astype(int); y0 = np.floor(v).astype(int)
    x1 = x0 + 1; y1 = y0 + 1
    fu = (u - x0)[:, None]; fv = (v - y0)[:, None]
    p00 = img[y0, x0]; p10 = img[y0, x1]; p01 = img[y1, x0]; p11 = img[y1, x1]
    return (p00 * (1 - fu) * (1 - fv) + p10 * fu * (1 - fv) + p01 * (1 - fu) * fv + p11 * fu * fv)


def main():
    result = {}
    for job in JOBS:
        img = load_rgba(job["src"])
        h, w = img.shape[:2]

        quad, hole = screen_quad_and_hole(img)
        print("QUAD", job["name"], [[round(x, 1), round(y, 1)] for x, y in quad], file=sys.stderr)

        shot = mpimg.imread(job["shot"])
        if shot.dtype != np.float32 and shot.dtype != np.float64:
            shot = shot.astype(np.float64) / 255.0
        shot = shot[..., :3]
        sh, sw = shot.shape[:2]

        # sample screenshot utk SEMUA piksel lubang via inverse-homography
        H = homography_matrix(sw, sh, quad)
        Hinv = np.linalg.inv(H)
        ys, xs = np.nonzero(hole)
        pts = np.stack([xs.astype(float), ys.astype(float), np.ones(xs.size)])
        src = Hinv @ pts
        u = src[0] / src[2]
        v = src[1] / src[2]
        rgb = bilinear_sample(shot, u, v)

        out = img.copy()
        # layar dulu (alpha 1 di lubang), lalu frame di-composite di atasnya
        base = np.zeros_like(out)
        base[ys, xs, :3] = rgb
        base[ys, xs, 3] = 1.0
        fa = out[..., 3:4]
        comp_rgb = out[..., :3] * fa + base[..., :3] * (1 - fa)
        comp_a = fa[..., 0] + base[..., 3] * (1 - fa[..., 0])
        out[..., :3] = comp_rgb
        out[..., 3] = comp_a
        mpimg.imsave(job["out"], np.clip(out, 0, 1))

        scale = job["disp_w"] / w
        result[job["name"]] = {
            "png_size": [w, h],
            "container": [job["disp_w"], round(h * scale, 2)],
            "out": job["out"],
        }
    print(json.dumps(result, indent=1))


if __name__ == "__main__":
    sys.exit(main())
