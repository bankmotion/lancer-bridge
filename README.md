# LancerBridge

A modern React application built with TypeScript, Redux, and Tailwind CSS.

## Project Structure

```
src/
├── assets/           # Static assets like images, fonts, etc.
├── components/       # Reusable UI components
│   ├── common/      # Shared components (buttons, inputs, etc.)
│   ├── layout/      # Layout components (header, footer, etc.)
│   └── features/    # Feature-specific components
├── config/          # Configuration files
│   ├── constants.ts # Application constants
│   └── routes.ts    # Route configurations
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API services and external integrations
├── store/           # Redux store configuration
│   ├── slices/      # Redux slices
│   └── index.ts     # Store configuration
├── styles/          # Global styles and Tailwind configuration
├── types/           # TypeScript type definitions
└── utils/           # Utility functions and helpers
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ``` 