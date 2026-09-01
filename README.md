# AW Smith - Frontend Developer Portfolio (Redesign)

A modern, high-performance portfolio showcasing frontend development projects, web design expertise, and branding work by **Anthony W Smith**, a frontend developer specializing in responsive web design, HTML/CSS/JavaScript, React, TypeScript, and user-focused web experiences.

---

## 🛠️ Modern Stack & Architecture (v2.0)

- **Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool / Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Routing**: [React Router v6](https://reactrouter.com/) (declarative client-side routing)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Server / Handlers**: Native PHP `contact.php` mail endpoint with Apache `.htaccess` rewrite rules

---

## 📁 Production & Development Structure

```text
awsmith_cv_redesign/
├── public/                       # Static root (copied verbatim to dist/)
│   ├── access21/                 # Preserved static sub-project (Web hosting)
│   ├── ghcookwriter/             # Preserved static sub-project (Author site)
│   ├── hsk/                      # Preserved static sub-project (Catering site)
│   ├── jubilee/                  # Preserved static sub-project (Church site)
│   ├── taf/                      # Preserved static sub-project (Landscaping site)
│   ├── awsmith_resume__fed.pdf   # Main resume PDF document
│   ├── thank_you.html            # Confirmation page
│   ├── contact.php               # Form POST handler
│   ├── sitemap.xml               # Web crawler sitemap
│   ├── robots.txt                # Crawler directives
│   ├── .htaccess                 # Apache SPA rewrite & static isolation rules
│   └── assets/                   # Portfolio graphics, screenshots, and PDFs
├── src/
│   ├── components/               # Layout & reusable UI components
│   ├── pages/                    # Route pages (Home, About, Projects, Detail, Resume, Contact)
│   ├── sections/                 # Main section blocks
│   ├── data/                     # Structured JSON/TS data
│   ├── hooks/                    # Custom React hooks (useTypedText, useScrollSpy)
│   ├── types/                    # TypeScript interfaces for projects, experience & forms
│   ├── App.tsx                   # Main React SPA component & routes
│   ├── main.tsx                  # React entrypoint
│   └── index.css                 # Tailwind directives & base styles
├── index.html                    # Root template with full SEO & Person JSON-LD
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── tailwind.config.js            # Tailwind theme tokens & extensions
└── vite.config.ts                # Vite bundler configuration
```

---

## 🌐 Preserved Static Sub-Projects Strategy

The following five live sub-projects remain 100% independent static applications inside `public/`:
- `/access21/`
- `/ghcookwriter/`
- `/hsk/`
- `/jubilee/`
- `/taf/`

During `npm run build`, Vite copies `public/` directly into `dist/`. The Apache `.htaccess` rules (`RewriteCond %{REQUEST_FILENAME} -d`) ensure web servers serve these directories directly from disk, bypassing the React SPA catch-all router.

---

## ✉️ Contact Form Integration Strategy

The React `Contact.tsx` component submits form data asynchronously via `fetch('/contact.php')` with an anti-spam honeypot field (`company`). `contact.php` verifies the POST data, sanitizes inputs, sends an HTML email via `mail()`, and returns JSON feedback to the React UI without requiring a full page refresh.

---

## 🚦 Getting Started & Commands

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Development Server
Start the local Vite dev server with hot module replacement:
```bash
npm run dev
```

### TypeScript Verification
Run strict TypeScript type checking without emitting files:
```bash
npm run lint
```

### Production Build
Compile the TypeScript code, bundle React assets via Vite, and pass through static sub-projects to `dist/`:
```bash
npm run build
```

---

## 📝 License

All project code and design work © Anthony W Smith. All rights reserved.
