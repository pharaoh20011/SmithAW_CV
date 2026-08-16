# AW Smith - Frontend Developer Portfolio

A comprehensive portfolio showcasing frontend development projects, web design expertise, and branding work by **Anthony W Smith**, a frontend developer specializing in responsive web design, HTML/CSS/JavaScript, and user-focused web experiences.

## 📋 Overview

This portfolio contains the main developer resume/portfolio site along with several featured client and personal projects demonstrating full-stack frontend capabilities.

## 🚀 Projects

### Main Portfolio

The root-level site serves as the main portfolio landing page:

- **index.html** - Portfolio home page with project showcase and resume
- **contact.php** - Contact form for inquiries
- **thank_you.html** - Thank you page after form submission

**Tech Stack:** HTML5, CSS3, JavaScript, Bootstrap, Responsive Design

---

### 1. **Access21** - Web Hosting & Services Site

A professional marketing website for a web hosting and services company.

**Location:** `/access21/`

**Features:**

- Multi-page site with hosting plans, FAQ, and about pages
- Responsive navigation and layout
- Professional branding and styling

**Key Files:**

- `index.html` - Homepage
- `hosting_plans.html` - Service offerings
- `faq.html` - Frequently asked questions
- `about_us.html`, `contact_us.html`
- `css/styles.css`, `js/script.js`

---

### 2. **Heritage Soul Kitchen (HSK)** - Personal Chef & Catering

Premium, responsive marketing website for a personal chef and catering business specializing in soul food cuisine.

**Location:** `/hsk/`

**Features:**

- Mobile-first responsive design
- WCAG-conscious structure with accessibility features
- Testimonial slider and responsive gallery
- Menu showcase and catering services
- Custom brand palette and typography

**Tech Stack:** HTML5, Bootstrap 5.3, Vanilla JavaScript, Custom CSS

**Key Files:**

- `index.html` - Homepage
- `menu.html` - Menu showcase
- `catering.html` - Catering services
- `about.html` - About the chef
- `contact.html` - Contact form
- `assets/images/` - SVG placeholder assets
- `components/` - Reusable navbar and footer components

**Note:** All imagery uses high-quality SVG placeholders that can be swapped with professional photography.

---

### 3. **Jubilee** - Faith-Based Organization Site

A website for a faith-based organization/church community.

**Location:** `/jubilee/`

**Key Files:**

- `index.html` - Homepage
- `about.html` - Organization information
- `pastor.html` - Pastor/leadership information
- `services.html` - Services and programs
- `faith.html` - Faith content
- `css/styles.css`, `js/script.js`

---

### 4. **Tell-A-Friend** - Project Site

A showcase website project.

**Location:** `/taf/`

**Key Files:**

- `index.html` - Main page
- `css/style.css`
- `js/main_v2.js`
- `mp4/` - Video assets
- `assests/img/` - Image assets

---

## 📁 Project Structure

```txt
awsmith_cv/
├── index.html                 # Main portfolio homepage
├── contact.php               # Contact form
├── thank_you.html            # Form confirmation page
├── css/
│   └── styles.css           # Main portfolio styles
├── js/
│   └── scripts.js           # Main portfolio scripts
├── assets/
│   └── img/                 # Portfolio images
│       └── portfolio/       # Project showcase images
├── access21/                # Web hosting project
├── hsk/                     # Heritage Soul Kitchen project
├── jubilee/                 # Faith-based organization project
└── taf/                     # TAF project
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive design, custom styling, animations
- **JavaScript** - Vanilla JS and jQuery for interactivity
- **Bootstrap** - Responsive grid and components
- **PHP** - Backend form handling (contact.php)
- **Responsive Design** - Mobile-first approach with media queries
- **Web Accessibility** - WCAG compliance features

## ✨ Key Features Across Projects

- ✅ Fully responsive, mobile-first design
- ✅ SEO-optimized markup and metadata
- ✅ Web accessibility (WCAG standards)
- ✅ Custom brand styling and design systems
- ✅ Form handling and validation
- ✅ Image galleries and carousels
- ✅ Modular, reusable components
- ✅ Cross-browser compatibility

## 🚦 Getting Started

### Local Development

1. **Clone or Download** the repository
2. **Open a project** in your browser:
   - Main portfolio: Open `index.html` in your browser
   - Individual projects: Open the respective `index.html` files
     - HSK: `hsk/index.html`
     - Access21: `access21/index.html`
     - Jubilee: `jubilee/index.html`
     - TAF: `taf/index.html`

3. **For form testing**: Use a local server

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js with http-server
   npx http-server
   ```

   Then navigate to `http://localhost:8000`

