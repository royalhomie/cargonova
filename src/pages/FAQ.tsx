import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  useSEO({
    title: 'FAQ - Frequently Asked Questions | CargoNova Logistics',
    description: 'Find answers to common questions about shipping, tracking, pricing, and more. Get help with your logistics needs at CargoNova.',
    keywords: 'shipping FAQ, logistics questions, tracking help, freight answers, CargoNova support',
    ogImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/faq'
  });

  const faqs = [
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Delivery times vary based on destination and service level. Domestic shipments typically take 2-5 business days, while international shipments can take 5-14 business days. Express options are available for faster delivery.'
        },
        {
          q: 'Do you offer international shipping?',
          a: 'Yes! We ship to over 200 countries worldwide. Our global network ensures reliable delivery to virtually any destination. International shipping rates and transit times vary by location.'
        },
        {
          q: 'What items cannot be shipped?',
          a: 'Hazardous materials, flammable liquids, perishable goods (unless specially arranged), illegal items, and certain restricted items cannot be shipped. Contact us for a complete list of prohibited items.'
        },
        {
          q: 'Can I schedule a specific delivery date?',
          a: 'Yes, we offer scheduled delivery services for an additional fee. You can choose your preferred delivery date during checkout or contact our customer service team to arrange.'
        }
      ]
    },
    {
      category: 'Tracking & Updates',
      questions: [
        {
          q: 'How do I track my shipment?',
          a: 'Use your tracking number on our tracking page to get real-time updates. You\'ll also receive email and SMS notifications at key milestones during transit.'
        },
        {
          q: 'What if my tracking shows no updates?',
          a: 'Tracking information may take 24-48 hours to appear in our system after shipping. If you still don\'t see updates after this period, please contact our support team with your tracking number.'
        },
        {
          q: 'Can I change the delivery address after shipping?',
          a: 'Address changes are possible for an additional fee if the package hasn\'t reached the final delivery facility. Contact us immediately with your tracking number to request changes.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How is shipping cost calculated?',
          a: 'Shipping costs are based on package weight, dimensions, destination, and service level. Use our online calculator for instant quotes, or contact us for custom pricing on large or regular shipments.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, wire transfers, and corporate accounts for business customers.'
        },
        {
          q: 'Do you offer volume discounts?',
          a: 'Yes! We offer competitive rates for high-volume shippers and corporate accounts. Contact our sales team to discuss custom pricing based on your shipping volume.'
        }
      ]
    },
    {
      category: 'Insurance & Claims',
      questions: [
        {
          q: 'Is my shipment insured?',
          a: 'Basic coverage is included for all shipments up to $100. Additional insurance is available for valuable items. We recommend insuring high-value shipments for peace of mind.'
        },
        {
          q: 'How do I file a claim for lost or damaged items?',
          a: 'File a claim within 30 days of delivery (or expected delivery for lost items) through our online claims portal. Provide tracking number, photos of damage, and proof of value.'
        },
        {
          q: 'How long does the claims process take?',
          a: 'Most claims are processed within 10-15 business days. Complex cases may take longer. You\'ll receive updates throughout the process via email.'
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
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
