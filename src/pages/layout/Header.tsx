import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { navigationItems } from "@/types/navigation";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    if (sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/75 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-start h-20 gap-10">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2"
          >
            <img
              src="/assets/imgs/logo.png"
              alt="LancerBridge"
              className="h-12"
            />
            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              LancerBridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-start space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.sectionId)}
                className="text-gray-700 dark:text-gray-300 text-xl hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4"></div>
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
