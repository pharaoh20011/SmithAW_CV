# Heritage Soul Kitchen Landing Site

Premium, responsive, multi-page marketing website for a personal chef and catering business specializing in soul food cuisine.

## Tech Stack

- HTML5
- Bootstrap 5.3
- Vanilla JavaScript
- Custom CSS design system

## Pages

- index.html
- about.html
- menu.html
- catering.html
- contact.html

## Key Features

- Mobile-first responsive design
- WCAG-conscious structure (skip link, alt text, semantic sections, labels)
- Comprehensive SEO metadata on all pages
- Custom brand palette and typography
- Testimonial slider and responsive masonry gallery
- Local image assets (SVG placeholders) for hero, menu, gallery, and service sections

## SEO Implementation

Every page includes the following SEO-optimized meta tags for improved search engine ranking:

### Standard Meta Tags

- **title**: Unique, keyword-rich title tags per page (includes location: "Washington DC")
- **description**: Compelling, descriptive meta descriptions (150-160 characters) with primary keywords
- **keywords**: Page-specific keyword sets targeting soul food, catering, personal chef, and Washington DC
- **author**: Heritage Soul Kitchen
- **robots**: `index, follow` on all pages
- **geo.region**: `US-DC`
- **geo.placename**: `Washington, DC`
- **theme-color**: `#1a1a2e` (brand color, homepage only)

### Open Graph (Facebook / LinkedIn)

- `og:type`, `og:url`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:locale`
- Each page has a unique `og:url` and page-specific OG title/description/image
- `og:image:width` (1200) and `og:image:height` (630) set on homepage for optimal sharing

### Twitter Cards

- `twitter:card` set to `summary_large_image` on all pages
- Unique title, description, and image per page

### Canonical URLs

- Full absolute canonical URLs (`https://heritagesoulkitchen.com/...`) on all pages to prevent duplicate content issues

### Structured Data (JSON-LD)

- `LocalBusiness` schema on the homepage with name, description, phone, email, service area, and cuisine type

### Page-by-Page Breakdown

| Page              | Target Keywords                                                                    | Canonical URL                                   |
| ----------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------- |
| **index.html**    | soul food catering Washington DC, personal chef DC, private dining DC              | `https://heritagesoulkitchen.com/`              |
| **about.html**    | Chef Marcus Johnson, African American chef DC, soul food chef Washington DC        | `https://heritagesoulkitchen.com/about.html`    |
| **menu.html**     | soul food menu Washington DC, fried chicken catering, oxtails catering             | `https://heritagesoulkitchen.com/menu.html`     |
| **catering.html** | soul food catering Washington DC, wedding catering DC, corporate event catering DC | `https://heritagesoulkitchen.com/catering.html` |
| **contact.html**  | book soul food catering DC, catering quote Washington DC, private chef booking DC  | `https://heritagesoulkitchen.com/contact.html`  |

## Local Run

Open `index.html` in a browser.

## Notes on Imagery

All visuals in `assets/images` are high-quality SVG placeholder assets generated for this project and designed to align with the brand style. These can be swapped with professional photography later without structural code changes.
