import React from 'react';
import { Product } from '../types';
import {
  Bookmark,
  Check,
  Eye,
  MessageCircle,
  ShieldCheck,
  Send,
  Sparkles,
  Ruler,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  isSaved: boolean;
  onToggleSave: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  isSaved,
  onToggleSave,
}) => {
  const whatsappUrl = `https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent(
    `سلام آقای تاتار، مایل به استعلام قیمت روز و ثبت سفارش از وب‌سایت کابین روز هستم:\nنام مدل: ${product.name}\nکد کالا: ${product.code}\nسایز/یونیت: ${product.specs.unitSize || '-'}\nمتریال: ${product.specs.material}`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-right">
      {/* Product Image and Badges */}
      <div
        className="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 items-start">
          <span className="bg-slate-950/85 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
            کد: {product.code}
          </span>
          {product.isNew && (
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              مدل جدید
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              ویژه کابین روز
            </span>
          )}
        </div>

        {/* Bookmark Button on Image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(product);
          }}
          className={`absolute top-2.5 left-2.5 p-2 rounded-xl backdrop-blur-md transition-all ${
            isSaved
              ? 'bg-amber-500 text-white shadow-md'
              : 'bg-white/85 hover:bg-white text-slate-700 shadow-xs'
          }`}
          title={isSaved ? 'حذف از لیست استعلام' : 'نشان کردن در لیست استعلام'}
          aria-label="افزودن به لیست منتخب"
        >
          <Bookmark className="w-4 h-4" />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            مشاهده آلبوم و مشخصات فنی
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category Info */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
            <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded">
              {product.brand}
            </span>
            <span className="text-emerald-700 font-medium text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
              ۱۰۰٪ ضدآب PVC
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 hover:text-amber-700 cursor-pointer transition-colors leading-snug"
          >
            {product.name}
          </h3>

          {/* Specifications Pills */}
          <div className="mt-2.5 space-y-1 text-[11px] text-slate-600 bg-slate-50/90 p-2 rounded-xl border border-slate-100">
            {product.specs.unitSize && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">سایز / عرض:</span>
                <span className="font-semibold text-slate-900">{product.specs.unitSize}</span>
              </div>
            )}
            {product.specs.finish && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">پوشش رنگ:</span>
                <span className="font-medium text-slate-800 line-clamp-1">{product.specs.finish}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-slate-400">ضمانت بدنه:</span>
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {product.warranty}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing / Inquiry Note & Action Controls */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400">قیمت:</span>
              <span className="text-xs font-bold text-amber-900">
                {product.priceEstimate || 'استعلام روز کارگاه'}
              </span>
            </div>
            <a
              href={SHOWROOM_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 px-2 py-0.5 rounded-full font-medium flex items-center gap-1"
            >
              <Send className="w-2.5 h-2.5 text-sky-600" />
              <span>کانال تلگرام</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenDetails(product)}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>مشخصات فنی</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors"
              title="استعلام در واتساپ"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>استعلام قیمت</span>
            </a>
          </div>

          <button
            onClick={() => onToggleSave(product)}
            className={`w-full py-1.5 px-3 rounded-lg text-[11px] font-medium transition-all flex items-center justify-center gap-1.5 border ${
              isSaved
                ? 'bg-amber-50 text-amber-800 border-amber-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-3.5 h-3.5 text-amber-600" />
                <span>در لیست استعلام شما ذخیره شد</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                <span>افزودن به لیست اقلام انتخابی</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
