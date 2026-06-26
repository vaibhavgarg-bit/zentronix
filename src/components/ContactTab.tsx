import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle, ShieldAlert, Heart, HelpCircle } from 'lucide-react';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Order Query',
      message: ''
    });
    setSubmitted(false);
  };

  const faqs = [
    {
      q: 'Where does my order ship from?',
      a: 'All orders are quality-checked and dispatched directly from our state-of-the-art Head Office at Sector 62, Noida, Uttar Pradesh.'
    },
    {
      q: 'What is the estimated delivery timeline?',
      a: 'We offer express shipping across India. Metro cities usually receive dispatches within 2 business days, while other locations take between 3 and 4 days.'
    },
    {
      q: 'How do I claim a warranty repair?',
      a: 'Simply draft an email to support@zentronix.com containing your invoice and Order ID. Our claim specialists will schedule a free courier pickup within 24 hours.'
    }
  ];

  return (
    <div id="contact-tab" className="space-y-16 pb-16 animate-fade-in">
      {/* Intro Banner */}
      <section id="contact-header" className="space-y-4 max-w-3xl">
        <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Support Desk
        </span>
        <h1 id="contact-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Get In Touch
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Have a question about a gadget parameter, purchase delivery, or warranty claim? Connect with our technical support team in Noida.
        </p>
      </section>

      {/* Main Layout Grid */}
      <section id="contact-content" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-8">
          {/* Support Channels Card */}
          <div id="support-info-card" className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              Customer Support
            </h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:support@zentronix.com" className="flex items-center gap-4 p-3 border border-gray-50 hover:border-blue-100 hover:bg-blue-50/20 rounded-xl transition-all group">
                <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Write An Email</p>
                  <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">support@zentronix.com</p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-center gap-4 p-3 border border-gray-50 hover:border-blue-100 hover:bg-blue-50/20 rounded-xl transition-all group">
                <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Call Helpline</p>
                  <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">+91 98765 43210</p>
                </div>
              </a>
            </div>
          </div>

          {/* Head Office Coordinates Card */}
          <div id="office-info-card" className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              Head Office
            </h3>
            <div className="flex gap-4 items-start p-3 bg-gray-50/50 rounded-xl">
              <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <h4 className="font-bold text-gray-900">Zentronix Electronics Pvt. Ltd.</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  3rd Floor, Tech Plaza, Sector 62<br />
                  Noida, Uttar Pradesh – 201301<br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Operating hours list */}
          <div id="hours-info-card" className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs space-y-3">
            <h3 className="font-extrabold text-gray-900 text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Operational Workshifts
            </h3>
            <div className="text-xs space-y-2 text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-bold">Monday – Saturday:</span>
                <span className="text-gray-900">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Sunday:</span>
                <span className="text-gray-900">10:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Form or Success view */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div id="contact-success" className="bg-white border border-gray-150 rounded-3xl p-8 text-center space-y-6 shadow-md animate-scale">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="h-9 w-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-900">Message Transmitted!</h3>
                <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Greetings {formData.name}, your inquiry has been successfully registered on our Noida server. Our technician team will analyze and follow up with you at <strong className="text-gray-900">{formData.email}</strong> shortly.
                </p>
              </div>

              {/* Receipt / Details summary */}
              <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl text-left text-xs max-w-md mx-auto space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">Subject Category:</span>
                  <span className="font-bold text-gray-800">{formData.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">Average Reply Speed:</span>
                  <span className="font-bold text-blue-600 uppercase">Within 2 Hours</span>
                </div>
              </div>

              <button
                id="reset-contact-btn"
                onClick={handleResetForm}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-xs transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="space-y-1.5">
                <h3 className="font-extrabold text-gray-900 text-xl flex items-center gap-2">
                  <MessageSquare className="h-5.5 w-5.5 text-blue-600" />
                  Leave Us A Message
                </h3>
                <p className="text-gray-400 text-xs">
                  Fill out the quick template below and our Noida support staff will revert in no time.
                </p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vaibhav Garg"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/30"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase block">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vaibhav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/30"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase block">Inquiry Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                  >
                    <option value="Order Query">Order & Delivery Query</option>
                    <option value="Product Specification">Product Specifications</option>
                    <option value="Warranty Claim">Zentronix Shield Warranty Claim</option>
                    <option value="Bulk Business Deal">Bulk Business Deals</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase block">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your query here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/30"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-blue-100 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Your Ticket
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Embedded Location Map Graphic Illustration */}
      <section id="map-illustration-section" className="bg-gray-50 border border-gray-150 rounded-3xl p-6 space-y-6">
        <div className="space-y-1.5 text-center max-w-xl mx-auto">
          <h3 className="font-bold text-gray-900 text-base">Zentronix Noida Head Office Location</h3>
          <p className="text-gray-400 text-xs">Visually mapping out where our electronic gadgets undergo quality diagnostics.</p>
        </div>

        {/* CSS styled Map Illustration */}
        <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner flex items-center justify-center">
          {/* Abstract background roads pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-200/80 -translate-y-1/2 rotate-6" />
          <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-gray-200/80 -translate-x-1/2 -rotate-12" />
          <div className="absolute left-2/3 top-0 bottom-0 w-4 bg-gray-200/80 -translate-x-1/2 rotate-45" />

          {/* Landmarks */}
          <div className="absolute top-8 left-12 bg-white/90 border border-gray-200 px-3 py-1 rounded-lg text-[9px] text-gray-400 font-bold uppercase tracking-wider">Sector 62 Metro Station</div>
          <div className="absolute bottom-8 right-16 bg-white/90 border border-gray-200 px-3 py-1 rounded-lg text-[9px] text-gray-400 font-bold uppercase tracking-wider">Noida Electronic City</div>

          {/* Pin */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pulsing ring */}
            <div className="absolute h-14 w-14 rounded-full bg-blue-500/20 animate-ping -top-2" />
            <div className="h-10 w-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white shadow-xl relative">
              <MapPin className="h-5 w-5" />
            </div>
            
            {/* Label box */}
            <div className="mt-3 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-2xl border border-gray-800 text-center space-y-0.5">
              <p className="text-xs font-black">Zentronix Tech Plaza</p>
              <p className="text-[9px] text-blue-400 font-bold">Noida, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support FAQ */}
      <section id="faqs-section" className="max-w-3xl mx-auto space-y-6">
        <h3 className="font-extrabold text-gray-900 text-lg text-center flex items-center justify-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-500" />
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-150 rounded-2xl p-4 cursor-pointer hover:border-gray-300 transition-all"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                <span className="text-blue-600 font-black text-sm">{activeFaq === idx ? '−' : '+'}</span>
              </div>
              {activeFaq === idx && (
                <p className="text-gray-500 text-xs leading-relaxed mt-3 pt-3 border-t border-gray-50 animate-fade-in">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
