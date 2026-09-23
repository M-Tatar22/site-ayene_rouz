import React, { useState } from 'react';
import {
  Phone,
  Instagram,
  Search,
  Bookmark,
  Menu,
  X,
  MapPin,
  Sparkles,
  Send,
  Ruler,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';
import { Product } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onSelectCategory: (categoryId: string) => void;
  activeCategory: string;
  products: Product[];
  onOpenProduct: (product: Product) => void;
  onOpenCustomOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  savedCount,
  onOpenSavedDrawer,
  onSelectCategory,
  activeCategory,
  products,
  onOpenProduct,
  onOpenCustomOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const searchResults =
    searchQuery.trim().length >= 2
      ? products
          .filter(
            (p) =>
              p.name.includes(searchQuery) ||
              p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.brand.includes(searchQuery) ||
              p.category.includes(searchQuery) ||
              p.specs.material.includes(searchQuery)
          )
          .slice(0, 5)
      : [];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              تولیدی آینه و کابین روشویی PVC تاتار (کابین روز)
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <a
              href={SHOWROOM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors font-medium"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>اینستاگرام: {SHOWROOM_INFO.instagramId}</span>
            </a>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <a
              href={SHOWROOM_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <Send className="w-3 h-3" />
              <span>کانال تلگرام: {SHOWROOM_INFO.telegramId}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SHOWROOM_INFO.phone1}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>سفارشات: {SHOWROOM_INFO.phone1}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${SHOWROOM_INFO.phone2}`}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300 font-medium"
            >
              <span>کارگاه: {SHOWROOM_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="منوی اصلی"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a href="#" className="flex items-center group">
              <BrandLogo size="md" variant="dark" />
            </a>
          </div>

          {/* Centered Search Bar with Instant Results */}
          <div className="flex-1 max-w-lg relative hidden md:block">
            <div className="relative">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                placeholder="جستجوی مدل روشویی، شیاردار، مشکی، ابعاد، کد..."
                className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 rounded-xl pr-10 pl-4 py-2.5 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dropdown for quick search */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                <div className="p-2 bg-slate-50 text-[11px] text-slate-500 font-medium border-b border-slate-100 flex justify-between">
                  <span>محصولات منطبق ({searchResults.length})</span>
                  <button
                    onClick={() => setShowSearchDropdown(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    بستن
                  </button>
                </div>
                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {searchResults.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => {
                        onOpenProduct(prod);
                        setShowSearchDropdown(false);
                      }}
                      className="w-full text-right p-3 hover:bg-amber-50/60 flex items-center gap-3 transition-colors group"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-amber-800 truncate">
                          {prod.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-700">
                            کد: {prod.code}
                          </span>
                          <span>{prod.category}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={onOpenCustomOrder}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-300 text-xs font-bold transition-all shadow-2xs"
            >
              <Ruler className="w-3.5 h-3.5 text-amber-700" />
              <span>سفارش ابعاد اختصاصی</span>
            </button>

            <a
              href={SHOWROOM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 text-pink-800 border border-pink-200 text-xs font-semibold transition-all shadow-2xs"
              title="اینستاگرام کابین روز"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>اینستاگرام</span>
            </a>

            <a
              href={SHOWROOM_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-semibold transition-all"
              title="کانال تلگرام کابین روز"
            >
              <Send className="w-3.5 h-3.5 text-sky-600" />
              <span>تلگرام</span>
            </a>

            <button
              id="saved-inquiry-drawer-btn"
              onClick={onOpenSavedDrawer}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:border-amber-300"
              title="کالاهای منتخب جهت استعلام"
            >
              <Bookmark className="w-4 h-4 text-amber-600" />
              <span className="hidden md:inline text-xs">اقلام منتخب</span>
              {savedCount > 0 ? (
                <span className="bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                  {savedCount}
                </span>
              ) : (
                <span className="text-slate-400 text-xs hidden sm:inline">(۰)</span>
              )}
            </button>

            <a
              id="header-showroom-consult-btn"
              href="#showroom-section"
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 hidden sm:inline" />
              <span>کارگاه و پخش</span>
            </a>
          </div>
        </div>

        {/* Mobile Search input bar */}
        <div className="mt-2.5 md:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجو در نام مدل، آینه، ابعاد یا کد کالا..."
              className="w-full bg-slate-100 text-xs text-slate-900 rounded-xl pr-9 pl-3 py-2 border border-slate-200 outline-none focus:bg-white focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Navigation Quick Filter Tabs */}
      <div className="border-t border-slate-100 bg-slate-50/80 px-4 sm:px-6 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium whitespace-nowrap">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === 'all'
                ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            تمام مدل‌های کارگاه
          </button>
          <button
            onClick={() => onSelectCategory('vanity-modern-wood')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === 'vanity-modern-wood'
                ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            طرح چوب و شیاردار مدرن
          </button>
          <button
            onClick={() => onSelectCategory('vanity-wallhang')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === 'vanity-wallhang'
                ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            کابین روشویی وال‌هنگ دیواری
          </button>
          <button
            onClick={() => onSelectCategory('vanity-matte-black')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === 'vanity-matte-black'
                ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            فول‌ست مشکی مات لوکس
          </button>
          <button
            onClick={() => onSelectCategory('mirror-cabinets')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === 'mirror-cabinets'
                ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            آینه باکس و شلف ضدآب
          </button>

          <span className="text-slate-300">|</span>

          <button
            onClick={onOpenCustomOrder}
            className="px-3 py-1.5 rounded-lg bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-bold transition-colors flex items-center gap-1"
          >
            <Ruler className="w-3.5 h-3.5 text-amber-700" />
            <span>سفارش ابعاد اختصاصی</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('behind-the-scenes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
          >
            <span>🎬 گالری پشت صحنه</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu (Full height & Close button added) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-5 overflow-y-auto flex flex-col justify-between h-full min-h-screen">
          <div>
            {/* Header with Close (X) button */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">منوی دسترسی سریع</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 text-xs font-bold cursor-pointer"
                aria-label="بستن منو"
              >
                <span>بستن</span>
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-extrabold text-xs text-slate-400 uppercase tracking-wider">دسته‌بندی‌های کابین روز:</h3>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <button
                  onClick={() => {
                    onSelectCategory('all');
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-right font-medium text-slate-800"
                >
                  همه مدل‌ها ({products.length})
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('vanity-modern-wood');
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-right font-medium text-slate-800"
                >
                  طرح چوب و شیاردار مدرن
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('vanity-wallhang');
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-right font-medium text-slate-800"
                >
                  کابین روشویی وال‌هنگ دیواری
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('vanity-matte-black');
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-right font-medium text-slate-800"
                >
                  فول‌ست مشکی مات لوکس
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('mirror-cabinets');
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-right font-medium text-slate-800"
                >
                  آینه باکس و شلف ضدآب PVC
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2.5 pb-8 mt-6">
            <button
              onClick={() => {
                const el = document.getElementById('behind-the-scenes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <span>🎬 مشاهده گالری پشت صحنه</span>
            </button>

            <button
              onClick={() => {
                onOpenCustomOrder();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Ruler className="w-4 h-4" />
              <span>سفارش ابعاد اختصاصی کابین روشویی</span>
            </button>

            <a
              href={SHOWROOM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>پیج اینستاگرام کابین روز ({SHOWROOM_INFO.instagramId})</span>
            </a>

            <a
              href={SHOWROOM_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>کانال تلگرام کابین روز ({SHOWROOM_INFO.telegramId})</span>
            </a>

            <a
              href={`tel:${SHOWROOM_INFO.phone1}`}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>تماس مستقیم کارگاه: {SHOWROOM_INFO.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
