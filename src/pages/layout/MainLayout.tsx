import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TawkToChat from "../../components/TawkToChat";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />

      {/* Add padding-top to account for fixed header */}
      {children || <Outlet />}

      <Footer />
      <TawkToChat />
    </div>
  );
};

export default MainLayout;
