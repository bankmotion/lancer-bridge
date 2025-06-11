import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { navigationItems } from '@/types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  LancerBridge
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    <button
                      onClick={() => setExpandedMenu(expandedMenu === item.path ? null : item.path)}
                      className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <span>{item.title}</span>
                      <motion.span
                        animate={{ rotate: expandedMenu === item.path ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {expandedMenu === item.path && item.submenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                              onClick={onClose}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600"
                  onClick={onClose}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 