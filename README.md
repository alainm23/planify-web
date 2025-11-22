# Planify Web

Official website for [Planify](https://github.com/alainm23/planify) - A task manager with Todoist and Nextcloud support designed for GNU/Linux.

🌐 **Live Site**: [useplanify.com](https://useplanify.com)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Hosting**: Firebase Hosting
- **Analytics**: DataFast

## 📁 Project Structure

```
/
├── public/
│   ├── blog/           # Blog post images
│   ├── features/       # Feature screenshots
│   └── favicon.svg
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Blog posts (Markdown)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes
│   └── icons/          # SVG icons
├── scripts/
│   └── fetch-releases.js  # Auto-fetch GitHub releases
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/alainm23/planify-web.git
cd planify-web

# Install dependencies
npm install
```

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run fetch:releases` | Fetch latest releases from GitHub |

## 📝 Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Planify 4.16.0 Released"
date: 2024-01-15
---

Your content here...
```

## 🚢 Deployment

The site auto-deploys to Firebase Hosting via GitHub Actions on push to `main`.

### Manual Deploy

```bash
npm run build
firebase deploy
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md)

## 🔗 Links

- [Planify App Repository](https://github.com/alainm23/planify)
- [Download on Flathub](https://flathub.org/apps/details/io.github.alainm23.planify)
- [Support the Project](https://useplanify.com/support)

---

Made with ❤️ by the Planify team
