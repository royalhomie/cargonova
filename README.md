# ExLead Logistics Website

A professional, modern logistics website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design
- 🌓 Dark mode support
- 📦 Package tracking simulation
- 📱 Progressive Web App (PWA)
- 🎨 Smooth animations with Framer Motion
- 📝 Form validation with React Hook Form & Yup
- 🎯 TypeScript for type safety
- ⚡ Fast development with Vite

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Open a terminal in the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
exlead/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Tracking.tsx
│   │   ├── Contact.tsx
│   │   └── About.tsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/            # Mock data
│   │   └── mockData.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Key Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Routing
- **React Hook Form** - Form handling
- **Yup** - Form validation
- **Lucide React** - Icon library

## Features Overview

### Home Page
- Hero section with call-to-action
- Features showcase
- Statistics section
- Smooth scroll animations

### Services Page
- Service cards with hover effects
- Detailed service descriptions
- Responsive grid layout

### Tracking Page
- Package tracking simulation
- Form validation
- Real-time status updates
- Sample tracking numbers for testing

### Contact Page
- Contact form with validation
- Formspree integration (requires setup)
- Google Maps embed
- Contact information cards

### About Page
- Company story
- Mission and values
- Team member showcase
- Company statistics

## Customization

### Theme Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Formspree Setup
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the endpoint in `src/pages/Contact.tsx`:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/your_form_id';
   ```

### PWA Configuration
Edit `vite.config.ts` to customize PWA settings.

## Testing Package Tracking

Try these sample tracking numbers:
- ABC123456789
- XYZ987654321
- DEF456789123

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For support, email info@exlead.com or visit our contact page.
