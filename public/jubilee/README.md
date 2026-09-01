# Jubilee Junction Christian Fellowship (JJCF)

A multi-page church website for **Jubilee Junction Christian Fellowship** located in Camp Springs, Maryland. This site provides information about the church's mission, pastor, service times, directions, faith statement, and ministries.

## Live Site

- **URL:** [https://smithaw.com/jubilee/](https://smithaw.com/jubilee/)
- **Hosted on:** GitHub Pages / Custom domain

---

## Pages

| Page                      | File            | Description                                                                                                                                             |
| ------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**                  | `index.html`    | Welcome message, church mission (Seek, Save, Shelter, Serve), photo gallery, December 2025 calendar                                                     |
| **Pastor**                | `pastor.html`   | Biography of Pastor James M. Kelly, his ministry background and vision                                                                                  |
| **Faith / Mission**       | `faith.html`    | Statement of faith, mission statement, ministries overview (Intercessory Prayer, Project Harvest, Children's, Men's & Women's, Music, Liturgical Dance) |
| **Services / Directions** | `services.html` | Service times, address, mailing address, phone, Google Maps embed, what to expect                                                                       |

---

## Features

### SEO Optimization

- **Meta tags:** Title, description, keywords, author, robots, language, revisit-after, theme-color on every page
- **Open Graph tags:** og:type, og:url, og:title, og:description, og:image (1200x630), og:image:width, og:image:height, og:image:alt, og:site_name, og:locale
- **Twitter Card tags:** summary_large_image card with title, description, image
- **Canonical URLs:** Each page has a self-referencing canonical link
- **JSON-LD Structured Data:** Schema.org markup for Church (homepage), Person (pastor page), and WebPage (faith, services pages)
- **Favicon:** Multiple sizes (128x128, 256x255, 924x919) with apple-touch-icon
- **Sitemap:** `sitemap.xml` with all pages and priorities
- **Robots.txt:** `robots.txt` allowing all crawlers with sitemap reference

### Open Graph Image

- **File:** `img/og-image.jpg`
- **Dimensions:** 1200 × 630 px (standard OG image ratio)
- **Content:** Gradient background (dark teal to blue-gray) with church name, tagline, service info, and logo
- **Generated via:** Node.js script using Sharp (`scripts/generate-og-image.js`)

### Accessibility

- **Skip to main content link** on every page (`.skip-link` CSS class)
- **Semantic HTML5 elements:** `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` with appropriate `role` attributes
- **ARIA labels:** Navigation menus, social links, complementary regions
- **`aria-current="page"`** on active navigation items
- **Descriptive alt text** on all images (detailed descriptions for screen readers)
- **`role="banner"`**, **`role="navigation"`**, **`role="main"`**, **`role="complementary"`**, **`role="contentinfo"`**
- **`role="button"`** on interactive elements
- **`aria-label`** on social media links
- **`rel="noopener noreferrer"`** on external links
- **`title` attributes** on linked images for additional context
- **`loading="lazy"`** on iframe for performance

---

## File Structure

```text
jubilee/
├── index.html              # Home page
├── pastor.html             # Pastor biography page
├── faith.html              # Faith, mission, and ministries page
├── services.html           # Service times and directions page
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Robots exclusion file
├── README.md               # This file
├── dec_calendar.pdf        # December 2025 calendar PDF
├── css/
│   ├── styles.css          # Main stylesheet
│   └── color_palette.png   # Color palette reference
├── img/
│   ├── og-image.jpg        # Open Graph image (1200x630)
│   ├── jubilee_logo_*.png  # Logo in various sizes
│   ├── jubilee_text_*.png  # Header text in various sizes
│   ├── pastor_*.png        # Pastor portrait
│   ├── pastor_preaching_*.png  # Pastor preaching
│   ├── james_michelle_*.png    # James & Michelle Kelly
│   ├── church_*.png        # Church exterior
│   ├── choir_*.png         # Choir photos
│   ├── praise_dancers_*.png    # Praise dancers
│   ├── dec_cal_*.png       # Calendar thumbnails
│   ├── beach-*.png         # Header background
│   ├── footer_*.png        # Footer background
│   ├── christian_fellowship.png # Fellowship image
│   └── social icons        # facebook-25, instagram-25, x-25, youtube-25, bluesky-25
├── js/
│   └── script.js           # JavaScript (layout initialization)
└── scripts/
    └── generate-og-image.js # OG image generation script
```

---

## OG Image Generation

The Open Graph image (`img/og-image.jpg`) was generated using Node.js with the Sharp image processing library.

### Prerequisites

- Node.js
- Sharp (`npm install sharp`)

### Regenerate

```bash
node scripts/generate-og-image.js
```

The script creates a 1200×630 px JPEG with:

- Gradient background using the church's color palette
- Church name and tagline
- Service information
- Logo overlay (bottom-right)

---

## Color Palette

| Color       | Hex       | Usage                                     |
| ----------- | --------- | ----------------------------------------- |
| Teal        | `#439AA0` | Primary brand color, skip link background |
| Blue-Gray   | `#485362` | Sidebar background, accent                |
| Dark Navy   | `#283041` | Secondary, gradient                       |
| Dark Text   | `#070D20` | Body text                                 |
| Light Beige | `#E6DFD4` | Content area background                   |
| Light Gray  | `#ebe9e9` | Card backgrounds                          |
| White       | `#FFFFFF` | Text on dark backgrounds                  |

---

## Accessibility Standards

- **WCAG 2.1 AA** compliance targeted
- Skip navigation link for keyboard users
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast ratios
- Focusable interactive elements
- Descriptive link text (not generic "click here")
- All functionality available via keyboard

---

## SEO Checklist

- [x] Unique title tags per page
- [x] Meta descriptions per page
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] JSON-LD structured data
- [x] XML sitemap
- [x] robots.txt
- [x] Semantic HTML structure
- [x] Descriptive alt text on images
- [x] Mobile-friendly viewport meta tag
- [x] Fast loading (optimized images, lazy loading)

---

## Contact

- **Email:** [aw.smith@live.com](mailto:aw.smith@live.com)
- **Phone:** 301-882-7770
- **Address:** 6305 Allentown Rd, Camp Springs, MD 20768
- **Mailing:** P.O. Box 867, Camp Springs, MD 20768

---

## License

&copy; 2025 [@smithaw](https://smithaw.com). All rights reserved.
