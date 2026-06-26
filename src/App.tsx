import React, { useState } from 'react';
import { ActiveTab, Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import ProductsTab from './components/ProductsTab';
import BlogTab from './components/BlogTab';
import ContactTab from './components/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    // Open cart drawer immediately to provide responsive feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Render current page tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onAddToCart={handleAddToCart} setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutTab setActiveTab={setActiveTab} />;
      case 'products':
        return <ProductsTab onAddToCart={handleAddToCart} />;
      case 'blog':
        return <BlogTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab onAddToCart={handleAddToCart} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Side Slide-Over Shopping Cart Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
