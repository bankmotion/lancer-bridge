import { SocialIcons } from "@/config/footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import CopyToClipboard from '@/components/CopyToClipboard';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
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

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
          <CopyToClipboard text="hello@lancerbridge.com">
            <a 
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium block mb-6"
            >
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
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <img src={icon.Icon} alt={icon.Name} className="w-6 h-6" />
                </a>
              ))}
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
