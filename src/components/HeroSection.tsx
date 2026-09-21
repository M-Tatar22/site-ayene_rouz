import React from 'react';
import {
  Sparkles,
  Send,
  PhoneCall,
  ArrowDown,
  Ruler,
  CheckCircle2,
  Layers,
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
              ویترین تخصصی <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">کابین روشویی PVC</span> و آینه‌های هوشمند بک‌لایت
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
              مجموعه تولیدی <strong className="text-white">کابین روز (تاتار)</strong> با بیش از یک دهه تجربه در ساخت انواع کابین روشویی ۱۰۰٪ ضدآب دیواری (وال‌هنگ) و پایه‌دار، آینه‌های هوشمند لمسی ال‌ای‌دی، آینه باکس‌های PVC و صفحات اسلب سرامیک پرسلان.
              <span className="block mt-1 text-amber-200/90 font-medium">
                مشخصات و ابعاد مدل‌ها را بررسی کنید، بدون نیاز به ثبت‌نام به لیست انتخابی بیافزایید یا با ابعاد دلخواه خود مستقیماً از کارگاه استعلام قیمت بگیرید.
              </span>
            </p>

            {/* Quick Popular Tags */}
            <div className="pt-1 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 text-[11px]">جستجوهای متداول:</span>
              {[
                'وال‌هنگ طوسی مات',
                'آینه لمسی کپسولی',
                'روشویی صفحه سرامیک',
                'سایز ۵۰ کوچک',
                'آینه باکس دو درب',
                'آینه بک‌لایت گرد',
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
                <span>مشاهده آلبوم مدل‌ها</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCustomOrder}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Ruler className="w-4 h-4 text-amber-400" />
                <span>سفارش ابعاد اختصاصی کارگاهی</span>
              </button>

              <a
                href={`tel:${SHOWROOM_INFO.phone1}`}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>تماس: {SHOWROOM_INFO.phone1}</span>
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
                    <strong className="text-white block font-semibold">ورق تمام PVC فومیزه ۱۶ میلی‌متر:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      دانسیته فشرده و استاندارد بدون خطر بادکردگی، تغییر فرم و موریانه‌زدگی حتی زیر دوش مستقیم.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">رنگ‌های سوپر پلی‌اورتان ضدخش:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      پوشش ۳ لایه آستر و رویه خودرویی با ثبات رنگ بالا در برابر مواد شوینده و جرم‌گیر.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">آینه‌های سوپرکلیر اردکان با سنسور تاچ:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">
                      جیوه نقره درجه یک بدون سیاهی لبه، کیت ال‌ای‌دی ۱۲ ولت ایزوله و کلید لمسی حساس.
                    </span>
                  </div>
                </div>
              </div>

              {/* Telegram Channel Callout in Card */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-sky-400" />
                  <span className="text-xs text-slate-300">کانال تلگرام:</span>
                  <span className="text-xs font-mono font-bold text-sky-300">Ayene_rouz@</span>
                </div>
                <a
                  href={SHOWROOM_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4"
                >
                  مشاهده کانال
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
