import { SocialIcons } from "@/config/footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Menu */}
        <div>
          <div className="text-2xl font-bold mb-6 text-white">
            lancer<span className="text-blue-400">bridge</span>
          </div>
          <ul className="space-y-3 text-sm">
            {["About", "Careers", "Blogs", "Portfolio"].map((item) => (
              <li key={item} className="hover:text-blue-400 transition-colors cursor-pointer">
                {item}
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
              "System Integration"
            ].map((service) => (
              <li key={service} className="hover:text-blue-400 transition-colors cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering + Mobile */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Software Engineering</h4>
          <ul className="text-sm mb-6 space-y-2">
            {["Java", "MERN", "LAMP (+ React JS)"].map((tech) => (
              <li key={tech} className="hover:text-blue-400 transition-colors cursor-pointer">
                {tech}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mb-4 text-white">Mobile App Development</h4>
          <ul className="text-sm space-y-2">
            {[
              "Native App Development",
              "Cross-Platform App Development",
              "Legacy App Modernization",
              "Progressive Web App Development",
              "Bluetooth-enabled Apps",
              "Smart TV Apps"
            ].map((service) => (
              <li key={service} className="hover:text-blue-400 transition-colors cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Subscribe to our Newsletter!</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-700 rounded-l-md text-sm bg-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-r-md transition-colors">
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex space-x-5 mt-8">
            {SocialIcons.map((icon) => (
              <a
                key={icon.Name}
                href={icon.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={icon.Icon} alt={icon.Name} className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div className="bg-gray-800 w-28 h-7 flex items-center justify-center rounded text-xs font-medium">
              DMCA PROTECTED
            </div>
            <div className="flex space-x-3">
              <div className="bg-gray-800 w-14 h-14 flex items-center justify-center rounded-full text-xs font-medium hover:bg-gray-700 transition-colors cursor-pointer">
                Clutch 1000
              </div>
              <div className="bg-gray-800 w-14 h-14 flex items-center justify-center rounded-full text-xs font-medium hover:bg-gray-700 transition-colors cursor-pointer">
                Inc. 5000
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <div>© 2025 Lancerbridge Technologies. All Rights Reserved.</div>
        <div className="mt-2 md:mt-0 hover:text-blue-400 transition-colors cursor-pointer">
          Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
