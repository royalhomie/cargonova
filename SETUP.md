# 🚀 ExLead Logistics - Setup Instructions

## ⚠️ Important: Node.js Installation Required

This project requires **Node.js** to run. Node.js was not detected on your system during setup.

### Step 1: Install Node.js

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version for Windows
3. Run the installer and follow the installation wizard
4. Accept the default settings
5. Restart your computer after installation

### Step 2: Verify Installation

Open PowerShell or Command Prompt and run:
```bash
node --version
npm --version
```

You should see version numbers for both commands.

### Step 3: Install Project Dependencies

Navigate to the project folder and run:
```bash
cd C:\Users\USER\Desktop\exlead
npm install
```

This will install all required packages (may take a few minutes).

### Step 4: Start the Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:5173**

## 📋 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Features Implemented

✅ **Home Page** - Hero section with animations and statistics
✅ **Services Page** - 6 service cards with detailed features  
✅ **Tracking Page** - Package tracking with form validation
✅ **Contact Page** - Contact form with Formspree integration
✅ **About Page** - Company story, values, and team showcase
✅ **Dark Mode** - Toggle between light and dark themes
✅ **PWA Support** - Progressive Web App capabilities
✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Animations** - Smooth Framer Motion animations
✅ **TypeScript** - Full type safety
✅ **Form Validation** - React Hook Form + Yup validation

## 🔧 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#your-color',
    // ... other shades
  }
}
```

### Update Contact Form
In `src/pages/Contact.tsx`, replace:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/your_form_id';
```
With your actual Formspree form ID from [formspree.io](https://formspree.io/)

### Add Your Logo
Replace `public/vite.svg` with your logo (SVG, PNG, or JPG)

### Update Content
- **Services**: Edit `src/data/mockData.ts`
- **Team Members**: Edit `src/data/mockData.ts`
- **Company Info**: Edit respective page components in `src/pages/`

## 🧪 Testing Features

### Package Tracking
Use these sample tracking numbers:
- `ABC123456789` - Delivered status
- `XYZ987654321` - In Transit status  
- `DEF456789123` - Out for Delivery status

The tracking system uses localStorage, so tracking data persists between sessions.

### Dark Mode
Click the moon/sun icon in the header to toggle themes.

### Forms
All forms include validation:
- Name: minimum 2 characters
- Email: valid email format
- Tracking: 8-20 alphanumeric characters
- Message: minimum 10 characters

## 📱 PWA Installation

When running in production:
1. Visit the website in a browser
2. Look for "Install" prompt or menu option
3. Install to use as a standalone app
4. Works offline with cached content

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder via Netlify dashboard
```

### GitHub Pages
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/exlead"
```

## 📚 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Hook Form** - Form handling
- **Yup** - Schema validation
- **Lucide React** - Icons

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
The TypeScript errors you see in the IDE will disappear after running `npm install`.

## 💡 Tips

1. **Use Dark Mode** - Better for extended coding sessions
2. **Check Responsiveness** - Test on mobile, tablet, and desktop
3. **Customize Colors** - Match your brand identity
4. **Add Analytics** - Integrate Google Analytics or similar
5. **SEO Optimization** - Update meta tags in `index.html`

## 📞 Support

If you encounter issues:
1. Check that Node.js is properly installed
2. Ensure you're in the correct directory
3. Try deleting `node_modules` and running `npm install` again
4. Check the console for specific error messages

## 🎉 You're All Set!

Your ExLead Logistics website is ready. After installing Node.js and running `npm install`, you'll have a fully functional, modern logistics website!

---

**Created with ❤️ using React + TypeScript + Tailwind CSS**
