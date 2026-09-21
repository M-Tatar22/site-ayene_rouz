import React from 'react';
import {
  Sparkles,
  Send,
  Instagram,
  PhoneCall,
  ArrowDown,
  Ruler,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

interface HeroSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onSearchTag: (tag: string) => void;
  onOpenCustomOrder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCategory,
  onSearchTag,
  onOpenCustomOrder,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-8 pb-16 px-4 sm:px-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Badges */}
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>تولید کننده مستقیم انواع آینه و کابین روشویی PVC</span>
          </div>

          <a
            href={SHOWROOM_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500/15 to-purple-500/15 hover:from-pink-500/25 hover:to-purple-500/25 border border-pink-400/40 text-pink-300 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>پیج اینستاگرام: {SHOWROOM_INFO.instagramId}</span>
          </a>

          <a
            href={SHOWROOM_INFO.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-300 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
          >
            <Send className="w-3 h-3 text-sky-400" />
            <span>کانال رسمی تلگرام: {SHOWROOM_INFO.telegramId}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Title & Description */}
          <div className="lg:col-span-7 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
              ویترین تخصصی <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">کابین روشویی مدرن</span> و آینه‌های لوکس PVC
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
              مجموعه تولیدی <strong className="text-white">کابین روز (برادران تاتار)</strong> طراح و سازنده نسل جدید کابین‌های روشویی وال‌هنگ دیواری، مدل‌های شیاردار طرح چوب، فول‌ست‌های مات مشکی و طوسی، و آینه باکس‌های چندمنظوره ۱۰۰٪ ضدآب.
              <span className="block mt-1 text-amber-200/90 font-medium">
                مدل‌های کارگاه را بررسی کنید، به لیست استعلام اضافه نمایید و جهت اطلاع از قیمت روز و ثبت سفارش مستقیماً با کارگاه در تماس باشید.
              </span>
            </p>

            {/* Quick Popular Tags */}
            <div className="pt-1 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 text-[11px]">دسته‌بندی‌های محبوب:</span>
              {[
                'طرح چوب شیاردار',
                'مشکی مات لوکس',
                'روشویی وال‌هنگ',
                'آینه گرد مینیمال',
                'آینه باکس سه طبقه',
                'طوسی مات مدرن',
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearchTag(tag)}
                  className="bg-slate-800/90 hover:bg-amber-600/30 hover:border-amber-400/40 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg transition-all text-xs"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#catalog-section"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                <span>مشاهده کاتالوگ مدل‌ها</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCustomOrder}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Ruler className="w-4 h-4 text-amber-400" />
                <span>سفارش ابعاد دلخواه کارگاهی</span>
              </button>

              <a
                href={`tel:${SHOWROOM_INFO.phone1}`}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>تماس مستقیم: {SHOWROOM_INFO.phone1}</span>
              </a>
            </div>
          </div>

          {/* Right Featured Manufacturing Specs Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 border border-slate-800 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm text-white block">استانداردهای خط تولید کابین روز</span>
                    <span className="text-[11px] text-slate-400">مدیریت: برادران تاتار</span>
                  </div>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
                  ۱۰۰٪ ضدآب
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">ورق تمام PVC فومیزه ۱۶ میلی‌متر سوپر:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      دانسیته فشرده و استاندارد بدون بادکردگی، طبله یا تغییر فرم حتی در مرطوب‌ترین حمام‌ها.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">رنگ‌های سوپر پلی‌اورتان ضدخش و ضداسید:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      پوشش مقاوم چندلایه با ثبات رنگ پایدار در برابر شوینده‌ها، آب گرم و بخار مداوم.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">یراق‌آلات استیل ۳۰۴ پمپی آرام‌بند:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      ریل‌های ساچمه‌ای روان و لولاهای پمپی بدون صدا با مقاومت دائم در برابر اکسیداسیون و زنگ‌زدگی.
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Callout in Card */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={SHOWROOM_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  <span>اینستاگرام: {SHOWROOM_INFO.instagramId}</span>
                </a>
                <a
                  href={SHOWROOM_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>تلگرام: {SHOWROOM_INFO.telegramId}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
