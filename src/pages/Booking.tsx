import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Package, MapPin, Weight, Ruler, DollarSign, Calendar, 
  Truck, Ship, Plane, CheckCircle, ArrowRight, ArrowLeft,
  User, Phone, Mail, Home, AlertCircle, FileText
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    weightUnit: 'kg',
    dimensionUnit: 'cm',
    requiresInsurance: false,
    serviceType: '',
    shipmentType: '',
    originCountry: '',
    originCity: '',
    originZip: '',
    destCountry: '',
    destCity: '',
    destZip: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    packageDescription: '',
    packageValue: '',
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    senderAddress: '',
    receiverName: '',
    receiverEmail: '',
    receiverPhone: '',
    receiverAddress: '',
    pickupDate: '',
    specialInstructions: ''
  });
  const [quote, setQuote] = useState<number | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');

  useSEO({
    title: 'Book a Shipment - Easy Online Booking | CargoNova',
    description: 'Book your shipment online in minutes. Get instant quotes, choose service level, and schedule pickup. Fast, secure, and reliable shipping with CargoNova.',
    keywords: 'book shipment, online booking, shipping quote, freight booking, schedule pickup',
    ogImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/booking'
  });

  const serviceTypes = [
    { id: 'express', name: 'Express', icon: Plane, time: '1-2 days', multiplier: 2.5 },
    { id: 'standard', name: 'Standard', icon: Truck, time: '3-5 days', multiplier: 1.5 },
    { id: 'economy', name: 'Economy', icon: Ship, time: '7-14 days', multiplier: 1.0 },
  ];

  const shipmentTypes = [
    { id: 'document', name: 'Document', icon: FileText },
    { id: 'package', name: 'Package', icon: Package },
    { id: 'pallet', name: 'Pallet', icon: Package },
  ];

  const calculateQuote = (data: any) => {
    const baseRate = 50;
    const weight = parseFloat(data.weight) || 0;
    const weightMultiplier = data.weightUnit === 'kg' ? 1 : 0.453592;
    const actualWeight = weight * weightMultiplier;
    
    const serviceMultiplier = serviceTypes.find(s => s.id === data.serviceType)?.multiplier || 1.5;
    const insuranceRate = data.requiresInsurance ? (parseFloat(data.packageValue) || 0) * 0.02 : 0;
    
    const total = (baseRate + (actualWeight * 2.5)) * serviceMultiplier + insuranceRate;
    return Math.round(total * 100) / 100;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const onStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 3) {
      const calculatedQuote = calculateQuote(formData);
      setQuote(calculatedQuote);
    }
    
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      confirmBooking();
    }
  };

  const confirmBooking = () => {
    const bookingNum = 'BK' + Date.now().toString(36).toUpperCase();
    setBookingNumber(bookingNum);
    
    // Save to localStorage
    const booking = {
      bookingNumber: bookingNum,
      ...formData,
      quote,
      bookingDate: new Date().toISOString(),
      status: 'Pending Pickup'
    };
    localStorage.setItem(`booking_${bookingNum}`, JSON.stringify(booking));
    
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = [
    { number: 1, title: 'Service Type', icon: Truck },
    { number: 2, title: 'Route', icon: MapPin },
    { number: 3, title: 'Package Details', icon: Package },
    { number: 4, title: 'Contact Info', icon: User },
    { number: 5, title: 'Review & Book', icon: CheckCircle },
  ];

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <NavigationArrows />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Booking Confirmed!
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Your shipment has been successfully booked. We'll send you a confirmation email shortly.
              </p>
              
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-8">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Booking Number
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                  {bookingNumber}
                </div>
              </div>
              
              <div className="space-y-3 text-left mb-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Service</span>
                  <span className="font-semibold text-gray-900 dark:text-white capitalize">
                    {formData.serviceType}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Route</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {formData.originCity} → {formData.destCity}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Total Cost</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ${quote?.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/tracking" className="btn-primary flex-1">
                  Track Shipment
                </a>
                <a href="/booking" className="btn-secondary flex-1" onClick={() => window.location.reload()}>
                  New Booking
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <NavigationArrows />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50 scale-110' 
                        : isCompleted 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 hidden sm:block text-center">
                      {step.title}
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 rounded transition-all duration-300 ${
                      currentStep > step.number ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onStepSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Service Type */}
                {currentStep === 1 && (
                  <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Choose Your Service
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Service Level
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {serviceTypes.map((service) => {
                            const Icon = service.icon;
                            const isSelected = formData.serviceType === service.id;
                            
                            return (
                              <label key={service.id} className="cursor-pointer">
                                <input
                                  type="radio"
                                  name="serviceType"
                                  value={service.id}
                                  checked={isSelected}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                                  isSelected
                                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-lg'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-400'
                                }`}>
                                  <Icon className={`h-10 w-10 mx-auto mb-3 ${
                                    isSelected ? 'text-primary-600' : 'text-gray-400'
                                  }`} />
                                  <div className="font-bold text-gray-900 dark:text-white mb-1">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {service.time}
                                  </div>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Shipment Type
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {shipmentTypes.map((type) => {
                            const Icon = type.icon;
                            const isSelected = formData.shipmentType === type.id;
                            
                            return (
                              <label key={type.id} className="cursor-pointer">
                                <input
                                  type="radio"
                                  name="shipmentType"
                                  value={type.id}
                                  checked={isSelected}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className={`p-6 rounded-xl border-2 transition-all duration-300 text-center ${
                                  isSelected
                                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-lg'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-400'
                                }`}>
                                  <Icon className={`h-10 w-10 mx-auto mb-3 ${
                                    isSelected ? 'text-primary-600' : 'text-gray-400'
                                  }`} />
                                  <div className="font-bold text-gray-900 dark:text-white">
                                    {type.name}
                                  </div>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Route */}
                {currentStep === 2 && (
                  <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Shipping Route
                    </h2>
                    
                    <div className="space-y-8">
                      {/* Origin */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary-600" />
                          Origin
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Country
                            </label>
                            <input
                              name="originCountry"
                              value={formData.originCountry}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., United States"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              City
                            </label>
                            <input
                              name="originCity"
                              value={formData.originCity}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., New York"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              ZIP Code
                            </label>
                            <input
                              name="originZip"
                              value={formData.originZip}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., 10001"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Destination */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-green-600" />
                          Destination
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Country
                            </label>
                            <input
                              name="destCountry"
                              value={formData.destCountry}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., United Kingdom"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              City
                            </label>
                            <input
                              name="destCity"
                              value={formData.destCity}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., London"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              ZIP Code
                            </label>
                            <input
                              name="destZip"
                              value={formData.destZip}
                              onChange={handleInputChange}
                              className="input-field"
                              placeholder="e.g., SW1A 1AA"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Package Details */}
                {currentStep === 3 && (
                  <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Package Details
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Weight */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Weight
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="number"
                            step="0.1"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Enter weight"
                          />
                          <select 
                            name="weightUnit" 
                            value={formData.weightUnit}
                            onChange={handleInputChange}
                            className="input-field"
                          >
                            <option value="kg">Kilograms (kg)</option>
                            <option value="lbs">Pounds (lbs)</option>
                          </select>
                        </div>
                      </div>

                      {/* Dimensions */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Dimensions
                        </label>
                        <div className="grid grid-cols-4 gap-4">
                          <input
                            type="number"
                            step="0.1"
                            name="length"
                            value={formData.length}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Length"
                          />
                          <input
                            type="number"
                            step="0.1"
                            name="width"
                            value={formData.width}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Width"
                          />
                          <input
                            type="number"
                            step="0.1"
                            name="height"
                            value={formData.height}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Height"
                          />
                          <select 
                            name="dimensionUnit" 
                            value={formData.dimensionUnit}
                            onChange={handleInputChange}
                            className="input-field"
                          >
                            <option value="cm">cm</option>
                            <option value="in">inches</option>
                          </select>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Package Description
                        </label>
                        <textarea
                          name="packageDescription"
                          value={formData.packageDescription}
                          onChange={handleInputChange}
                          rows={3}
                          className="input-field"
                          placeholder="Describe the contents of your package"
                        />
                      </div>

                      {/* Value */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Declared Value (USD)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          name="packageValue"
                          value={formData.packageValue}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="Enter package value"
                        />
                      </div>

                      {/* Insurance */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="insurance"
                          name="requiresInsurance"
                          checked={formData.requiresInsurance}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="insurance" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Add insurance (2% of declared value)
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-8">
                      {/* Sender */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <User className="h-5 w-5 text-primary-600" />
                          Sender Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Full Name
                            </label>
                            <input 
                              name="senderName" 
                              value={formData.senderName}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="John Doe" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Email
                            </label>
                            <input 
                              name="senderEmail" 
                              type="email" 
                              value={formData.senderEmail}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="john@example.com" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Phone
                            </label>
                            <input 
                              name="senderPhone" 
                              type="tel" 
                              value={formData.senderPhone}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="+1 234 567 890" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Address
                            </label>
                            <input 
                              name="senderAddress" 
                              value={formData.senderAddress}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="123 Main St" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Receiver */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <User className="h-5 w-5 text-green-600" />
                          Receiver Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Full Name
                            </label>
                            <input 
                              name="receiverName" 
                              value={formData.receiverName}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="Jane Smith" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Email
                            </label>
                            <input 
                              name="receiverEmail" 
                              type="email" 
                              value={formData.receiverEmail}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="jane@example.com" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Phone
                            </label>
                            <input 
                              name="receiverPhone" 
                              type="tel" 
                              value={formData.receiverPhone}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="+1 234 567 890" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Address
                            </label>
                            <input 
                              name="receiverAddress" 
                              value={formData.receiverAddress}
                              onChange={handleInputChange}
                              className="input-field" 
                              placeholder="456 Park Ave" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Book */}
                {currentStep === 5 && (
                  <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Review Your Booking
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Booking Summary */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Booking Summary
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Service Type</span>
                            <span className="font-medium text-gray-900 dark:text-white capitalize">
                              {formData.serviceType}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Shipment Type</span>
                            <span className="font-medium text-gray-900 dark:text-white capitalize">
                              {formData.shipmentType}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Route</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {formData.originCity} → {formData.destCity}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Weight</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {formData.weight} {formData.weightUnit}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Dimensions</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {formData.length} × {formData.width} × {formData.height} {formData.dimensionUnit}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Package Value</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              ${formData.packageValue}
                            </span>
                          </div>
                          
                          {formData.requiresInsurance && (
                            <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                              <span className="text-gray-600 dark:text-gray-400">Insurance</span>
                              <span className="font-medium text-gray-900 dark:text-white">
                                ${(parseFloat(formData.packageValue) || 0) * 0.02}
                              </span>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center pt-4">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">Total Cost</span>
                            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                              ${quote?.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pickup Date */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Preferred Pickup Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="input-field pl-10"
                          />
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      
                      {/* Special Instructions */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Special Instructions (Optional)
                        </label>
                        <textarea
                          name="specialInstructions"
                          value={formData.specialInstructions}
                          onChange={handleInputChange}
                          rows={3}
                          className="input-field"
                          placeholder="Any special handling requirements or delivery instructions"
                        />
                      </div>
                      
                      {/* Terms */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="mt-1 w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and acknowledge that I have read the <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                Previous
              </button>
              
              {currentStep < 5 ? (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Next
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Confirm Booking
                  <CheckCircle className="h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