### Dependencies

- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)
- **Server**: Any basic HTTP server for testing forms (optional for static files)

## 📧 Contact

For inquiries about these projects or services:

- Visit the portfolio: Main site at `index.html`
- Use the contact form: `contact.html` or `contact.php`

## 📝 License

All project code and design work © Anthony W Smith. All rights reserved.

---

**Last Updated:** 2026
**Developer:** Anthony W Smith - Frontend Developer

---

## 🔍 SEO & Accessibility Update (2026-08-15)

### Scope Completed

This update focused on:

- SEO meta tag improvements for ranking readiness
- Accessibility baseline checks and fixes
- Root sitemap and crawler guidance creation

### Files Updated

| File             | Changes                           |
| ---------------- | --------------------------------- |
| `index.html`     | SEO + accessibility improvements  |
| `thank_you.html` | SEO + accessibility improvements  |
| `taf/index.html` | SEO + accessibility improvements  |
| `sitemap.xml`    | Expanded site map for key pages   |
| `robots.txt`     | Added crawler guidance to sitemap |

### SEO Improvements Applied

#### `index.html`

- Added canonical URL: <https://smithaw.com/>
- Added Open Graph URL and locale
- Converted social preview image paths to absolute URLs
- Added Open Graph image alt text
- Added Twitter URL and Twitter image alt text
- Added JSON-LD Person structured data for Anthony W Smith

#### `thank_you.html`

- Added meaningful description and author metadata
- Added robots directive: `noindex, follow` to avoid indexing low-value confirmation content
- Added canonical URL
- Added Open Graph and Twitter card metadata for social consistency

#### `taf/index.html`

- Added robots directive: `index, follow, max-image-preview:large`
- Added canonical URL
- Improved Open Graph tags (absolute image URL, image alt, site name, locale)
- Corrected Twitter tags to use `name` attributes
- Updated Twitter image to absolute URL
- Added Twitter image alt text

### Accessibility Checks & Fixes

#### Applied

- Added keyboard skip links to:
  - `index.html`
  - `thank_you.html`
  - `taf/index.html`
- Added or confirmed main content targets for skip links:
  - `thank_you.html` → `#main-content`
  - `taf/index.html` → `#main-content`
- Fixed invalid HTML in `thank_you.html` by removing an extra closing list item tag

#### Verified Existing Good Coverage

- **access21** pages: canonical + Open Graph + Twitter metadata already present
- **hsk** pages: canonical + Open Graph + Twitter + skip links already present
- **jubilee** pages: canonical + Open Graph + Twitter + skip links already present

### Sitemap & Crawler Guidance

Created and finalized:

- `sitemap.xml` at the root of the site
- `robots.txt` pointing to <https://smithaw.com/sitemap.xml>

#### Included URLs

- <https://smithaw.com/>
- Access21 pages under `/access21/`
- HSK pages under `https://heritagesoulkitchen.com/`
- Jubilee pages under `/jubilee/`
- TAF homepage at <https://www.tellafriendlandscaping.com/>

> **Note:** `thank_you.html` remains intentionally omitted from the sitemap because it is set to `noindex`.

### Recommended Next Steps

- [ ] Run Lighthouse + WAVE audits for contrast, heading order, and focus states
- [ ] Add Organization/WebSite JSON-LD to any primary landing page that needs richer search visibility
- [ ] Review and refresh page-specific keywords as new content is added
