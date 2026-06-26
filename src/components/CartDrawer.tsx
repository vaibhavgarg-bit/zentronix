import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, CreditCard, ShieldCheck, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  
  // Local checkout fields
  const [shippingForm, setShippingForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    state: 'Uttar Pradesh'
  });
  
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const gstAmount = Math.round(subtotal * 0.18); // 18% GST
  const shippingCharge = subtotal > 10000 ? 0 : 150; // Free above ₹10k
  const grandTotal = subtotal + gstAmount + shippingCharge;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.name || !shippingForm.address || !shippingForm.pincode || !shippingForm.phone) {
      alert('Please fill out all required shipping details.');
      return;
    }
    
    // Simulate order placement
    const randomId = 'ZT-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedOrderId(randomId);
    setCheckoutStep('success');
  };

  const resetCheckoutFlow = () => {
    onClearCart();
    setCheckoutStep('cart');
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={checkoutStep === 'success' ? resetCheckoutFlow : onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Container */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h2 id="cart-drawer-title" className="text-lg font-extrabold text-gray-900 uppercase tracking-wide">
                  {checkoutStep === 'cart' && `Your Shopping Cart (${cart.length})`}
                  {checkoutStep === 'shipping' && 'Shipping Details'}
                  {checkoutStep === 'success' && 'Order Placed!'}
                </h2>
              </div>
              <button
                id="cart-drawer-close"
                onClick={checkoutStep === 'success' ? resetCheckoutFlow : onClose}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close panel"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div id="empty-cart-view" className="h-full flex flex-col items-center justify-center text-center px-4 py-12">
                      <div className="h-20 w-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 animate-bounce">
                        <ShoppingBag className="h-9 w-9" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                      <p className="text-gray-400 text-sm max-w-xs">
                        Browse our products catalog and select cutting-edge gadgets to add them here!
                      </p>
                      <button
                        onClick={onClose}
                        className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-blue-100 transition-colors"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          id={`cart-item-${item.product.id}`}
                          className="flex gap-4 p-3.5 bg-white border border-gray-100 rounded-xl shadow-xs hover:shadow-sm hover:border-gray-200 transition-all duration-200"
                        >
                          {/* Image */}
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-20 w-20 rounded-lg object-cover bg-gray-50 flex-shrink-0 border border-gray-100"
                            referrerPolicy="no-referrer"
                          />

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-1">
                                <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.product.name}</h4>
                                <button
                                  id={`remove-item-${item.product.id}`}
                                  onClick={() => onRemoveFromCart(item.product.id)}
                                  className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors shrink-0"
                                  title="Remove item"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                                {item.product.category}
                              </span>
                            </div>

                            <div className="flex justify-between items-center mt-1.5">
                              {/* Quantity Control */}
                              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50">
                                <button
                                  id={`qty-decrease-${item.product.id}`}
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                  className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="px-2.5 text-xs font-bold text-gray-800">{item.quantity}</span>
                                <button
                                  id={`qty-increase-${item.product.id}`}
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                  className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              {/* Price */}
                              <span className="text-sm font-extrabold text-gray-900">
                                ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'shipping' && (
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                      placeholder="e.g. Vaibhav Garg"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Pin Code *</label>
                      <input
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        value={shippingForm.pincode}
                        onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                        placeholder="6-digit PIN"
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      placeholder="e.g. mail@example.com"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Shipping Address *</label>
                    <textarea
                      required
                      rows={3}
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      placeholder="House/Flat No., Building Name, Street Address, Area"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">City *</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        placeholder="e.g. Noida"
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">State *</label>
                      <select
                        value={shippingForm.state}
                        onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                        className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                      >
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Gujarat">Gujarat</option>
                      </select>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl flex items-center gap-3 mt-4 text-xs text-blue-700">
                    <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Zentronix Secure Guarantee. Your order will ship from Noida head office within 24 hours.</span>
                  </div>
                </form>
              )}

              {checkoutStep === 'success' && (
                <div id="checkout-success" className="h-full flex flex-col items-center justify-center text-center px-4 py-8">
                  <div className="h-20 w-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-100">
                    <ShieldCheck className="h-10 w-10 animate-scale" />
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    Payment Verified
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">Thank you, {shippingForm.name}!</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Your digital lifestyle upgrade is on its way. An email confirmation has been dispatched.
                  </p>

                  {/* Receipt Box */}
                  <div className="w-full bg-gray-50 border border-gray-150 rounded-2xl p-5 text-left text-sm space-y-3 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600" />
                    <div className="flex justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-wider">
                      <span>Receipt Details</span>
                      <span>{new Date().toLocaleDateString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Order ID:</span>
                      <span className="font-mono font-bold text-gray-900">{generatedOrderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimated Delivery:</span>
                      <span className="font-bold text-gray-900">Within 2 to 4 Days</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 font-black text-base text-gray-900">
                      <span>Total Charged:</span>
                      <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button
                    id="checkout-success-continue"
                    onClick={resetCheckoutFlow}
                    className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-sm shadow-lg transition-colors focus:outline-none"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer calculations & Action */}
            {cart.length > 0 && checkoutStep !== 'success' && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="space-y-2.5 text-sm mb-6">
                  <div className="flex justify-between text-gray-500">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-gray-800">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>GST (18%)</span>
                    <span className="font-bold text-gray-800">₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Standard Fast Delivery</span>
                    {shippingCharge === 0 ? (
                      <span className="font-bold text-emerald-600 uppercase">Free Delivery</span>
                    ) : (
                      <span className="font-bold text-gray-800">₹{shippingCharge}</span>
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-black text-gray-900">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {checkoutStep === 'cart' && (
                  <button
                    id="checkout-go-shipping"
                    onClick={() => setCheckoutStep('shipping')}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <CreditCard className="h-4.5 w-4.5" />
                    Proceed to Shipping
                  </button>
                )}

                {checkoutStep === 'shipping' && (
                  <div className="flex gap-3">
                    <button
                      id="checkout-back-cart"
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="flex-1 py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl text-sm transition-colors"
                    >
                      Back to Cart
                    </button>
                    <button
                      id="checkout-place-order"
                      onClick={handleCheckoutSubmit}
                      className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-100 transition-colors"
                    >
                      Place Order (₹{grandTotal.toLocaleString('en-IN')})
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
