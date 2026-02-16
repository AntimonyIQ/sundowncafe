# Sundown Cafe

A modern frontend web application for Sundown Cafe, built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Code Formatting

```bash
npm run format
```

## 🎨 Brand Colors

The project uses Sundown Cafe's brand colors configured in Tailwind:

- **brand-orange**: `#FF6B35` - Primary brand color
- **brand-black**: `#1A1A1A` - Deep black for text and backgrounds
- **brand-green**: `#4CAF50` - Fresh green accent

Use these colors in your components via Tailwind utility classes:

```tsx
<div className="bg-brand-orange text-white">
  <h1 className="text-brand-black">Sundown Cafe</h1>
</div>
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, logos, icons)
├── components/      # Reusable UI components
├── layouts/         # Page layout wrappers (Navbar, Footer)
├── pages/           # Route-level page components
├── routes/          # React Router configuration
├── hooks/           # Custom React hooks
├── utils/           # Helper functions and utilities
├── styles/          # Additional CSS files
└── types/           # TypeScript type definitions
```

## 🛣️ Routes

- **Home** (`/`) - Landing page with hero section and welcome content
- **Menu** (`/menu`) - Digital menu page with QR code support

### Menu Query Parameters

The menu page supports query parameters for QR code usage:

```
/menu?seat=12        # Displays "Seat 12"
/menu?seat=A5        # Displays "Seat A5"
/menu?seat=VIP-01    # Displays "Table VIP-01"
```

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Key Dependencies

- `react` & `react-dom` - Core React libraries
- `react-router-dom` - Routing
- `tailwindcss` - Styling
- `@tailwindcss/postcss` - Tailwind PostCSS plugin
- `typescript` - TypeScript compiler
- `vite` - Build tool

## 🎯 Future Development

This is the initial project setup. Future features to implement:

- Menu item listings and categories
- Shopping cart functionality
- Order placement system
- Payment integration
- User authentication
- Order history

## 📝 License

See LICENSE file for details.
