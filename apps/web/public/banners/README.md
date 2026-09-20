# Banner & Slider Images Directory

Place your custom banner and slider images in this folder (`apps/web/public/banners/`).

## Recommended Image Specifications

| Property | Recommendation |
| :--- | :--- |
| **Desktop Dimensions** | **`2368 × 880 px`** (or `1184 × 440 px` @2x retina) |
| **Mobile Dimensions** | **`1080 × 1080 px`** (1:1 square) or `1080 × 800 px` |
| **Format** | **`.webp`** (recommended for best speed) or **`.jpg`** / **`.png`** |
| **File Size** | Keep under **250 KB** for fast loading |
| **Aspect Ratio** | ~**`2.7 : 1`** for desktop banners |

---

## How It Works

1. Put your image files directly in this folder, for example:
   - `banner-1.jpg` (or `.webp` / `.png`)
   - `banner-2.jpg`
   - `banner-3.jpg`
   - `banner-4.jpg`

2. Next.js serves all files in `public/` at the root path:
   - `apps/web/public/banners/banner-1.jpg` ➔ Accessible at `/banners/banner-1.jpg`

3. To configure or add more slides, edit [`apps/web/src/data/jioBanners.ts`](../../src/data/jioBanners.ts):
   ```ts
   {
     id: 'jio-1',
     image: '/banners/banner-1.jpg',
     alt: 'Link3 Gigabit Fibre Promotion',
     ctaHref: '/#plans',
     // ... optional text/pill overlays
   }
   ```
