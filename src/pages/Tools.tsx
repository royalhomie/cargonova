import { motion } from 'framer-motion';
import { Calculator, Weight, DollarSign, Package, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const Tools = () => {
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [currencyAmount, setCurrencyAmount] = useState('100');
  const [weightValue, setWeightValue] = useState('100');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs' | 'cbm'>('kg');

  useSEO({
    title: 'Shipping Tools & Calculators - CargoNova | Currency, Weight Converters',
    description: 'Use our free shipping tools: currency converter, weight converter (kg/lbs/CBM), and easy booking guide. Calculate shipping costs and conversions instantly.',
    keywords: 'shipping calculator, currency converter, weight converter, CBM calculator, kg to lbs, booking guide',
    ogImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/tools'
  });

  const exchangeRates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50,
    CNY: 7.24,
    AUD: 1.53
  };

  const convertCurrency = () => {
    const amount = parseFloat(currencyAmount) || 0;
    const fromRate = exchangeRates[currencyFrom];
    const toRate = exchangeRates[currencyTo];
    return ((amount / fromRate) * toRate).toFixed(2);
  };

  const convertWeight = () => {
    const value = parseFloat(weightValue) || 0;
    let result = '';
    
    switch (weightUnit) {
      case 'kg':
        result = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
        break;
      case 'lbs':
        result = `${value} lbs = ${(value / 2.20462).toFixed(2)} kg`;
        break;
      case 'cbm':
        result = `${value} m³ = ${(value * 35.3147).toFixed(2)} ft³ = ${(value * 1000).toFixed(2)} L`;
        break;
    }
    return result;
  };

  const bookingSteps = [
    {
      title: 'Get a Quote',
      description: 'Enter shipment details including origin, destination, weight, and dimensions',
      icon: Calculator
    },
    {
      title: 'Choose Service Level',
      description: 'Select from Express, Standard, or Economy based on your timeline and budget',
      icon: Package
    },
    {
      title: 'Provide Package Info',
      description: 'Describe contents, value, and any special handling requirements',
      icon: Weight
    },
    {
      title: 'Complete Payment',
      description: 'Secure checkout with multiple payment options available',
      icon: DollarSign
    },
    {
      title: 'Print Label',
      description: 'Download and print your shipping label with tracking number',
      icon: ArrowRight
    },
    {
      title: 'Schedule Pickup',
      description: 'Choose pickup or drop-off at our nearest location',
      icon: Check
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 dark:from-primary-800 dark:via-purple-900 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=600&fit=crop&q=80" 
            alt="Calculator and tools" 
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
            <Calculator className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shipping Tools & Calculators
            </h1>
            <p className="text-xl text-blue-100">
              Free tools to help you plan and manage your shipments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Currency Converter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Currency Converter
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    value={currencyAmount}
                    onChange={(e) => setCurrencyAmount(e.target.value)}
                    className="input-field"
                    placeholder="Enter amount"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      From
                    </label>
                    <select
                      value={currencyFrom}
                      onChange={(e) => setCurrencyFrom(e.target.value)}
                      className="input-field"
                    >
                      {Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      To
                    </label>
                    <select
                      value={currencyTo}
                      onChange={(e) => setCurrencyTo(e.target.value)}
                      className="input-field"
                    >
                      {Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Result
                    </div>
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {convertCurrency()} {currencyTo}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weight Converter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Weight className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Weight / Volume Converter
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Value
                  </label>
                  <input
                    type="number"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                    className="input-field"
                    placeholder="Enter value"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Unit Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setWeightUnit('kg')}
                      className={`py-2 px-4 rounded-lg font-medium transition-all ${
                        weightUnit === 'kg'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      kg
                    </button>
                    <button
                      onClick={() => setWeightUnit('lbs')}
                      className={`py-2 px-4 rounded-lg font-medium transition-all ${
                        weightUnit === 'lbs'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      lbs
                    </button>
                    <button
                      onClick={() => setWeightUnit('cbm')}
                      className={`py-2 px-4 rounded-lg font-medium transition-all ${
                        weightUnit === 'cbm'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      m³
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Conversion
                    </div>
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {convertWeight()}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> CBM (Cubic Meter) is used for volumetric weight calculations in shipping.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">How to Book a Shipment</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Follow these simple steps to book your shipment with CargoNova
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookingSteps.map((step, index) => {
                const Icon = step.icon;
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
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-primary-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-primary-600 shadow-lg">
                        <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Booking Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
