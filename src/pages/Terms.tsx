import { motion } from 'framer-motion';
import { FileText, CheckCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const Terms = () => {
  useSEO({
    title: 'Terms of Service - CargoNova Logistics | Legal Information',
    description: 'Read our terms of service, conditions of carriage, and legal policies. Understand your rights and responsibilities when using CargoNova shipping services.',
    keywords: 'terms of service, shipping terms, legal policy, conditions of carriage, CargoNova terms',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/terms'
  });

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using CargoNova\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: '2. Shipping Services',
      content: 'CargoNova provides logistics and shipping services subject to these terms. We reserve the right to refuse service to anyone for any reason at any time. All shipments are subject to our standard rates and any applicable surcharges.'
    },
    {
      title: '3. Rates and Payment',
      content: 'Shipping rates are determined based on weight, dimensions, destination, and service level. Payment is due at the time of booking unless a corporate account has been established. We accept major credit cards, PayPal, and wire transfers. All prices are subject to change without notice.'
    },
    {
      title: '4. Liability and Insurance',
      content: 'CargoNova provides basic coverage up to $100 per shipment. Additional insurance is available for purchase. We are not liable for delays, loss, or damage beyond the insured value. Claims must be filed within 30 days of delivery or expected delivery date.'
    },
    {
      title: '5. Prohibited Items',
      content: 'The following items are prohibited from shipment: hazardous materials, explosives, flammable liquids, illegal substances, weapons, perishable food items (unless specially arranged), live animals, and items prohibited by law. Shipping prohibited items may result in criminal prosecution and/or civil liability.'
    },
    {
      title: '6. Packaging Requirements',
      content: 'Customers are responsible for proper packaging of shipments. CargoNova is not liable for damage resulting from inadequate packaging. All packages must be securely sealed and properly labeled with sender and recipient information.'
    },
    {
      title: '7. Delivery and Delays',
      content: 'While we strive to meet all delivery timeframes, transit times are estimates and not guaranteed. CargoNova is not liable for delays caused by weather, customs clearance, natural disasters, strikes, or other circumstances beyond our control.'
    },
    {
      title: '8. Claims and Disputes',
      content: 'All claims for loss or damage must be filed within 30 days of delivery or expected delivery. Claims are subject to investigation and may require supporting documentation. Disputes will be resolved through arbitration in accordance with applicable laws.'
    },
    {
      title: '9. Privacy Policy',
      content: 'We collect and use customer information in accordance with our Privacy Policy. By using our services, you consent to our collection and use of personal information as outlined in our Privacy Policy.'
    },
    {
      title: '10. Modification of Terms',
      content: 'CargoNova reserves the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified terms.'
    },
    {
      title: '11. Limitation of Liability',
      content: 'In no event shall CargoNova be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services. Our total liability shall not exceed the amount paid for the specific shipment in question.'
    },
    {
      title: '12. Contact Information',
      content: 'For questions about these Terms of Service, please contact us at legal@cargonova.com or call +1 (234) 567-8900.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 dark:from-primary-800 dark:via-purple-900 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop&q=80" 
            alt="Legal documents" 
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
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Last updated: November 12, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card mb-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Important Notice
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Please read these Terms of Service carefully before using our services. By using CargoNova's services, you agree to comply with and be bound by these terms and conditions.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:legal@cargonova.com" className="btn-primary">
                  Email Legal Team
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
