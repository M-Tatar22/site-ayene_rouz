import React from 'react';
import { SHOWROOM_INFO } from '../data/products';
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-right">
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">۱۰۰٪ ضدآب و ضد رطوبت</span>
              <span className="text-slate-400 text-[11px]">ورق فومیزه ۱۶ میل PVC با ماندگاری مادام‌العمر</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">رنگ سوپر پلی‌اورتان</span>
              <span className="text-slate-400 text-[11px]">مقاوم در برابر جرم‌گیر، شوینده و آب داغ</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">پیج اینستاگرام</span>
              <span className="text-slate-400 text-[11px]">مشاهده نمونه‌کارهای روزانه در ayene_rouz@</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold shrink-0">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">کانال تلگرام فعال</span>
              <span className="text-slate-400 text-[11px]">استعلام قیمت و مدل‌های جدید در Ayene_rouz@</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" variant="light" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-md mt-2">
              تولیدی <strong className="text-slate-200">کابین روز (تاتار)</strong> طراح و سازنده انواع روشویی کابینتی دیواری (وال‌هنگ)، کشودار شیاردار مدرن، آینه‌های شیک و آینه باکس‌های لوکس ۱۰۰٪ ضدآب PVC.
              این وب‌سایت به عنوان ویترین تخصصی برای انتخاب آسان مدل‌ها و استعلام مستقیم قیمت از کارگاه فعالیت می‌کند.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={SHOWROOM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 text-pink-300 border border-pink-500/40 text-xs font-semibold transition-all hover:scale-102"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>اینستاگرام: {SHOWROOM_INFO.instagramId}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={SHOWROOM_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>کانال تلگرام: {SHOWROOM_INFO.telegramId}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-white text-sm">محصولات تولیدی کابین روز:</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#catalog-section" className="hover:text-amber-400 transition-colors">
                  روشویی‌های وال‌هنگ مدرن با ورق ۱۶ میل ضدآب
                </a>
              </li>
              <li>
                <a href="#catalog-section" className="hover:text-amber-400 transition-colors">
                  کابین‌های طرح چوب و شیاردار CNC
                </a>
              </li>
              <li>
                <a href="#catalog-section" className="hover:text-amber-400 transition-colors">
                  فول‌ست مشکی مات با کاسه سرامیکی اختصاصی
                </a>
              </li>
              <li>
                <a href="#catalog-section" className="hover:text-amber-400 transition-colors">
                  آینه باکس‌های شلف‌دار و جا حوله‌ای استیل
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Workshop */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-extrabold text-white text-sm">ارتباط مستقیم با مدیریت فروش و کارگاه:</h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{SHOWROOM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{SHOWROOM_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>سفارشات و استعلام: </span>
                <a href={`tel:${SHOWROOM_INFO.phone1}`} className="font-mono text-white hover:text-emerald-400">
                  {SHOWROOM_INFO.phone1} (تاتار)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>پشتیبانی و کارگاه: </span>
                <a href={`tel:${SHOWROOM_INFO.phone2}`} className="font-mono text-white hover:text-emerald-400">
                  {SHOWROOM_INFO.phone2} (تاتار)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} تولیدی آینه و کابین روشویی PVC تاتار (کابین روز). کلیه حقوق محفوظ است.
          </p>

          {/* Developer Credit Link requested by user */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">طراحی و توسعه توسط:</span>
            <a
              href="https://matintatar.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-medium border border-slate-800 hover:border-amber-500/40 transition-all shadow-sm"
              title="مشاهده وب‌سایت توسعه‌دهنده"
            >
              <span>M_Tatar22</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
