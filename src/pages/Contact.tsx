import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import useSEO from '../hooks/useSEO';
import NavigationArrows from '../components/NavigationArrows';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const Contact = () => {
  useSEO({
    title: 'Contact Us - Get Logistics Support & Quotes | CargoNova',
    description: 'Contact CargoNova for logistics inquiries, shipping quotes, and customer support. Available 24/7 via email, phone, or visit our office. Get personalized logistics solutions for your business.',
    keywords: 'contact logistics company, shipping quote, customer support, logistics inquiry, freight quote request',
    ogImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop&q=80',
    canonicalPath: '/contact'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Formspree endpoint - replace with your actual Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/your_form_id';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@cargonova.com',
      link: 'mailto:info@cargonova.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1(681) 5286780',
      link: 'tel:+16815286780',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Logistics Ave, New York, NY 10001',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavigationArrows />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop&q=80" 
            alt="Customer service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const contactImages = [
              'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&q=80', // Email
              'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop&q=80', // Phone/Call center
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80'  // Office building
            ];
            return (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img
                    src={contactImages[index]}
                    alt={info.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {info.content}
                </p>
              </motion.a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className="input-field"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  id="subject"
                  type="text"
                  className="input-field"
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-0 overflow-hidden h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cargonova Office Location"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
