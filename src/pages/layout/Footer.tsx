import { SocialIcons } from "@/config/footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Menu */}
        <div>
          <div className="text-2xl font-bold mb-4 text-black">
            lancer<span className="text-blue-500">bridge</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Portfolio</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">
            Digital Transformation Engineering
          </h4>
          <ul className="text-sm space-y-1">
            <li>Custom Software Development</li>
            <li>Business Process Automation</li>
            <li>CRM Services</li>
            <li>ERP Services</li>
            <li>Digital Commerce</li>
            <li>System Integration</li>
          </ul>
        </div>

        {/* Engineering + Mobile */}
        <div>
          <h4 className="font-semibold mb-3">Software Engineering</h4>
          <ul className="text-sm mb-5 space-y-1">
            <li>Java</li>
            <li>MERN</li>
            <li>LAMP (+ React JS)</li>
          </ul>
          <h4 className="font-semibold mb-3">Mobile App Development</h4>
          <ul className="text-sm space-y-1">
            <li>Native App Development</li>
            <li>Cross-Platform App Development</li>
            <li>Legacy App Modernization</li>
            <li>Progressive Web App Development</li>
            <li>Bluetooth-enabled Apps</li>
            <li>Smart TV Apps</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="font-semibold mb-3">Subscribe to our Newsletter!</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-l-md text-sm"
            />
            <button className="bg-yellow-400 p-2 rounded-r-md">
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex space-x-4 mt-6 text-gray-600">
            {SocialIcons.map((icon) => (
              <a href={icon.Link} target="_blank" rel="noopener noreferrer">
                <img src={icon.Icon} alt={icon.Name} className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-xs text-gray-600">
            <div className="bg-gray-200 w-24 h-6 flex items-center justify-center rounded">
              DMCA PROTECTED
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full text-xs">
                Clutch 1000
              </div>
              <div className="bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full text-xs">
                Inc. 5000
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <div>© 2025 Lancerbridge Technologies. All Rights Reserved.</div>
        <div className="mt-2 md:mt-0">Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
