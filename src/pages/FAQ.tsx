import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  useSEO({
    title: t('faq.seoTitle'),
    description: t('faq.seoDescription'),
    keywords: 'shipping FAQ, logistics questions, tracking help, freight answers, CargoNova support',
    ogImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/faq'
  });

  const faqs = [
    {
      category: t('faq.shippingCategory'),
      questions: [
        {
          q: t('faq.shippingQ1'),
          a: t('faq.shippingA1')
        },
        {
          q: t('faq.shippingQ2'),
          a: t('faq.shippingA2')
        },
        {
          q: t('faq.shippingQ3'),
          a: t('faq.shippingA3')
        },
        {
          q: t('faq.shippingQ4'),
          a: t('faq.shippingA4')
        }
      ]
    },
    {
      category: t('faq.trackingCategory'),
      questions: [
        {
          q: t('faq.trackingQ1'),
          a: t('faq.trackingA1')
        },
        {
          q: t('faq.trackingQ2'),
          a: t('faq.trackingA2')
        },
        {
          q: t('faq.trackingQ3'),
          a: t('faq.trackingA3')
        }
      ]
    },
    {
      category: t('faq.pricingCategory'),
      questions: [
        {
          q: t('faq.pricingQ1'),
          a: t('faq.pricingA1')
        },
        {
          q: t('faq.pricingQ2'),
          a: t('faq.pricingA2')
        },
        {
          q: t('faq.pricingQ3'),
          a: t('faq.pricingA3')
        }
      ]
    },
    {
      category: t('faq.insuranceCategory'),
      questions: [
        {
          q: t('faq.insuranceQ1'),
          a: t('faq.insuranceA1')
        },
        {
          q: t('faq.insuranceQ2'),
          a: t('faq.insuranceA2')
        },
        {
          q: t('faq.insuranceQ3'),
          a: t('faq.insuranceA3')
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 dark:from-primary-800 dark:via-purple-900 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=600&fit=crop&q=80" 
            alt="FAQ" 
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
              {t('faq.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t('faq.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('faq.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const index = catIndex * 100 + qIndex;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: qIndex * 0.05 }}
                        className="card"
                      >
                        <button
                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                          className="w-full flex items-center justify-between gap-4 text-left"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.q}
                          </h3>
                          <motion.div
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No questions found matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
              <a href="tel:+1234567890" className="btn-secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
