import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Truck } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Booking', path: '/booking' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md'
      }`}
    >
      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with enhanced effects */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 rounded-xl blur-lg opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-700 p-2.5 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-primary-600/50">
                <Truck className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 dark:from-primary-400 dark:via-purple-400 dark:to-primary-600 bg-clip-text text-transparent">
                CargoNova
              </span>
              <p className="text-xs bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent -mt-1 hidden md:block font-medium">Global Freight Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group overflow-hidden ${
                  isActive(link.path)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-purple-50 to-primary-50 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-50 via-purple-50 to-primary-50 dark:from-primary-900/30 dark:via-purple-900/30 dark:to-primary-900/30 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Animated underline */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button with enhanced effects */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-purple-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 relative z-10 group-hover:rotate-12 transition-transform" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500 relative z-10 group-hover:rotate-45 transition-transform" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 group shadow-lg hover:shadow-xl"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-purple-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300 relative z-10" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300 relative z-10" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/50 dark:to-primary-800/50 text-primary-600 dark:text-primary-400 font-semibold shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
