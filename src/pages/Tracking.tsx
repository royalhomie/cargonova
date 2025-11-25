import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, MapPin, Clock, CheckCircle, AlertCircle, Loader, Truck, Plane, Anchor, Home, Globe } from 'lucide-react';
import { getTrackingData, validateTrackingNumber } from '../utils/helpers';
import { TrackingData } from '../types';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';
import { useLanguage } from '../contexts/LanguageContext';

const Tracking = () => {
  const { t } = useLanguage();
  
  useSEO({
    title: 'Track Your Package - Real-Time Shipment Tracking | CargoNova Logistics',
    description: 'Track your packages in real-time with CargoNova. Get instant updates on shipment status, current location, and estimated delivery time. Enter your tracking number for live tracking information.',
    keywords: 'package tracking, shipment tracking, real-time tracking, delivery status, track parcel, tracking number',
    ogImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/tracking'
  });
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTrackingData(null);

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    if (!validateTrackingNumber(trackingNumber)) {
      setError('Invalid tracking number format. Please enter 8-20 alphanumeric characters.');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const data = getTrackingData(trackingNumber.toUpperCase());
      if (data) {
        setTrackingData(data);
        // Clear the tracking number input after successful search
        setTrackingNumber('');
      } else {
        setError('Tracking number not found. Please check and try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusIcon = (status: TrackingData['status']) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'Exception':
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      case 'In Transit':
      case 'Out for Delivery':
        return <Package className="h-8 w-8 text-blue-500" />;
      default:
        return <Clock className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusColor = (status: TrackingData['status']) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900';
      case 'Exception':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900';
      case 'Out for Delivery':
        return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900';
      case 'In Transit':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900';
    }
  };

  const getEventIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'package received':
        return <Package className="h-4 w-4 text-primary-600" />;
      case 'in transit':
        return <Truck className="h-4 w-4 text-blue-600" />;
      case 'out for delivery':
        return <Truck className="h-4 w-4 text-orange-600" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <NavigationArrows />
      {/* Hero Image Section */}
      <div className="relative h-64 mb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop&q=80"
          alt="Package delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Package className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {t('tracking.title')}
            </h1>
            <p className="text-xl">{t('tracking.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Remove old header since we have hero image */}

          {/* Tracking Form */}
          <div className="card mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('tracking.title')}
                </label>
                <div className="flex gap-4">
                  <input
                    id="tracking-number"
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder={t('tracking.placeholder')}
                    className="input-field flex-1"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary px-8 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" />
                        {t('tracking.button')}...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5" />
                        {t('tracking.button')}
                      </>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Tracking Results */}
          <AnimatePresence mode="wait">
            {trackingData && (
              <motion.div
                key="tracking-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Status Card */}
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      {getStatusIcon(trackingData.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {trackingData.trackingNumber}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingData.status)}`}>
                          {trackingData.status}
                        </span>
                      </div>
                      
                      {/* Interactive Map Visualization */}
                      <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipment Route</h3>
                        <div className="relative h-32 flex items-center justify-between">
                          {/* Route Line */}
                          <div className="absolute left-8 right-8 top-1/2 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 -translate-y-1/2"></div>
                          
                          {/* Origin */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mb-2">
                              <Globe className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">Sanaa, YE</span>
                          </div>
                          
                          {/* Transit Points */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                              <Plane className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">Dubai, UAE</span>
                          </div>
                          
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                              <Anchor className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">Miami, FL</span>
                          </div>
                          
                          {/* Destination */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mb-2">
                              <Home className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">San Jose, CR</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Progress Indicator */}
                      <div className="mb-8">
                        <div className="flex justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Shipment Progress</span>
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {trackingData.status === 'Delivered' ? '100%' : trackingData.status === 'Out for Delivery' ? '85%' : trackingData.status === 'In Transit' ? '65%' : '25%'}
                          </span>
                        </div>
                        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" 
                            initial={{ width: '0%' }}
                            animate={{ 
                              width: trackingData.status === 'Delivered' ? '100%' : 
                                     trackingData.status === 'Out for Delivery' ? '85%' : 
                                     trackingData.status === 'In Transit' ? '65%' : '25%' 
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          >
                            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                          </motion.div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>Origin</span>
                          <span>Destination</span>
                        </div>
                      </div>
                      
                      {/* Package Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Truck className="h-4 w-4 text-primary-600" />
                            Sender Information
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">Garth Davis</p>
                          <p className="text-gray-600 dark:text-gray-300">Sanaa, Yemen</p>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Home className="h-4 w-4 text-primary-600" />
                            Receiver Information
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">Cecilia Leon Jimenez</p>
                          <p className="text-gray-600 dark:text-gray-300">Puntarenas, San Jose, Costa Rica</p>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Package className="h-4 w-4 text-primary-600" />
                            Package Details
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">Weight: 10kg</p>
                          <p className="text-gray-600 dark:text-gray-300">Contents: Clothing</p>
                          <p className="text-gray-600 dark:text-gray-300">Courier: X Logistics</p>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary-600" />
                            Shipment Timeline
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">Sent: November 25, 2025</p>
                          <p className="text-gray-600 dark:text-gray-300">Estimated Delivery: {trackingData.estimatedDelivery}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Current Location</p>
                            <p className="text-gray-600 dark:text-gray-300">{trackingData.currentLocation}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Clock className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Estimated Delivery</p>
                            <p className="text-gray-600 dark:text-gray-300">{trackingData.estimatedDelivery}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking History with Enhanced Visuals */}
                <div className="card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Tracking History
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <motion.span 
                        className="w-3 h-3 rounded-full bg-green-500"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span>Live Updates</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {trackingData.history.map((event, index) => (
                      <motion.div 
                        key={index} 
                        className="relative pl-8 pb-6 last:pb-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {index !== trackingData.history.length - 1 && (
                          <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-gray-300 dark:from-primary-600 dark:to-gray-600" />
                        )}
                        <div className="absolute left-0 top-1 w-6 h-6 bg-primary-100 dark:bg-primary-900 border-2 border-primary-600 dark:border-primary-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                            <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                              {getEventIcon(event.status)}
                              {event.status}
                            </h4>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded">
                                {event.time}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {event.date}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


        </motion.div>
      </div>
    </div>
  );
};

export default Tracking;
