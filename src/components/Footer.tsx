import React from 'react';
import { Cpu, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div id="footer-logo" className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-900/30">
                <Cpu className="h-5.5 w-5.5" />
              </div>
              <span id="footer-brand-name" className="text-xl font-bold tracking-tight text-white">
                Zentronix
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              At Zentronix, we bring you the latest and most reliable electronic gadgets at competitive prices. Powering your digital lifestyle with exceptional technology since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/zentronixofficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-pink-600 hover:text-white rounded-lg transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/Zentronix" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ZentronixTech" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-sky-500 hover:text-white rounded-lg transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('products')} className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  Featured Products Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('blog')} className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  Latest Technology Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-blue-400 transition-colors duration-150 font-medium">
                  Contact Support Team
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  Zentronix Electronics Pvt. Ltd.<br />
                  3rd Floor, Tech Plaza, Sector 62<br />
                  Noida, Uttar Pradesh – 201301, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <a href="mailto:support@zentronix.com" className="text-gray-400 hover:text-white transition-colors">
                  support@zentronix.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase">Business Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday – Saturday</p>
                  <p className="text-gray-400 text-xs">9:00 AM – 8:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p className="text-gray-400 text-xs">10:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Zentronix Electronics Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 text-xs">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-300 cursor-pointer">Warranty Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
