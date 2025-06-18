import { SocialIcons } from "@/config/footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import CopyToClipboard from "@/components/CopyToClipboard";
import { navigationItems } from "@/types/navigation";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (
    e: React.MouseEvent<HTMLLIElement>,
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
    <footer id="contact" className="bg-black text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Menu */}
        <div>
          <div className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <img
              src="/assets/imgs/logo.png"
              alt="LancerBridge"
              className="w-10 h-10"
            />
            <span className="text-gray-200">LancerBridge</span>
          </div>
          <ul className="space-y-3 text-sm">
            {navigationItems.map((item) => (
              <li
                key={item.path}
                className="hover:text-gray-200 transition-colors cursor-pointer text-gray-400"
                onClick={(e) =>
                  handleNavigation(
                    e as React.MouseEvent<HTMLLIElement>,
                    item.sectionId
                  )
                }
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Digital Transformation Engineering
          </h4>
          <ul className="text-sm space-y-2">
            {[
              "Custom Software Development",
              "Business Process Automation",
              "CRM Services",
              "ERP Services",
              "Digital Commerce",
              "System Integration",
            ].map((service) => (
              <li
                key={service}
                className="transition-colors cursor-pointer text-gray-400"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering + Mobile */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Software Engineering
          </h4>
          <ul className="text-sm mb-6 space-y-2">
            {["Java", "MERN", "LAMP (+ React JS)"].map((tech) => (
              <li
                key={tech}
                className="transition-colors cursor-pointer text-gray-400"
              >
                {tech}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mb-4 text-white">
            Mobile App Development
          </h4>
          <ul className="text-sm space-y-2">
            {[
              "Native App Development",
              "Cross-Platform App Development",
              "Legacy App Modernization",
              "Progressive Web App Development",
              "Bluetooth-enabled Apps",
              "Smart TV Apps",
            ].map((service) => (
              <li
                key={service}
                className="transition-colors cursor-pointer text-gray-400"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
          <CopyToClipboard text="hello@lancerbridge.com">
            <a className="text-blue-500 hover:text-blue-400 transition-colors text-lg font-medium block mb-6">
              hello@lancerbridge.com
            </a>
          </CopyToClipboard>
          <div className="mt-6">
            <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              {SocialIcons.map((icon) => (
                <a
                  key={icon.Name}
                  href={icon.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 p-0 border-white border-2 hover:text-gray-200 transition-colors w-8 h-8 bg-white rounded-full flex items-center justify-center"
                >
                  <img
                    src={icon.Icon}
                    alt={icon.Name}
                    className="w-full h-full"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-gray-500 flex items-center gap-2 mt-8">
            <span className="font-bold">Powered by</span>
            <img
              src="/assets/imgs/scalientlabs.png"
              alt="ScalientLabs"
              className="w-32"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400">
          © 2025 Lancerbridge Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
