# Sprymd Docs

A modern, feature-rich documentation site built with Next.js, Fumadocs, and AI-powered search capabilities.

## 🌟 Features

- **📚 Comprehensive Documentation** - Well-organized documentation with multiple sections (Getting Started, Core Concepts, Reference Guides, Advanced, Contributing & Support)
- **🤖 AI-Powered Search** - Ask AI questions about the documentation powered by Groq
- **💬 User Feedback System** - Collect user feedback with opinions, messages, and metadata stored in JSON
- **🎨 Modern UI** - Beautiful, responsive design with dark mode support using Tailwind CSS
- **📱 Mobile Friendly** - Fully responsive layout optimized for all device sizes
- **⚡ Fast Performance** - Built with Next.js 16, Turbopack, and optimized for speed
- **🔍 Full-Text Search** - Integrated search functionality across all documentation
- **📧 GitHub Integration** - Shows last edit time for each page (with error handling)
- **🎯 Professional Branding** - Logo and favicon for consistent branding

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | React framework | 16.0.1 |
| [Fumadocs](https://fumadocs.vercel.app/) | Documentation framework | 16.1.0 |
| [Tailwind CSS](https://tailwindcss.com/) | Styling | 4.1.16 |
| [TypeScript](https://www.typescriptlang.org/) | Type safety | 5.9.3 |
| [Groq](https://groq.com) | AI provider | Latest |
| [AI SDK](https://sdk.vercel.ai/) | AI integration | 5.0.104 |
| [Lucide React](https://lucide.dev/) | Icons | 0.552.0 |
| [Zod](https://zod.dev/) | Validation | 4.1.13 |
| [npm](https://www.npmjs.com/) | Package manager | 10.0.0+ |

## 📁 Project Structure

```
fuma-docs-spry/
├── content/
│   └── docs/                    # MDX documentation files
│       ├── getting-started/
│       ├── core-concepts/
│       ├── reference-guides/
│       ├── advanced/
│       └── contributing-and-support/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/           # AI chat endpoint
│   │   │   ├── feedback/       # Feedback API
│   │   │   └── search/         # Search endpoint
│   │   ├── docs/               # Documentation pages
│   │   ├── (home)/             # Home/landing pages
│   │   ├── global.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── feedback.tsx        # User feedback component
│   │   ├── search.tsx          # AI search component
│   │   ├── markdown.tsx
│   │   └── ui/                 # UI components
│   ├── lib/
│   │   ├── db.ts               # Database layer (JSON-based)
│   │   ├── feedback.ts         # Feedback handling
│   │   ├── github-config.ts    # GitHub configuration
│   │   ├── source.ts           # Content source config
│   │   ├── layout.shared.tsx   # Shared layout options
│   │   └── cn.ts               # Utility functions
│   └── mdx-components.tsx      # MDX component mappings
├── db/
│   └── feedback.json           # Feedback database (auto-created)
├── public/
│   ├── favicon.ico             # Browser tab icon
│   ├── logo.png                # Navigation logo
│   └── logo.svg                # SVG logo variant
├── .env.local.example          # Environment template
├── source.config.ts            # Fumadocs MDX config
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** 10 or higher (comes with Node.js)
- **Git**
- **Groq API Key** (free at https://console.groq.com/keys)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vidhyagopinadh/fuma-docs-spry.git
   cd fuma-docs-spry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
4. **Add required API keys** to `.env.local`:
   ```env
   # Required: Get free key at https://console.groq.com/keys
   GROQ_API_KEY=gsk_your_actual_key_here
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Environment Variables

### Required

| Variable | Description | Get Value |
|----------|-------------|-----------|
| `GROQ_API_KEY` | Groq AI API key for search | [console.groq.com/keys](https://console.groq.com/keys) |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `GITHUB_TOKEN` | GitHub token for last edit time | (not set) |
| `NEXT_PUBLIC_GITHUB_OWNER` | GitHub repository owner | vidhyagopinadh |
| `NEXT_PUBLIC_GITHUB_REPO` | GitHub repository name | fuma-docs-spry |
| `NEXT_PUBLIC_GITHUB_DOCS_PATH` | Path to docs in repo | content/docs |

### Environment Setup Example

```env
# .env.local

# AI Search (Required)
GROQ_API_KEY=gsk_abcdef123456...


## 📖 Documentation Guide

### Adding New Documentation

1. Create a new `.mdx` file in `content/docs/` subdirectory
2. Add frontmatter:
   ```mdx
   ---
   title: Your Page Title
   description: Brief description of the page
   ---

   Your content here using MDX syntax...
   ```

3. Update corresponding `meta.json` to include your page in navigation

### Documentation Structure

- **Getting Started** - Installation, quick-start, and introductory guides
- **Core Concepts** - Fundamental concepts and theory
- **Reference Guides** - CLI commands, configuration options
- **Advanced** - Best practices and troubleshooting
- **Contributing & Support** - Contribution guidelines and help

## 💬 Features Guide

### 🤖 AI Search

Users can access AI search by:
- Clicking the **Ask AI** button (bottom-right)
- Using keyboard shortcut: `Cmd+/` (Mac) or `Ctrl+/` (Windows/Linux)

**Features:**
- Natural language questions
- AI-powered answers with relevant links
- Retry/regenerate responses
- Full conversation history
- Powered by Groq (Llama 3.3 70B model)

### 👍 Feedback System

Users can provide feedback on individual pages:
- **Thumbs Up** - Mark page as helpful
- **Thumbs Down** - Mark page as unhelpful
- **Optional Message** - Add detailed feedback
- **Automatic Metadata** - Captures user agent, timezone, platform

**Storage:**
- Saved to `db/feedback.json` (auto-created)
- Session tracking for feedback sessions
- Full timestamp information

### 🔍 Search

Built-in full-text search across all documentation:
- Fast and responsive
- Shows relevant results
- Easy navigation to found pages

## 🔧 Configuration

### Site Navigation (`src/lib/layout.shared.tsx`)

Customize navigation, title, and branding:
- Logo: Displays `public/logo.png`
- Title: "Sprymd Docs"
- Navigation options

### Styling

- **Tailwind CSS 4**: Main styling framework
- **CSS-in-JS**: PostCSS for advanced styling
- **Dark Mode**: Built-in support via Fumadocs

## 📊 Database

### Feedback Storage

Feedback is stored in `db/feedback.json`:

```json
[
  {
    "id": 1,
    "url": "/docs/getting-started",
    "opinion": "good",
    "message": "Very helpful!",
    "session_id": "1701520800000-abc123",
    "metadata": "{\"userAgent\":\"...\",\"ip\":\"...\"}",
    "created_at": "2024-12-02T10:00:00Z"
  }
]
```

## 🌐 API Routes

### POST `/api/feedback`
Save user feedback
```json
{
  "type": "good" | "bad",
  "page": "/docs/page-path",
  "timestamp": "2024-12-02T10:00:00Z"
}
```
**Response**: `{ success: true }`

### POST `/api/chat`
AI-powered chat for documentation Q&A
- Uses Groq API (Llama 3.3 70B)
- Context-aware responses
- Error handling for missing API key

### GET `/api/search`
Full-text search across documentation
- Query parameter: `q`
- Returns relevant pages

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server on :3000
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run types:check      # Check TypeScript types
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project at [Vercel Dashboard](https://vercel.com)
3. Add environment variables:
   - `GROQ_API_KEY`
   - `GITHUB_TOKEN` (optional)
   - `NEXT_PUBLIC_GITHUB_*` variables
4. Deploy

### Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Self-Hosted

```bash
# Build
npm run build

# Deploy the following to your server:
# - .next/ directory
# - db/ directory
# - public/ directory
# - package.json
# - package-lock.json

# Set environment variables and run:
npm install --prod
npm start
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| AI Search not working | Verify `GROQ_API_KEY` is set in `.env.local`, check `/api/chat` route |
| Feedback not saving | Check `db/` directory permissions, verify `feedback.json` exists |
| GitHub last edit not showing | Add `GITHUB_TOKEN` to `.env.local`, check path format |
| Build fails | Clear `.next` with `rm -rf .next`, reinstall deps with `npm install` |
| TypeScript errors | Run `npm run types:check` to identify issues |
| Module not found | Run `npm install` to ensure all dependencies installed |
| Favicon not showing | Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R) |

## 📊 Performance

- **Build Time**: ~2-3s (dev), ~30s (production)
- **Page Load**: < 1s (optimized)
- **Search**: < 100ms
- **AI Response**: 2-5s (depends on Groq)

## 🤝 Contributing

See [Contributing Guide](content/docs/contributing-and-support/contributing-to-spry.mdx) for:
- Reporting issues
- Creating pull requests
- Documentation standards
- Code style guidelines

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 📞 Support

- 📖 [Documentation](https://your-docs-url.com)
- 🐛 [Report Issues](https://github.com/vidhyagopinadh/fuma-docs-spry/issues)
- 💬 [Discussions](https://github.com/vidhyagopinadh/fuma-docs-spry/discussions)
- 📧 Contact: support@example.com

## 🔗 Resources

- [Fumadocs Docs](https://fumadocs.vercel.app/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Groq API Docs](https://console.groq.com/docs)
- [AI SDK Docs](https://sdk.vercel.ai/)

## 📝 Changelog

### v0.1.0 (Current)
- ✅ Documentation structure setup
- ✅ AI-powered search integration with Groq
- ✅ User feedback system with JSON storage
- ✅ Responsive design with dark mode
- ✅ GitHub integration with error handling
- ✅ Professional branding (logo & favicon)
- ✅ Environment variable configuration
- ✅ Complete API documentation

### v0.0.1 (Initial Release)
- Initial project setup

## 🙏 Acknowledgments

- Built with [Fumadocs](https://fumadocs.vercel.app/)
- Powered by [Groq](https://groq.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ by the Sprymd team**

Last Updated: December 2, 2025