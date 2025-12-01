# johnsumner.dev

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://johnsumner.dev)

My personal portfolio website built with Astro and Tailwind CSS v4. A clean, accessible, and performant showcase of my work, experience, and skills as a full-stack developer. Deployed on Cloudflare Pages.

## 🎨 Design

- **Mobile-first responsive design** with a two-column desktop layout
- **Sticky header** on desktop for easy navigation
- **Custom colour paletter** using OKLCH colour space for consistent, perceptually uniform colours
- **Custom typography scale** with Inter font family
- **Accessible components** following WCAG guidelines

## 🏗️ Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── About.astro         # About section
│   │   ├── Header.astro        # Name, title, and social links (sticky on desktop)
│   │   ├── Projects.astro      # Project showcase with clickable cards
│   │   ├── WorkExperience.astro # Work history with date column layout
│   │   ├── SocialLink.astro    # Reusable social media icon links
│   │   └── TechPill.astro      # Reusable technology badge component
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout with fonts and meta tags
│   ├── pages/
│   │   └── index.astro         # Homepage with grid layout
│   └── styles/
│       └── global.css          # Tailwind v4 config with custom theme
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Design System

### Colours (OKLCH)

- **Text**: Light colour for main content
- **Background**: Dark background
- **Primary**: Purple accent colour

### Typography

- **Font**: Inter (400, 600, 700 weights)
- **Scale**: Custom type scale from 0.75rem to 4.21rem

## 🧞 Commands

All commands are run from the root of the project:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

## 🚀 Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **Inter Font** - Google Fonts typography
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Hosting and deployment

## ✨ Features

- Fully responsive design (mobile-first approach)
- Sticky header on desktop
- Accessible components with proper ARIA labels
- Clickable project cards
- Timeline-style work experience layout
- Reusable component architecture
- Dark theme optimized for readability
- Performance optimized with Astro's zero-JS by default
- Continuous deployment via GitHub Actions to Cloudflare Pages
