import React from 'react';
import { Target, Eye, Sparkles, Trophy, Heart, Users, ChevronRight } from 'lucide-react';
import { coreValues } from '../data';
import { ActiveTab } from '../types';

interface AboutTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function AboutTab({ setActiveTab }: AboutTabProps) {
  // Let's create helper to map Core Values to gorgeous icons
  const getValueIcon = (title: string) => {
    switch (title) {
      case 'Customer Satisfaction':
        return <Heart className="h-6 w-6 text-pink-500" />;
      case 'Innovation':
        return <Sparkles className="h-6 w-6 text-blue-500" />;
      case 'Quality Assurance':
        return <Trophy className="h-6 w-6 text-amber-500" />;
      case 'Transparency':
        return <Users className="h-6 w-6 text-teal-500" />;
      case 'Reliability':
        return <Target className="h-6 w-6 text-indigo-500" />;
      default:
        return <Sparkles className="h-6 w-6 text-blue-500" />;
    }
  };

  return (
    <div id="about-tab" className="space-y-20 pb-16 animate-fade-in">
      {/* Header Banner */}
      <section id="about-hero" className="relative py-16 bg-gray-900 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80')]" />
        
        <div className="relative max-w-4xl mx-auto text-center px-4 space-y-6">
          <span className="text-xs font-extrabold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Journey
          </span>
          <h1 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About Zentronix
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Founded in 2025, Zentronix is dedicated to making modern technology accessible to everyone. We specialize in delivering high-quality electronic products that combine innovation, performance, and affordability.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section id="mission-vision-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-blue-600" />
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h2 id="about-mission-title" className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Our Mission
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                To provide cutting-edge electronics and exceptional customer service while building long-term trust with our customers across India. We believe premium gadgets shouldn't carry restrictive price barriers.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-indigo-600" />
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Eye className="h-6 w-6" />
              </div>
              <h2 id="about-vision-title" className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Our Vision
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                To become one of India's most trusted, innovative, and customer-centric electronics retailers. We aim to streamline online shopping through secure payments, transparent parameters, and superfast local delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values-section" className="bg-gray-50 border-y border-gray-150 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-100/50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              How We Operate
            </span>
            <h2 id="core-values-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              These defining operational guidelines govern every dispatch, response, and quality control test we execute daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.id}
                id={`core-value-${value.id}`}
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center space-y-4 hover:-translate-y-1 duration-250"
              >
                <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner">
                  {getValueIcon(value.title)}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{value.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive History Timeline / Milestone */}
      <section id="milestones-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Milestones of Growth</h2>
          <p className="text-gray-500 text-xs mt-2">How we evolved from a passionate Noida setup into a trusted digital brand.</p>
        </div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-32 space-y-8">
          {/* Milestone 1 */}
          <div className="relative pl-8">
            <div className="absolute -left-3.5 top-1 h-7 w-7 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center text-blue-600">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
            </div>
            <div className="bg-white border border-gray-150 p-5 rounded-2xl max-w-xl shadow-xs">
              <span className="text-xs font-bold text-blue-600">May 2025</span>
              <h4 className="font-bold text-gray-900 text-sm mt-1">Zentronix Foundation</h4>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                Launched our initial corporate storefront in Noida, starting with flagship smart accessory partnerships.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-8">
            <div className="absolute -left-3.5 top-1 h-7 w-7 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center text-indigo-600">
              <div className="h-2 w-2 rounded-full bg-indigo-600" />
            </div>
            <div className="bg-white border border-gray-150 p-5 rounded-2xl max-w-xl shadow-xs">
              <span className="text-xs font-bold text-indigo-600">January 2026</span>
              <h4 className="font-bold text-gray-900 text-sm mt-1">Expanded Catalog Integration</h4>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                Introduced high-end laptops, flagship smartphones, and infrared security accessories to the store database.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-8">
            <div className="absolute -left-3.5 top-1 h-7 w-7 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center text-emerald-600">
              <div className="h-2 w-2 rounded-full bg-emerald-600" />
            </div>
            <div className="bg-white border border-gray-150 p-5 rounded-2xl max-w-xl shadow-xs">
              <span className="text-xs font-bold text-emerald-600">June 2026</span>
              <h4 className="font-bold text-gray-900 text-sm mt-1">Seamless Logistics Upgrades</h4>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                Partnered with premium freight systems across India to unlock 2 to 4-day express dispatch options.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div className="text-center pt-8">
          <button
            onClick={() => setActiveTab('products')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-sm transition-colors shadow-lg"
          >
            Browse Our Verified Catalog
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
