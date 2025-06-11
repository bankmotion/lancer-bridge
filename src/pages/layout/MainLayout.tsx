import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <main className="pt-20">
        {children || <Outlet />}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout; 