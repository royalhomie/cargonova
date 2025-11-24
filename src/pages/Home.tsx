import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Package, Globe, Shield, Clock, Award, Truck, Star, CheckCircle2, TrendingUp } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { useState, useEffect } from 'react';
import NavigationArrows from '../components/NavigationArrows';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useSEO({
    title: 'CargoNova - Professional Logistics & Freight Services | Global Shipping Solutions',
    description: 'World-class logistics, freight forwarding, warehousing, and package tracking services. Fast, secure, and reliable shipping solutions worldwide with real-time tracking and 24/7 customer support.',
    keywords: 'logistics services, freight forwarding, warehousing, package tracking, international shipping, air cargo, ocean freight, supply chain management, CargoNova',
    ogImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/'
  });

  // Carousel data
  const carouselSlides = [
    {
      icon: Truck,
      title: 'Express Delivery',
      description: 'Lightning-fast shipping to over 200 countries worldwide',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop&q=80',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive logistics infrastructure across all continents',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&q=80',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Secure Transport',
      description: 'Advanced tracking and insurance for complete peace of mind',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficient',
      description: 'Optimized routes and competitive pricing for maximum value',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&q=80',
      color: 'from-orange-600 to-red-600'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Express shipping options with same-day delivery available'
    },
    {
      icon: Shield,
      title: 'Secure Shipping',
      description: 'Advanced security measures to protect your valuable cargo'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide shipping to over 200 countries and territories'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Award-winning customer service available 24/7'
    }
  ];

  const stats = [
    { value: '500K+', label: 'Packages Delivered' },
    { value: '200+', label: 'Countries Covered' },
    { value: '99.9%', label: 'On-Time Delivery' },
    { value: '50K+', label: 'Happy Customers' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80" 
            alt="Logistics warehouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-32 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/tracking')}
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
                >
                  <Package className="h-5 w-5" />
                  {t('common.trackPackage')}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services"
                  className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  {t('nav.services')}
                </Link>
                <Link
                  to="/booking"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
                >
                  <Truck className="h-5 w-5" />
                  {t('common.bookShipment')}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white dark:text-gray-900" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              {t('services.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
              {t('services.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featureImages = [
                'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop&q=80', // Fast delivery - delivery truck on road
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80', // Secure shipping - warehouse security/locked cargo
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&q=80', // Global coverage - world map/international shipping
                'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&q=80'  // Quality service - professional handshake/business
              ];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center group hover:scale-105"
                >
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                    <img
                      src={featureImages[index]}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with enhanced styling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logistics Features Carousel */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Core Capabilities</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover what makes CargoNova the preferred choice for global logistics
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {carouselSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 0.95,
                      x: currentSlide === index ? 0 : 100
                    }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className={`absolute inset-0 ${
                      currentSlide === index ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                  >
                    <div className="relative h-full">
                      {/* Background Image */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`}></div>
                      
                      {/* Content */}
                      <div className="relative h-full flex items-center justify-center text-white p-12">
                        <div className="text-center max-w-2xl">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: currentSlide === index ? 1 : 0 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            className="mb-6"
                          >
                            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
                              <Icon className="h-12 w-12" />
                            </div>
                          </motion.div>
                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ 
                              y: currentSlide === index ? 0 : 20, 
                              opacity: currentSlide === index ? 1 : 0 
                            }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                          >
                            {slide.title}
                          </motion.h3>
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ 
                              y: currentSlide === index ? 0 : 20, 
                              opacity: currentSlide === index ? 1 : 0 
                            }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90"
                          >
                            {slide.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-primary-600 dark:bg-primary-400 w-12'
                      : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary-400'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced effects */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-purple-600 to-primary-700 dark:from-primary-700 dark:via-purple-800 dark:to-primary-900 text-white overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-white/20 backdrop-blur-md p-4 rounded-full">
                  <Truck className="h-16 w-16" />
                </div>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Ship with <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">CargoNova</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Join thousands of satisfied customers who trust us with their logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg inline-flex items-center gap-2 overflow-hidden shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/tracking"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-semibold text-lg inline-flex items-center gap-2 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <Package className="h-5 w-5" />
                  Track Shipment
                </Link>
              </motion.div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                <span className="text-sm">500K+ Deliveries</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-300" />
                <span className="text-sm">200+ Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
