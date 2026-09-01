# GHCookwriter Website

Official website for **GHCOOKwriter** and _The Encounter Trilogy_.

This project is a mostly static website built with HTML, CSS, JavaScript, and a small PHP contact form handler.

## Tech Stack

- HTML5
- CSS3 (custom styles + Bootstrap)
- JavaScript (jQuery + UI plugins)
- PHP (contact form email handling)
- JSON-LD Structured Data (Schema.org for rich snippets)

## SEO & Meta Tags

Both `index.html` and `thank_you.html` include comprehensive SEO meta tags for maximum search engine visibility:

- **Primary Meta Tags**: Optimized `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`, `<meta name="author">`, and `<link rel="canonical">`
- **Open Graph Tags**: `og:title`, `og:description`, `og:image` (1200x630), `og:url`, `og:site_name`, `og:locale` — for Facebook, LinkedIn, and Pinterest sharing
- **Twitter Card Tags**: `summary_large_image` card with `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`, and `twitter:creator`
- **JSON-LD Structured Data** (embedded in `index.html`):
  - `WebSite` schema with search action
  - `Person` schema for author George H Cook with social media `sameAs` links
  - `BookSeries` schema for The Encounter Trilogy with individual book entries
- **Favicons**: Multiple sizes (16x16, 32x32, 180x180, 512x512) for all devices
- **Descriptive `alt` attributes**: All images include keyword-rich alt text for image search optimization
- **Semantic HTML**: Proper heading hierarchy (`h1`–`h5`), landmark elements, and ARIA attributes
- **Performance**: Minified CSS/JS, optimized images, and responsive design for mobile-first indexing
- **Accessibility**: `lang="en"`, `aria-label`, `role` attributes, and form labels

## Project Structure

- `index.html`: Main landing page (hero, screenshots, about, testimonials, contact section)
- `contact.php`: Handles contact form submission and sends email
- `thank_you.html`: Confirmation page after successful form submission
- `css/`: Stylesheets (Bootstrap, animations, carousel, custom styles)
- `js/`: JavaScript libraries and site behavior (`main.js`)
- `images/`: Site graphics, screenshots, logos, favicons, and media assets
- `fonts/`: Icon and font assets
- `scss/`: Source Sass files for style maintenance
- `audio/`: Audio assets

## Requirements

For viewing static pages only:

- Any modern browser

For contact form functionality (`contact.php`):

- PHP-enabled web server (Apache/Nginx + PHP)
- Working mail configuration on the server (for `mail()`)

## Local Development

### Option 1: Static preview only

Open `index.html` directly in a browser.

Note: contact form submission will not work in this mode.

### Option 2: Run with local PHP server

From the project root:

```powershell
php -S localhost:8000
```

Then open:

- `http://localhost:8000/index.html`

This lets you test routing and the PHP endpoint behavior.

## Contact Form Flow

1. User submits the contact form on the site.
2. Form posts to `contact.php`.
3. `contact.php` validates/sanitizes input and checks a honeypot field (`company`).
4. If email sends successfully, user is redirected to `thank_you.html`.

## Configuration

In `contact.php`, update these values for your environment:

- Recipient address:
  - `$to = "info@ghcookwriter.com";`
- Sender header:
  - `From: ghcookwriter info <info@ghcookwriter.com>`

Important: use a real mailbox configured on your hosting provider/cPanel for reliable delivery.

## Deployment Notes

- Deploy files to a PHP-capable host.
- Ensure `contact.php` is executable by the server and mail is enabled.
- Keep directory structure intact because assets are referenced with relative paths.

## Maintenance

- Edit content and sections in `index.html`.
- Adjust visual styling in `css/style.css` (or update source Sass in `scss/` and recompile if you use a Sass workflow).
- Update JavaScript interactions in `js/main.js`.

## License

No license file is currently included in this repository. Add one if you want to define reuse terms.
