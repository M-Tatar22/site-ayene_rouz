import React from 'react';
import { Send, CheckCircle2, Video, Sparkles, ExternalLink, Phone, ShieldCheck } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

export const TelegramShowcase: React.FC = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-900 via-slate-900 to-slate-950 text-white p-6 sm:p-10 border border-sky-700/40 shadow-xl">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>کانال رسمی تلگرام: Ayene_rouz@</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white">
              جدیدترین مدل‌های خط تولید را در{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                کانال تلگرام کابین روز
              </span>{' '}
              دنبال کنید
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              به دلیل تولید روزانه و مداوم طرح‌های جدید در کارگاه تاتار، جدیدترین مدل‌های کابین روشویی PVC،
              ویدیوهای زنده از نحوه کارکرد آینه‌های لمسی، تست ضدآب بودن رنگ پلی‌اورتان و نمونه‌های ارسالی برای مشتریان،
              پیش از هرجای دیگر در کانال تلگرام ما قرار می‌گیرد.
            </p>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>فیلم‌های کوتاه از کارکرد سنسور تاچ و بخارگیر آینه‌ها</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>معرفی مدل‌های اختصاصی قبل از بارگذاری عمومی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>تخفیف‌های ویژه برای پروژه‌های ساختمانی و همکاران</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>راهنمای سایزبندی دقیق و مشاوره‌های فنی نصب</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                id="telegram-channel-btn"
                href={SHOWROOM_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-sky-500/25 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>ورود به کانال تلگرام کابین روز ({SHOWROOM_INFO.telegramId})</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent('سلام و درود، از طریق وب‌سایت کابین روز پیام می‌دهم و مایل به استعلام قیمت و مدل‌های تلگرام هستم.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all"
              >
                <span>ارتباط مستقیم در واتساپ</span>
              </a>
            </div>
          </div>

          {/* Right Card: Telegram Channel Preview Box */}
          <div className="lg:col-span-4">
            <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl p-5 border border-sky-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-white text-sm">کابین روز | آینه روز</div>
                  <div className="text-sky-300 text-xs font-mono">{SHOWROOM_INFO.telegramId}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">تولید کننده:</span>
                  <span className="text-amber-400 font-bold">برادران تاتار</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">حوزه فعالیت:</span>
                  <span className="text-slate-200">آینه و روشویی PVC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">شماره سفارشات:</span>
                  <span className="font-mono text-emerald-400 font-bold">{SHOWROOM_INFO.phone1}</span>
                </div>
              </div>

              <a
                href={SHOWROOM_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>عضویت در کانال تلگرام</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
