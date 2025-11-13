import { motion } from 'framer-motion';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const Press = () => {
  useSEO({
    title: 'Press & News - CargoNova Logistics | Latest Updates & Media Kit',
    description: 'Get the latest news, press releases, and media resources from CargoNova. Download our media kit and stay updated with our logistics innovations.',
    keywords: 'CargoNova news, press releases, media kit, logistics news, company updates',
    ogImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/press'
  });

  const pressReleases = [
    {
      date: '2025-11-10',
      title: 'CargoNova Expands Operations to 50 New Countries',
      excerpt: 'Leading logistics provider announces major expansion initiative to serve customers in emerging markets across Asia, Africa, and South America.',
      category: 'Expansion'
    },
    {
      date: '2025-10-15',
      title: 'CargoNova Achieves Carbon Neutral Certification',
      excerpt: 'Company commits to sustainable logistics with new eco-friendly fleet and renewable energy initiatives across all warehouses.',
      category: 'Sustainability'
    },
    {
      date: '2025-09-20',
      title: 'Record Q3 Performance: 500,000+ Deliveries',
      excerpt: 'CargoNova celebrates milestone quarter with exceptional growth in package volume and customer satisfaction ratings.',
      category: 'Performance'
    },
    {
      date: '2025-08-05',
      title: 'New AI-Powered Tracking System Launch',
      excerpt: 'Revolutionary tracking technology provides real-time updates and predictive delivery estimates with 99.9% accuracy.',
      category: 'Technology'
    },
    {
      date: '2025-07-12',
      title: 'Partnership with Global E-Commerce Leaders',
      excerpt: 'Strategic partnerships announced with major online retailers to provide seamless logistics solutions worldwide.',
      category: 'Partnership'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      size: '2.4 MB'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      size: '5.1 MB'
    },
    {
      title: 'Press Kit 2025',
      description: 'Comprehensive media kit with company info and images',
      size: '12.8 MB'
    },
    {
      title: 'Executive Photos',
      description: 'High-resolution photos of leadership team',
      size: '8.3 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 dark:from-primary-800 dark:via-purple-900 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop&q=80" 
            alt="Press conference" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-purple-900 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Press & News
            </h1>
            <p className="text-xl text-blue-100">
              Latest updates and media resources from CargoNova
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Latest Press Releases</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Stay informed with our latest company news and announcements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                        {release.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {release.excerpt}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Media Resources</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Download our official media kit and brand assets
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {resource.description}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Size: {resource.size}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Download className="h-6 w-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Media Inquiries
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              For press inquiries, interviews, or additional information, please contact our media relations team.
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> press@cargonova.com</p>
              <p><strong>Phone:</strong> +1 (681) 528-6780</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
