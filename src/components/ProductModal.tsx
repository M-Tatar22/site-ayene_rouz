import React, { useState } from 'react';
import { Product } from '../types';
import {
  X,
  Phone,
  MessageCircle,
  Bookmark,
  Check,
  ShieldCheck,
  Copy,
  Wrench,
  Sparkles,
  Layers,
  Send,
  ExternalLink,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const whatsappMessage = `درود بر برادران تاتار (کابین روز)،\nدرخواست استعلام قیمت و سفارش مدل زیر را دارم:\n- نام محصول: ${product.name}\n- کد کالا: ${product.code}\n- برند: ${product.brand}\n- سایز/ابعاد: ${product.specs.dimensions || product.specs.unitSize}\nلطفاً قیمت روز و زمان تحویل را اعلام فرمایید.`;
  const whatsappUrl = `https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopySpecs = () => {
    const textToCopy = `کابین روز (تولیدی آینه و روشویی PVC تاتار)\nمدل: ${product.name}\nکد کالا: ${product.code}\nابعاد کابین: ${product.specs.dimensions || product.specs.unitSize || '-'}\nابعاد آینه: ${product.specs.mirrorDimensions || '-'}\nمتریال: ${product.specs.material}\nپوشش: ${product.specs.finish}\nکانال تلگرام: ${SHOWROOM_INFO.telegram}\nتلفن سفارشات: ${SHOWROOM_INFO.phone1}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg">
              کد: {product.code}
            </span>
            <span className="text-xs text-amber-800 bg-amber-100 font-bold px-2 py-0.5 rounded">
              {product.brand}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySpecs}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-200/80 transition-colors text-xs flex items-center gap-1"
              title="کپی مشخصات جهت ارسال به همکار یا نصاب"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 hidden sm:inline">کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">کپی مشخصات</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="بستن پنجره"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Gallery Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 text-[10px] bg-slate-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                  تصویر واقعی تولیدی تاتار
                </span>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-amber-500 ring-2 ring-amber-500/20'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="نمای محصول" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Telegram Channel Post Quick Box */}
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between font-bold text-sky-900">
                  <div className="flex items-center gap-1.5">
                    <Send className="w-4 h-4 text-sky-600" />
                    <span>کانال تلگرام کابین روز</span>
                  </div>
                  <a
                    href={SHOWROOM_INFO.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-sky-700 hover:text-sky-900 flex items-center gap-0.5 underline"
                  >
                    <span>{SHOWROOM_INFO.telegramId}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  جهت مشاهده فیلم کوتاه کارکرد آینه لمسی، تست ضدآب بودن رنگ و نمونه‌های ارسالی این مدل، کانال تلگرام ما را مشاهده کنید.
                </p>
              </div>

              {/* Warranty & Origin Card */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>{product.warranty}</span>
                </div>
                <div className="text-slate-600 text-[11px] leading-relaxed">
                  تولید مستقیم در کارگاه برادران تاتار با ضمانت عدم نفوذ رطوبت و تغییر رنگ.
                </div>
              </div>
            </div>

            {/* Product Details & Specs Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">{product.category}</span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1 leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>مزایا و ویژگی‌های کلیدی مدل:</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-slate-500" />
                  <span>مشخصات فنی و ابعادی دقیق:</span>
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                  <div className="divide-y divide-slate-100 bg-white">
                    {product.specs.unitSize && (
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-slate-500 font-medium">سایز و عرض یونیت:</span>
                        <span className="col-span-2 text-slate-900 font-bold">{product.specs.unitSize}</span>
                      </div>
                    )}
                    {product.specs.dimensions && (
                      <div className="grid grid-cols-3 p-2.5 bg-slate-50/50">
                        <span className="text-slate-500 font-medium">ابعاد کابین روشویی:</span>
                        <span className="col-span-2 text-slate-900 font-mono">{product.specs.dimensions}</span>
                      </div>
                    )}
                    {product.specs.mirrorDimensions && (
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-slate-500 font-medium">ابعاد آینه / باکس:</span>
                        <span className="col-span-2 text-slate-900 font-mono">{product.specs.mirrorDimensions}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-3 p-2.5 bg-slate-50/50">
                      <span className="text-slate-500 font-medium">جنس بدنه:</span>
                      <span className="col-span-2 text-slate-900 font-medium">{product.specs.material}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-slate-500 font-medium">پوشش و رنگ:</span>
                      <span className="col-span-2 text-slate-900">{product.specs.finish}</span>
                    </div>
                    {product.specs.basinType && (
                      <div className="grid grid-cols-3 p-2.5 bg-slate-50/50">
                        <span className="text-slate-500 font-medium">نوع کاسه / سنگ:</span>
                        <span className="col-span-2 text-slate-900">{product.specs.basinType}</span>
                      </div>
                    )}
                    {product.specs.mirrorFeature && (
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-slate-500 font-medium">قابلیت‌های آینه:</span>
                        <span className="col-span-2 text-amber-900 font-medium">{product.specs.mirrorFeature}</span>
                      </div>
                    )}
                    {product.specs.hardware && (
                      <div className="grid grid-cols-3 p-2.5 bg-slate-50/50">
                        <span className="text-slate-500 font-medium">یراق‌آلات و لولا:</span>
                        <span className="col-span-2 text-slate-900">{product.specs.hardware}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-slate-500 font-medium">نوع نصب:</span>
                      <span className="col-span-2 text-slate-900">{product.specs.installation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation Tip */}
              {product.installationTip && (
                <div className="flex items-start gap-2 bg-sky-50 border border-sky-100 p-3 rounded-xl text-xs text-sky-900">
                  <Wrench className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sky-950">نکته فنی برای نصب در سرویس بهداشتی:</span>
                    {product.installationTip}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Footer Call to Action */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onToggleSave(product)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isSaved
                  ? 'bg-amber-500 border-amber-400 text-slate-950'
                  : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-white'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{isSaved ? 'در اقلام انتخابی ذخیره شد' : 'افزودن به اقلام انتخابی'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href={`tel:${SHOWROOM_INFO.phone1}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>تماس تلفنی</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استعلام قیمت در واتساپ تاتار</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
