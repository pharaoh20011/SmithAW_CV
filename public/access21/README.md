# Access21 Bulk Email

A static website for Access21 Bulk Email, a bulk email marketing service provider.

## Production URL

**https://smithaw.com/access21/**

## SEO Configuration

### Meta Tags (All Pages)

Each page includes the following SEO meta tags:

| Tag                                            | Purpose                                          |
| ---------------------------------------------- | ------------------------------------------------ |
| `<meta name="description">`                    | Page-specific description for search snippets    |
| `<meta name="keywords">`                       | Page-specific keywords for search relevance      |
| `<meta name="robots" content="index, follow">` | Allows search engine indexing and link following |
| `<meta name="author">`                         | Author attribution                               |

### Canonical URLs

All pages use canonical URLs pointing to the production domain:

| Page          | Canonical URL                                     |
| ------------- | ------------------------------------------------- |
| Home          | `https://smithaw.com/access21/`                   |
| About Us      | `https://smithaw.com/access21/about_us.html`      |
| Hosting Plans | `https://smithaw.com/access21/hosting_plans.html` |
| FAQ           | `https://smithaw.com/access21/faq.html`           |
| Contact Us    | `https://smithaw.com/access21/contact_us.html`    |

### Open Graph & Twitter Cards

Each page includes Open Graph (`og:`) and Twitter Card meta tags for social sharing previews. The shared preview image is a custom 1200x630px Open Graph image:

- **Image:** `img/og_image_1200x630.png`
- **Full URL:** `https://smithaw.com/access21/img/og_image_1200x630.png`
- **Dimensions:** 1200 × 630 pixels (recommended aspect ratio for social sharing)
- **Design:** Blue background with Access21 logo and "Access21 Bulk Email" branding text

### Sitemap

- **File:** `sitemap.xml`
- **URL:** `https://smithaw.com/access21/sitemap.xml`
- Lists all 5 pages with priorities and last modified dates.

### Robots.txt

- **File:** `robots.txt`
- **URL:** `https://smithaw.com/access21/robots.txt`
- Allows all crawlers access to the entire site.
- Points to the sitemap location.

## Accessibility Standards

The following accessibility features are implemented across all pages:

- **Semantic HTML5 elements:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- **`lang="en"` attribute** on `<html>` tag for screen reader language detection
- **`aria-label` attributes** on navigation elements (`<nav aria-label="Primary navigation">`, `<nav aria-label="Footer navigation">`)
- **`aria-label` on interactive elements** (hamburger toggle button: `aria-label="Toggle navigation"`)
- **Descriptive `alt` text** on all images for screen readers
- **`<h1>` through `<h3>` heading hierarchy** for proper document outline
- **`<label>` elements** associated with form inputs via `for`/`id` attributes
- **`scope` attributes** on table headers (`scope="col"`, `scope="row"`)
- **`<caption>` element** on data tables
- **`rel="noopener noreferrer"`** on all external links for security
- **Skip navigation** via keyboard-accessible hamburger menu
- **Color contrast** maintained between text and background

## Page Structure

- `index.html` - Home page
- `about_us.html` - About Us page
- `hosting_plans.html` - Hosting Services & Rates
- `faq.html` - Frequently Asked Questions
- `contact_us.html` - Contact page with form

## Assets

- `css/styles.css` - Stylesheet
- `js/script.js` - JavaScript (hamburger menu, contact form)
- `img/` - Image assets

## Deployment

Deploy all files to the `access21` subdirectory of `https://smithaw.com/` so that:

- `https://smithaw.com/access21/` serves `index.html`
- `https://smithaw.com/access21/sitemap.xml` serves the sitemap
- `https://smithaw.com/access21/robots.txt` serves robots.txt
