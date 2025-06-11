import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { navigationItems } from "@/types/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/common/ThemeToggle";

const Header: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 dark:bg-gray-900/95 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            LancerBridge
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.path)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.title}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {activeSubmenu === item.path && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 mt-2"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link
              to="/contact"
              className="hidden md:block px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
