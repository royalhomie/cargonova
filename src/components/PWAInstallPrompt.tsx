import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(standalone);

    // Detect iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    // Listen for the beforeinstallprompt event (Chrome/Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 3 seconds if user hasn't dismissed it before
      const hasSeenPrompt = localStorage.getItem('pwa-prompt-dismissed');
      if (!hasSeenPrompt) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // For iOS, show custom prompt if not in standalone mode
    if (ios && !standalone) {
      const hasSeenPrompt = localStorage.getItem('pwa-prompt-dismissed');
      if (!hasSeenPrompt) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 3000);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt && !isIOS) return;

    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
    // Remove the flag after 7 days
    setTimeout(() => {
      localStorage.removeItem('pwa-prompt-dismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  // Don't show if already installed or dismissed
  if (isStandalone || !showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 opacity-50"></div>
            
            {/* Content */}
            <div className="relative">
              <button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Install CargoNova App
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {isIOS 
                      ? 'Install this app on your iPhone: tap Share then "Add to Home Screen"'
                      : 'Install our app for a better experience and offline access to tracking.'
                    }
                  </p>
                  
                  {!isIOS && deferredPrompt && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleInstallClick}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-all duration-200"
                    >
                      Install Now
                    </motion.button>
                  )}
                  
                  {isIOS && (
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>Tap</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                      <span>then "Add to Home Screen"</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
