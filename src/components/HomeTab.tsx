import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Truck, Headphones, RotateCcw, ArrowRight, Star, Cpu, Zap, Mail, ShoppingCart, Info } from 'lucide-react';
import { Product, ActiveTab } from '../types';
import { products, whyChooseUs, testmonials } from '../data';

interface HomeTabProps {
  onAddToCart: (product: Product) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeTab({ onAddToCart, setActiveTab }: HomeTabProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter 6 featured products matching the request
  const featuredProducts = products.filter(p => p.featured);

  // Dynamic Lucide icon mapper for Why Choose Us
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="h-7 w-7 text-blue-600" />;
      case 'CreditCard': return <CreditCard className="h-7 w-7 text-blue-600" />;
      case 'Truck': return <Truck className="h-7 w-7 text-blue-600" />;
      case 'Headphones': return <Headphones className="h-7 w-7 text-blue-600" />;
      case 'RotateCcw': return <RotateCcw className="h-7 w-7 text-blue-600" />;
      default: return <ShieldCheck className="h-7 w-7 text-blue-600" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div id="home-tab" className="space-y-24 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 lg:py-24">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-indigo-50/40 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-extrabold rounded-full uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5 fill-blue-100" />
              Latest Tech Release 2026
            </div>
            
            <div className="space-y-4">
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Welcome to <span className="text-blue-600">Zentronix</span>
              </h1>
              <p id="hero-subtitle" className="text-xl sm:text-2xl font-bold text-gray-700 font-sans">
                Powering Your Digital Lifestyle
              </p>
              <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Zentronix, we bring you the latest and most reliable electronic gadgets at competitive prices. From smartphones and laptops to smart home devices and accessories, we provide quality products that enhance your everyday life.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                id="hero-shop-now-btn"
                onClick={() => setActiveTab('products')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                Explore Products Catalog
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                id="hero-about-btn"
                onClick={() => setActiveTab('about')}
                className="px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-all duration-200 text-sm"
              >
                About Our Vision
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-extrabold text-blue-600">15k+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-blue-600">201301</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Noida HQ</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-blue-600">24/7</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Active Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl rotate-3 scale-102 opacity-10 blur-xl" />
              
              <div className="relative bg-white border border-gray-150 rounded-3xl p-4 shadow-xl">
                <img
                  src="https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/1f267907bc8026f3da9c19b31517367a/original.jpg"
                  alt="Zentronix flagship setup"
                  className="rounded-2xl object-cover h-80 w-full shadow-inner"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid quick specs box */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-lg flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-xl text-blue-600 flex items-center justify-center shrink-0">
                    <Star className="h-5.5 w-5.5 fill-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900">ZenBook Pro 14</h4>
                    <p className="text-xs text-blue-600 font-bold">Featured Laptop - ₹79,999</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('products')}
                    className="ml-auto p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    aria-label="View Product"
                  >
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Top Picks
          </span>
          <h2 id="featured-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Featured Products
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Explore our curated handpicked electronics chosen for high reliability, premium reviews, and great performance metrics.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            const hasDiscount = product.originalPrice && product.originalPrice > product.price;
            return (
              <div
                key={product.id}
                id={`featured-card-${product.id}`}
                className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-black text-blue-700 bg-white border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                  {hasDiscount && (
                    <span className="absolute top-4 right-4 text-[10px] font-black text-white bg-red-500 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Offer
                    </span>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-extrabold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md">
                        <Star className="h-3.5 w-3.5 fill-amber-500" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions & Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {hasDiscount && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{product.originalPrice?.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium tracking-wide">Incl. GST</span>
                    </div>

                    <button
                      id={`featured-add-to-cart-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-100 hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <ShoppingCart className="h-3.5 w-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Catalog Shortcut */}
        <div className="text-center mt-12">
          <button
            id="home-view-all-products"
            onClick={() => setActiveTab('products')}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-all"
          >
            Explore Complete Products Range
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Why Choose Zentronix */}
      <section id="why-choose-us-section" className="bg-gray-50 border-y border-gray-150 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-100/50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Our Core Strengths
            </span>
            <h2 id="why-choose-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Why Choose Zentronix?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We focus on building customer partnerships through premium hardware quality and flawless logistical trust. Here is why India trusts us for their technology upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div
                key={feature.id}
                id={`why-card-${feature.id}`}
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-shadow duration-300 flex items-start gap-5"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {renderIcon(feature.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-900 text-base">{feature.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Visual Callout Box for support coords */}
            <div className="bg-blue-600 text-white border border-blue-700 rounded-2xl p-6 shadow-lg flex flex-col justify-between lg:col-span-1 md:col-span-2">
              <div className="space-y-2">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Info className="h-5.5 w-5.5 text-white" />
                </div>
                <h3 className="font-black text-lg">Need Immediate Assistance?</h3>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Our professional support helpline is available 24/7. Connect with us via Live Chat or call us now!
                </p>
              </div>
              <button
                onClick={() => setActiveTab('contact')}
                className="mt-6 px-4 py-2.5 bg-white text-blue-600 hover:bg-blue-50 font-extrabold rounded-xl text-xs transition-colors text-center"
              >
                Contact Support Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Client Feedbacks
          </span>
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Real reviews and opinions from verified Zentronix gadget purchasers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testmonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(testimonial.rating) ? 'fill-amber-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 text-xs leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover bg-gray-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">{testimonial.name}</h4>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <section id="newsletter-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-gray-900 to-blue-950 border border-gray-800 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="max-w-xl mx-auto space-y-6">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
              <Mail className="h-6 w-6" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Stay Updated with Zentronix</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Subscribe to our technology newsletter to receive exclusive discount coupons, gadget reviews, and early access to sales events.
              </p>
            </div>

            {subscribed ? (
              <div id="newsletter-success" className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold text-sm animate-scale">
                ✓ Success! Check your inbox for your first 10% coupon code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-blue-900/20"
                >
                  Subscribe
                </button>
              </form>
            )}
            
            <p className="text-[10px] text-gray-500 font-medium">
              We respect your inbox privacy. Unsubscribe anytime with a single click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
