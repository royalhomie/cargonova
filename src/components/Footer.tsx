import { Link } from 'react-router-dom';
import { Truck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Track Package', path: '/tracking' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Shipping Tools', path: '/tools' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
      { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black text-gray-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section with enhanced styling */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-700 p-2.5 rounded-xl shadow-2xl">
                  <Truck className="h-7 w-7 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">CargoNova</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional logistics services delivering excellence worldwide. Fast, reliable, and secure shipping solutions.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@cargonova.com" className="flex items-center space-x-3 text-sm group hover:text-primary-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
                <span>info@cargonova.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-sm group hover:text-primary-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary-400" />
                </div>
                <span>+1 (681) 528-6780</span>
              </a>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <span>1927 21st Ave, Forest Grove, Oregon</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with modern design */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright with enhanced design */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-white font-semibold">CargoNova Logistics</span>. All rights reserved.
            </p>
            <div className="flex space-x-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.name}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-11 h-11 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-purple-600">
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
