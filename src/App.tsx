import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, SHOWROOM_INFO } from './data/products';
import { Product } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { TelegramShowcase } from './components/TelegramShowcase';
import { CustomVanityOrderModal } from './components/CustomVanityOrderModal';
import { ShowroomConsultation } from './components/ShowroomConsultation';
import { Footer } from './components/Footer';
import {
  Layers,
  Sparkles,
  Search,
  X,
  Bookmark,
  Instagram,
  Phone,
  Send,
  Ruler,
  SlidersHorizontal,
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<'all' | 'small' | 'medium' | 'large' | 'master'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'code'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);

  // Local state for saved inquiry items (persisted to localStorage)
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cabinrooz_inquiry_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    try {
      const q = localStorage.getItem('cabinrooz_inquiry_quantities');
      return q ? JSON.parse(q) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cabinrooz_inquiry_items', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('cabinrooz_inquiry_quantities', JSON.stringify(quantities));
    } catch (e) {
      console.error(e);
    }
  }, [quantities]);

  const toggleSaveProduct = (product: Product) => {
    if (savedIds.includes(product.id)) {
      setSavedIds((prev) => prev.filter((id) => id !== product.id));
    } else {
      setSavedIds((prev) => [...prev, product.id]);
      if (!quantities[product.id]) {
        setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
      }
    }
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [productId]: updated };
    });
  };

  const removeItem = (productId: string) => {
    setSavedIds((prev) => prev.filter((id) => id !== productId));
  };

  const clearAllSaved = () => {
    setSavedIds([]);
    setQuantities({});
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }

      // Size Category filter
      if (selectedSizeFilter !== 'all') {
        if (product.sizeCategory && product.sizeCategory !== selectedSizeFilter) {
          return false;
        }
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCode = product.code.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesMaterial = product.specs.material.toLowerCase().includes(query);
        const matchesFinish = product.specs.finish.toLowerCase().includes(query);
        const matchesUnit = product.specs.unitSize?.toLowerCase().includes(query);
        const matchesDim = product.specs.dimensions?.toLowerCase().includes(query);
        const matchesFeatures = product.features.some((f) => f.toLowerCase().includes(query));

        if (
          !matchesName &&
          !matchesCode &&
          !matchesBrand &&
          !matchesDesc &&
          !matchesMaterial &&
          !matchesFinish &&
          !matchesUnit &&
          !matchesDim &&
          !matchesFeatures
        ) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
      if (sortBy === 'newest') {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      if (sortBy === 'code') {
        return a.code.localeCompare(b.code);
      }
      return 0;
    });
  }, [selectedCategory, selectedSizeFilter, searchQuery, sortBy]);

  const savedProductList = useMemo(() => {
    return PRODUCTS.filter((p) => savedIds.includes(p.id));
  }, [savedIds]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchTag = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory('all');
    setSelectedSizeFilter('all');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-amber-200 selection:text-amber-950 font-['Vazirmatn',sans-serif]">
      {/* Navigation Bar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedIds.length}
        onOpenSavedDrawer={() => setIsInquiryDrawerOpen(true)}
        onSelectCategory={handleSelectCategory}
        activeCategory={selectedCategory}
        products={PRODUCTS}
        onOpenProduct={(prod) => setSelectedProduct(prod)}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onSelectCategory={handleSelectCategory}
          onSearchTag={handleSearchTag}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* Visual Category Grid */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Catalog Main Showcase */}
        <section id="catalog-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/90">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-1">
                <Layers className="w-4 h-4" />
                <span>ویترین آلبوم محصولات تولیدی تاتار</span>
                <span className="bg-slate-200 text-slate-700 text-[11px] font-mono px-2 py-0.5 rounded-full">
                  {filteredProducts.length} مدل نمایش داده شده
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedCategory === 'all'
                  ? 'تمامی مدل‌های کابین روشویی و آینه'
                  : CATEGORIES.find((c) => c.id === selectedCategory)?.title || 'محصولات دسته‌بندی'}
              </h2>
            </div>

            {/* Filter & Sorting Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              {/* Size Filter */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-3 py-2">
                <Ruler className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">سایز عرض:</span>
                <select
                  value={selectedSizeFilter}
                  onChange={(e) => setSelectedSizeFilter(e.target.value as any)}
                  className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer text-xs"
                >
                  <option value="all">همه ابعاد</option>
                  <option value="small">کوچک و مینی (زیر ۶۰ سانت)</option>
                  <option value="medium">متوسط استاندارد (۶۰ تا ۸۰ سانت)</option>
                  <option value="large">بزرگ (۹۰ تا ۱۱۰ سانت)</option>
                  <option value="master">مستر و دوبل (۱۲۰+ سانت)</option>
                </select>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-3 py-2">
                <span className="text-slate-400">ترتیب:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer text-xs"
                >
                  <option value="featured">پیشنهاد کابین روز</option>
                  <option value="newest">جدیدترین تولیدات</option>
                  <option value="code">بر اساس کد محصول</option>
                </select>
              </div>

              {/* Reset Filters button if any filter active */}
              {(selectedCategory !== 'all' || selectedSizeFilter !== 'all' || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSizeFilter('all');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium transition-colors text-xs"
                  title="پاک کردن فیلترها"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>حذف فیلترها</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Search / Filter Indicator */}
          {searchQuery && (
            <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-900">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-600" />
                <span>
                  نتایج جستجو برای عبارت: <strong>«{searchQuery}»</strong> ({filteredProducts.length} مدل یافت شد)
                </span>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-700 hover:text-amber-950 font-bold underline text-xs"
              >
                پاک کردن جستجو
              </button>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setSelectedProduct(p)}
                  isSaved={savedIds.includes(product.id)}
                  onToggleSave={toggleSaveProduct}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center my-8 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                <Search className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">مدلی با این مشخصات یافت نشد</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                می‌توانید مدل دلخواه خود را با ابعاد اختصاصی به کارگاه تاتار سفارش دهید یا فیلتر دسته‌بندی را تغییر دهید.
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSizeFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
                >
                  نمایش تمام مدل‌ها
                </button>
                <button
                  onClick={() => setIsCustomOrderOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  سفارش ابعاد اختصاصی
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Telegram Official Channel Showcase Section */}
        <TelegramShowcase />

        {/* Custom Sizing Order Banner Callout */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 text-right">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs px-2.5 py-1 rounded-full font-semibold">
                <Ruler className="w-3.5 h-3.5 text-amber-400" />
                <span>تولید سفارشی مطابق نقشه سرویس شما</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                به دنبال ابعاد خاصی از روشویی یا آینه بک‌لایت هستید؟
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                در کارگاه کابین روز، شما می‌توانید کابین روشویی و آینه‌های لمسی را با طول، عمق، رنگ و نوع کاسه دلخواه بدون واسطه سفارش دهید.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center sm:justify-start">
              <button
                onClick={() => setIsCustomOrderOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg transition-colors"
              >
                <Ruler className="w-4 h-4" />
                <span>سفارش ابعاد اختصاصی</span>
              </button>

              <a
                href={SHOWROOM_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>عضویت در کانال تلگرام</span>
              </a>
            </div>
          </div>
        </section>

        {/* Showroom & Consultation & FAQ Section */}
        <ShowroomConsultation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detailed Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isSaved={selectedProduct ? savedIds.includes(selectedProduct.id) : false}
        onToggleSave={(prod) => toggleSaveProduct(prod)}
      />

      {/* Custom Vanity Sizing Order Modal */}
      <CustomVanityOrderModal
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
      />

      {/* Inquiry Slide-over Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        savedProducts={savedProductList}
        quantities={quantities}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearAll={clearAllSaved}
        onOpenProduct={(prod) => {
          setSelectedProduct(prod);
          setIsInquiryDrawerOpen(false);
        }}
      />

      {/* Floating Action Buttons */}
      <div className="hidden md:flex fixed bottom-20 sm:bottom-24 left-4 sm:left-6 z-40 flex flex-col gap-2 items-start pointer-events-auto">
        {/* Floating Instagram Channel Badge */}
        <a
          href={SHOWROOM_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[190px] sm:w-[205px] h-9 sm:h-10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white px-3 rounded-full shadow-xl flex items-center justify-center gap-1.5 font-bold text-xs transition-transform hover:scale-105 border border-pink-300/40 shrink-0 select-none"
          title="پیج رسمی اینستاگرام کابین روز"
        >
          <Instagram className="w-3.5 h-3.5 shrink-0 text-white" />
          <span className="truncate">اینستاگرام: {SHOWROOM_INFO.instagramId}</span>
        </a>

        {/* Floating Telegram Channel Badge */}
        <a
          href={SHOWROOM_INFO.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[190px] sm:w-[205px] h-9 sm:h-10 bg-sky-500 hover:bg-sky-400 text-slate-950 px-3 rounded-full shadow-xl flex items-center justify-center gap-1.5 font-bold text-xs transition-transform hover:scale-105 border border-sky-300 shrink-0 select-none"
          title="کانال رسمی تلگرام کابین روز"
        >
          <Send className="w-3.5 h-3.5 shrink-0 text-slate-950" />
          <span className="truncate">تلگرام: {SHOWROOM_INFO.telegramId}</span>
        </a>

        {/* Floating Saved Items Button */}
        {savedIds.length > 0 && !isInquiryDrawerOpen && (
          <button
            onClick={() => setIsInquiryDrawerOpen(true)}
            className="w-[190px] sm:w-[205px] h-9 sm:h-10 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold text-xs transition-transform hover:scale-105 animate-bounce border border-amber-300 shrink-0"
          >
            <Bookmark className="w-3.5 h-3.5 shrink-0" />
            <span>مدل‌های انتخابی ({savedIds.length})</span>
          </button>
        )}
      </div>
    </div>
  );
}
