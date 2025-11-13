import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Create SVG favicon with truck logo
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#grad1)"/>
        <g transform="translate(25, 25)">
          <path d="M0 20 L25 20 L25 30 L30 30 L35 25 L45 25 L50 30 L50 45 L0 45 Z" fill="white" opacity="0.9"/>
          <rect x="32" y="30" width="18" height="10" fill="white" opacity="0.7" rx="2"/>
          <circle cx="12" cy="45" r="6" fill="white"/>
          <circle cx="38" cy="45" r="6" fill="white"/>
          <circle cx="12" cy="45" r="3" fill="url(#grad1)"/>
          <circle cx="38" cy="45" r="3" fill="url(#grad1)"/>
          <rect x="2" y="25" width="8" height="12" fill="white" opacity="0.8" rx="1"/>
        </g>
      </svg>
    `;

    // Create blob and object URL
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    // Update favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    link.type = 'image/svg+xml';
    link.href = url;

    // Also update apple touch icon
    let appleLink: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']");
    if (appleLink) {
      appleLink.href = url;
    }

    // Cleanup
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return null;
};

export default Favicon;
