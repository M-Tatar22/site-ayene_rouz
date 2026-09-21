import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Ruler,
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

export const ShowroomConsultation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    topic: 'مشاوره ابعاد روشویی و استعلام قیمت',
    message: '',
  });

  const faqs = [
    {
      q: 'چرا کابین روشویی PVC نسبت به ام‌دی‌اف (MDF) برتری قطعی دارد؟',
      a: 'فضای حمام و دستشویی همواره در معرض بخار مداوم و پاشش مستقیم آب است. حتی مرغوب‌ترین MDFهای ضدآب پس از مدتی متورم شده و تغییر شکل می‌دهند؛ اما ورق PVC فومیزه ۱۶ میل استفاده شده در کابین روز، ۱۰۰٪ ضدآب بوده و هرگز نمی‌پوسد، قارچ نمی‌زند و ضد موریانه است.',
    },
    {
      q: 'آیا امکان سفارش کابین روشویی یا آینه با ابعاد دقیق سرویس بهداشتی من وجود دارد؟',
      a: 'بله، تفاوت اصلی مجموعه کابین روز (تاتار) این است که ما تولیدکننده مستقیم هستیم. کافی است طول و عمق فضای خود را از طریق واتساپ یا دکمه «سفارش ابعاد اختصاصی» ارسال کنید تا مدل دلخواه شما دقیقاً به میلیمتر ساخته شود.',
    },
    {
      q: 'آینه‌های هوشمند لمسی چگونه کار می‌کنند و آیا در محیط مرطوب ایمن هستند؟',
      a: 'تمام آینه‌های هوشمند تولیدی ما از ترانس‌های ایزوله ۱۲ ولت ضدآب استاندارد استفاده می‌کنند و هیچ خطری برای کاربر ندارند. سنسور تاچ حتی با دست خیس کار می‌کند و پد گرمکن ضدبخار باعث می‌شود پس از دوش داغ، آینه کاملاً شفاف بماند.',
    },
    {
      q: 'نحوه ارسال سفارشات به تهران و شهرستان‌ها چگونه انجام می‌شود؟',
      a: 'سفارشات تهران و حومه با پیک و وانت بار اختصاصی ارسال می‌گردد. سفارشات سایر شهرهای کشور در بسته‌بندی جعبه پالت چوبی به همراه فوم ضربه‌گیر مقاوم و بیمه کالا از طریق باربری‌های مجاز تحویل داده می‌شوند.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;
    const msg = `درود بر برادران تاتار (کابین روز)،\nدرخواست مشاوره ثبت شد:\nنام: ${form.name || '-'}\nشماره: ${form.phone}\nموضوع: ${form.topic}\nپیام: ${form.message || '-'}`;
    const url = `https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setConsultationSubmitted(true);
  };

  return (
    <section id="showroom-section" className="py-16 bg-slate-100 border-t border-slate-200 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-700 font-bold text-xs bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            تولید مستقیم کارگاهی - بدون واسطه
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            کارگاه تولیدی و دفتر پخش کابین روز
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            مدیریت: برادران تاتار | تولید کننده انواع آینه هوشمند و کابین روشویی PVC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Workshop Contact Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>اطلاعات تماس، کارگاه و کانال تلگرام</span>
              </h3>
              <p className="text-xs text-slate-500">
                جهت سفارش تکی، عمده برای پروژه‌های ساختمانی یا بازدید از نمونه‌های کارگاه:
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold mb-0.5">آدرس کارگاه و پخش:</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">{SHOWROOM_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold mb-0.5">ساعات فعالیت و پاسخگویی:</strong>
                  <p className="text-slate-600 text-xs">{SHOWROOM_INFO.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
                <Send className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sky-950 block font-bold mb-0.5">کانال رسمی تلگرام:</strong>
                  <a
                    href={SHOWROOM_INFO.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:text-sky-900 text-xs font-mono font-bold underline"
                  >
                    {SHOWROOM_INFO.telegram} ({SHOWROOM_INFO.telegramId})
                  </a>
                  <span className="block text-[11px] text-slate-500 mt-0.5">
                    مشاهده روزانه ویدیوهای خط تولید و مدل‌های ارسالی مشتریان
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${SHOWROOM_INFO.phone1}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400">سفارش و مشاوره (تاتار):</span>
                    <span className="font-mono text-xs font-bold text-emerald-300">{SHOWROOM_INFO.phone1}</span>
                  </div>
                </a>

                <a
                  href={`tel:${SHOWROOM_INFO.phone2}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400">کارگاه و پشتیبانی (تاتار):</span>
                    <span className="font-mono text-xs font-bold text-emerald-300">{SHOWROOM_INFO.phone2}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>درخواست مشاوره رایگان انتخاب مدل و اندازه:</span>
              </h4>

              {consultationSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>درخواست شما در واتساپ باز شد. در کوتاه‌ترین زمان پاسخگوی شما هستیم.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی شما"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="شماره تماس (الزامی)"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none font-mono text-right"
                    />
                  </div>

                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none text-slate-700"
                  >
                    <option value="مشاوره ابعاد روشویی و استعلام قیمت">مشاوره ابعاد روشویی و استعلام قیمت</option>
                    <option value="سفارش ساخت ابعاد سفارشی">سفارش ساخت ابعاد سفارشی</option>
                    <option value="خرید آینه هوشمند لمسی بک‌لایت">خرید آینه هوشمند لمسی بک‌لایت</option>
                    <option value="سفارش عمده پروژه‌ای و انبوه‌سازی">سفارش عمده پروژه‌ای و انبوه‌سازی</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>ارسال پیام مشاوره به واتساپ کارگاه</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <span>پرسش‌های متداول مشتریان و همکاران</span>
              </h3>
              <p className="text-xs text-slate-500">
                پاسخ به سوالات پرتکرار درباره جنس PVC، ضدآب بودن و ابعاد سفارشی:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-right p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
