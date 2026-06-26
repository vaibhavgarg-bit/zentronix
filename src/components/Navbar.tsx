import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Cpu, Heart } from 'lucide-react';
import { ActiveTab, CartItem } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cart: CartItem[];
  onOpenCart: () => void;
}

export default function Navbar({ activeTab, setActiveTab, cart, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="main-navbar" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div id="brand-logo-container" className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200">
              <Cpu className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span id="brand-name" className="text-2xl font-extrabold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Zentronix
              </span>
              <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase -mt-1">Digital Lifestyle</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 uppercase ${
                  activeTab === link.id
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span id={`nav-active-bar-${link.id}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Placeholder */}
            <button
              id="wishlist-btn"
              className="hidden sm:flex p-2.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50/50 transition-all duration-200"
              title="Your Favorites"
            >
              <Heart className="h-5.5 w-5.5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 focus:outline-none"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5.5 w-5.5" />
              {cartItemsCount > 0 && (
                <span
                  id="cart-badge"
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white animate-scale"
                >
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white shadow-inner animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`flex w-full items-center px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wide transition-all ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
