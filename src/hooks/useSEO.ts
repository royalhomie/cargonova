import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
}

const defaultSEO = {
  title: 'CargoNova - Professional Logistics & Freight Services | Global Shipping Solutions',
  description: 'CargoNova provides world-class logistics, freight forwarding, warehousing, and package tracking services. Fast, secure, and reliable shipping solutions worldwide with real-time tracking.',
  keywords: 'logistics, shipping, freight forwarding, warehousing, package tracking, air cargo, ocean freight, supply chain, international shipping',
  ogImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80'
};

const useSEO = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  canonicalPath = ''
}: SEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', `https://cargonova-logistics.com${canonicalPath || location.pathname}`, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);
    updateMetaTag('twitter:url', `https://cargonova-logistics.com${canonicalPath || location.pathname}`, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://cargonova-logistics.com${canonicalPath || location.pathname}`);

  }, [title, description, keywords, ogImage, canonicalPath, location.pathname]);
};

export default useSEO;
