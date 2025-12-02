# fuma-docs-spry

A modern documentation site built with [Fumadocs](https://fumadocs.dev) and [Next.js](https://nextjs.org).

## Overview

This project is a Next.js application generated with [Create Fumadocs](https://github.com/fuma-nama/fumadocs), designed to create beautiful, performant documentation sites with minimal configuration.

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm, pnpm, or yarn package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vidhyagopinadh/fuma-docs-spry.git
cd fuma-docs-spry
npm install
```

### Running the Development Server

Start the development server using one of the following commands:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the documentation site.

## Project Structure

The project follows a standard Next.js structure with Fumadocs integration:

| Route | Description |
|-------|-------------|
| `app/(home)` | Landing page and other general pages |
| `app/docs` | Documentation layout and pages |
| `app/api/search/route.ts` | API route handler for documentation search |
| `lib/source.ts` | Content source adapter; provides the interface to access your documentation content and the `loader()` function |
| `lib/layout.shared.tsx` | Shared layout options; optional but recommended for consistency |
| `source.config.ts` | Configuration file for customizing options like frontmatter schema |

## Key Features

- **MDX Support**: Write documentation using MDX format for dynamic content
- **Full-Text Search**: Built-in search functionality via the API route
- **Customizable Layout**: Shared layout configuration for consistent styling
- **Content Source Adapter**: Flexible content management system
- **Modern UI**: Beautiful, responsive documentation interface

## Customization

### Content Source Configuration

Edit `source.config.ts` to customize your documentation setup, including:
- Frontmatter schema
- Content organization
- Metadata handling

### Layout Options

Modify `lib/layout.shared.tsx` to adjust shared layout settings across your documentation.

### Adding Documentation

Place your MDX files in the `app/docs` directory and they will automatically be included in your documentation site.

## Learning Resources

- [Fumadocs Documentation](https://fumadocs.dev) - Learn about Fumadocs features and configuration
- [Next.js Documentation](https://nextjs.org/docs) - Explore Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## Building for Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Technologies

- **Framework**: [Next.js](https://nextjs.org)
- **Documentation Engine**: [Fumadocs](https://fumadocs.dev)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (typical for Fumadocs projects)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this documentation site.

## License

This project is open source and available under the MIT License.

---

For more information and support, visit [Fumadocs](https://fumadocs.dev) or check the [Next.js documentation](https://nextjs.org/docs).