import React, { useState } from 'react';
import { Product } from '../types';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Copy,
  Check,
  Bookmark,
  Send,
  Phone,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  quantities: Record<string, number>;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onOpenProduct: (product: Product) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  savedProducts,
  quantities,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onOpenProduct,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Build formatted text message
  const generateInquirySummary = () => {
    let text = `درود بر برادران تاتار (تولیدی کابین روز)،\nلیست مدل‌های انتخابی من از وب‌سایت کابین روز جهت دریافت قیمت روز و استعلام موجودی:\n\n`;
    savedProducts.forEach((prod, index) => {
      const qty = quantities[prod.id] || 1;
      text += `${index + 1}. ${prod.name}\n   کد: ${prod.code} | ابعاد/سایز: ${prod.specs.dimensions || prod.specs.unitSize || '-'}\n   تعداد مورد نیاز: ${qty}\n\n`;
    });
    text += `لطفاً قیمت روز، هزینه ارسال و زمان آماده‌سازی کارگاه را اعلام فرمایید. سپاس.`;
    return text;
  };

  const handleCopy = () => {
    const summary = generateInquirySummary();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent(
    generateInquirySummary()
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-r border-slate-200 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold">
              <Bookmark className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-slate-900">
                اقلام انتخابی شما در کابین روز
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {savedProducts.length} قلم کالا بدون نیاز به ثبت‌نام
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {savedProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors text-xs flex items-center gap-1"
                title="پاک کردن همه اقلام"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">پاک کردن</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Saved Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {savedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-slate-400">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400">
                <Bookmark className="w-8 h-8" />
              </div>
              <p className="font-bold text-slate-700 text-sm">لیست استعلام شما خالی است</p>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                روی آیکون نشان کردن در کارت‌های محصول کلیک کنید تا اقلام مورد نظر شما برای مقایسه یا استعلام قیمت یکجا به این بخش اضافه شوند.
              </p>
            </div>
          ) : (
            savedProducts.map((prod) => {
              const qty = quantities[prod.id] || 1;
              return (
                <div
                  key={prod.id}
                  className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex gap-3 items-center group hover:border-amber-300 transition-all"
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-16 h-16 rounded-xl object-cover bg-white shrink-0 border border-slate-200 cursor-pointer"
                    onClick={() => onOpenProduct(prod)}
                  />

                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => onOpenProduct(prod)}
                      className="text-xs font-bold text-slate-900 line-clamp-1 hover:text-amber-700 cursor-pointer"
                    >
                      {prod.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                      <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700">
                        {prod.code}
                      </span>
                      <span>{prod.specs.unitSize || prod.category}</span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/60">
                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(prod.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold font-mono px-2 text-slate-800">
                          {qty}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(prod.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(prod.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 text-[11px]"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer Actions */}
        {savedProducts.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="text-[11px] text-slate-500 bg-amber-50 border border-amber-200 p-2.5 rounded-xl flex items-center justify-between">
              <span>تعداد کل مدل‌ها: {savedProducts.length}</span>
              <span className="font-bold text-amber-900">استعلام مستقیم از کارگاه تاتار</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'لیست کپی شد!' : 'کپی کل متن لیست'}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-900/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ارسال لیست در واتساپ</span>
              </a>
            </div>

            <a
              href={`tel:${SHOWROOM_INFO.phone1}`}
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>تماس مستقیم با مدیریت فروش ({SHOWROOM_INFO.phone1})</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
