# Partner logo artwork

The website uses image assets rather than typeset replacements for the partner wordmarks.

| Asset | Source |
| --- | --- |
| `public/images/payway/pay/bank-indonesia.png` | Bank Indonesia's official website: `https://www.bi.go.id/id/SiteAssets/bi-b.png` |
| `public/images/payway/pay/brick.png` | BRICK's official website: `https://www.onebrick.io/_astro/logo.ChHcVY2X_2XFTz.svg` |
| `public/images/payway/pay/bmt-reference.png` | The red-and-black BMT artwork supplied by the user, from the partner strip in `IMAGE 2/10.png`. The organization behind this supplied logo has not been independently verified. |

Original colors and proportions are preserved. Outer blank space is trimmed and the assets are sized for web display. BMT is deliberately not labelled “Buana Media Teknologi”, since that expansion could not be verified.

Regenerate with `node scripts/build-partner-logos.cjs "path/to/IMAGE 2"`.
Use `--local-only` to normalize previously downloaded official images without another network request, or `--bmt-only` to update just the supplied BMT reference.
