import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, TrendingUp, Heart } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';
import { useLanguage } from '../contexts/LanguageContext';

const Careers = () => {
  const { t } = useLanguage();
  
  useSEO({
    title: 'Careers at CargoNova - Join Our Logistics Team | Job Opportunities',
    description: 'Explore exciting career opportunities at CargoNova. Join our global team and help shape the future of logistics. We offer competitive salaries, great benefits, and career growth.',
    keywords: 'logistics careers, freight jobs, warehouse jobs, supply chain careers, CargoNova jobs',
    ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/careers'
  });

  const openPositions = [
    {
      title: 'Senior Logistics Coordinator',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$65,000 - $85,000'
    },
    {
      title: 'Warehouse Manager',
      department: 'Warehouse Operations',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$70,000 - $90,000'
    },
    {
      title: 'Freight Sales Representative',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$55,000 - $75,000 + Commission'
    },
    {
      title: 'Supply Chain Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $80,000'
    },
    {
      title: 'Customer Service Specialist',
      department: 'Customer Support',
      location: 'Miami, FL',
      type: 'Full-time',
      salary: '$45,000 - $55,000'
    },
    {
      title: 'Fleet Operations Manager',
      department: 'Transportation',
      location: 'Dallas, TX',
      type: 'Full-time',
      salary: '$75,000 - $95,000'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: t('careers.healthTitle'),
      description: t('careers.healthDescription')
    },
    {
      icon: TrendingUp,
      title: t('careers.growthTitle'),
      description: t('careers.growthDescription')
    },
    {
      icon: DollarSign,
      title: t('careers.payTitle'),
      description: t('careers.payDescription')
    },
    {
      icon: Clock,
      title: t('careers.balanceTitle'),
      description: t('careers.balanceDescription')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 dark:from-primary-800 dark:via-purple-900 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop&q=80" 
            alt="Team collaboration" 
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
              {t('careers.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('careers.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('careers.benefitsTitle')}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              {t('careers.benefitsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-600/50 transition-shadow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('careers.positionsTitle')}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              {t('careers.positionsSubtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {position.salary}
                    </div>
                    <button className="btn-primary">
                      {t('careers.applyButton')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
