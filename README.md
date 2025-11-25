# Sports Travel Packages - Landing Page

A modern, responsive landing page for premium sports travel experiences. Built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Interactive package showcases for major sporting events
- Integrated contact form with validation
- WhatsApp integration for instant communication
- FAQ section with accordion interface
- SEO optimized with meta tags and semantic HTML

## Technology Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd sports-travel-packages

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── ContactForm.tsx # Contact form with validation
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Key Components

- **Navigation**: Fixed header with smooth scrolling
- **Hero**: Full-screen hero section with CTA
- **Featured Event**: Highlighted event showcase
- **Top Packages**: Grid of premium sports packages
- **Contact Form**: Form with validation and toast notifications
- **FAQ**: Accordion-style frequently asked questions

## Customization

The design system can be customized through:
- `src/index.css`: CSS variables and global styles
- `tailwind.config.ts`: Tailwind theme configuration

## License

All rights reserved.
