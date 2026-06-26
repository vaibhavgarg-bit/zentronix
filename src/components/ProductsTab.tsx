import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingCart, Eye, X, Check, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data';

interface ProductsTabProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductsTab({ onAddToCart }: ProductsTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Smartphones', 'Laptops', 'Audio Devices', 'Smart Devices', 'Accessories'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); // Featured first
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCartWithFeedback = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <div id="products-tab" className="space-y-10 pb-16 animate-fade-in">
      {/* Catalog Intro Banner */}
      <section id="catalog-header" className="space-y-4 max-w-3xl">
        <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Hardware Store
        </span>
        <h1 id="catalog-title" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Explore Our Electronic Catalog
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Discover cutting-edge smartphones, premium lightweight laptops, crystal-clear audio equipment, smart home sensors, and fast-charging accessories.
        </p>
      </section>

      {/* Filter and Control Bar */}
      <section id="control-bar" className="bg-white border border-gray-150 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3.5 top-3 h-5 w-5 text-gray-400" />
            <input
              id="product-search-input"
              type="text"
              placeholder="Search products, brands, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full lg:w-auto shrink-0 justify-end">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden sm:inline">Sort By:</span>
            <div className="relative w-full sm:w-48">
              <select
                id="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-3.5 pr-10 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400">
                <ArrowUpDown className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-gray-50 pt-4 -mx-5 px-5">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap tracking-wide transition-all uppercase ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="products-catalog-section">
        {filteredProducts.length === 0 ? (
          <div id="no-results-box" className="text-center py-16 bg-white border border-gray-150 rounded-2xl">
            <p className="text-gray-400 font-bold mb-2">No products match your parameters.</p>
            <p className="text-gray-400 text-xs">Try adjusting your category selection or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const hasDiscount = product.originalPrice && product.originalPrice > product.price;
              const isAdded = justAddedId === product.id;
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-100 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Categories */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="text-[9px] font-black text-blue-700 bg-white/90 backdrop-blur-xs border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>

                    {/* Quick View Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        id={`quick-view-${product.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="px-4 py-2 bg-white text-gray-900 font-bold rounded-xl text-xs shadow-md hover:bg-gray-100 transition-all flex items-center gap-1.5"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-1">
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="font-bold text-sm text-gray-900 hover:text-blue-600 transition-colors cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-0.5 text-amber-500 font-bold text-[10px] shrink-0 mt-0.5">
                          <Star className="h-3 w-3 fill-amber-500" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Prices and Cart Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-50 shrink-0">
                      <div className="flex flex-col">
                        <span className="text-base font-black text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {hasDiscount && (
                          <span className="text-[10px] text-gray-400 line-through">
                            ₹{product.originalPrice?.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        id={`catalog-add-btn-${product.id}`}
                        onClick={() => handleAddToCartWithFeedback(product)}
                        className={`p-2.5 rounded-xl transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-100'
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-100'
                        }`}
                        title="Add to shopping cart"
                      >
                        {isAdded ? <Check className="h-4.5 w-4.5" /> : <ShoppingCart className="h-4.5 w-4.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Floating Detailed Product Modal Dialog */}
      {selectedProduct && (
        <div id="product-detail-modal" className="fixed inset-0 z-55 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative bg-white border border-gray-150 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] animate-scale">
            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5.5 w-5.5" />
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Image */}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full aspect-square rounded-2xl object-cover border border-gray-100 bg-gray-50"
                referrerPolicy="no-referrer"
              />

              {/* Right Specifications */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-3.5 w-3.5 ${
                            idx < Math.floor(selectedProduct.rating) ? 'fill-amber-500' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span>{selectedProduct.rating} ({selectedProduct.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Additional simulated specification sheet */}
                <div className="bg-gray-50 border border-gray-150 rounded-xl p-3.5 space-y-2 text-[11px] text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-1.5">
                    <span className="text-gray-400">Merchant Availability</span>
                    <span className="font-bold text-emerald-600 uppercase text-[10px]">In Stock (Noida HQ)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1.5">
                    <span className="text-gray-400">Warranty Support</span>
                    <span className="font-bold text-gray-800">1 Year Zentronix Shield</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Standard Delivery</span>
                    <span className="font-bold text-gray-800">2-4 Business Days</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-gray-900">
                      ₹{selectedProduct.price.toLocaleString('en-IN')}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    id={`modal-add-to-cart-${selectedProduct.id}`}
                    onClick={() => {
                      handleAddToCartWithFeedback(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-100 transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
