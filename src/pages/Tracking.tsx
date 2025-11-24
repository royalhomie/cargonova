import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, MapPin, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <NavigationArrows />
      {/* Hero Image Section */}
      <div className="relative h-64 mb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=600&fit=crop&q=80"
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
                  <div className="flex items-start gap-4 mb-6">
                    {getStatusIcon(trackingData.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {trackingData.trackingNumber}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingData.status)}`}>
                          {trackingData.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{trackingData.currentLocation}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Estimated Delivery: {trackingData.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking History */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Tracking History
                  </h3>
                  <div className="space-y-6">
                    {trackingData.history.map((event, index) => (
                      <div key={index} className="relative pl-8 pb-6 last:pb-0">
                        {index !== trackingData.history.length - 1 && (
                          <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
                        )}
                        <div className="absolute left-0 top-1 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {event.status}
                            </h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {event.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                            <span>•</span>
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sample Tracking Numbers */}
          {!trackingData && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="card bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
            >
              {/* <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Try Sample Tracking Numbers:
              </h3> */}
              {/* <div className="flex flex-wrap gap-2">
                {['ABC123456789', 'XYZ987654321', 'DEF456789123'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setTrackingNumber(sample)}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    {sample}
                  </button>
                ))}
              </div> */}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Tracking;
