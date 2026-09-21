import React, { useState } from 'react';
import { X, Send, Ruler, Sparkles, Check, Phone, Instagram, Copy } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/products';

interface CustomVanityOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomVanityOrderModal: React.FC<CustomVanityOrderModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [length, setLength] = useState('75');
  const [depth, setDepth] = useState('45');
  const [mountType, setMountType] = useState('وال‌هنگ (دیواری معلق)');
  const [mirrorType, setMirrorType] = useState('آینه گرد مینیمال');
  const [colorFinish, setColorFinish] = useState('طرح چوب بلوط شیاردار');
  const [basinType, setBasinType] = useState('کاسه سرامیک بیضی روکار');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [extraNotes, setExtraNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const generateOrderMessage = () => {
    return (
      `درود بر برادران تاتار (کابین روز)،\n` +
      `درخواست استعلام قیمت و ساخت کابین روشویی سفارشی دارم:\n\n` +
      `📐 ابعاد درخواستی:\n` +
      `- طول (عرض): ${length} سانتی‌متر\n` +
      `- عمق: ${depth} سانتی‌متر\n` +
      `- نحوه نصب: ${mountType}\n` +
      `- نوع آینه: ${mirrorType}\n` +
      `- رنگ و فینیش: ${colorFinish}\n` +
      `- نوع کاسه: ${basinType}\n` +
      (customerName ? `- نام متقاضی: ${customerName}\n` : '') +
      (customerPhone ? `- تلفن: ${customerPhone}\n` : '') +
      (extraNotes ? `- توضیحات تکمیلی: ${extraNotes}\n` : '') +
      `\nلطفاً برآورد قیمت تولید و زمان آماده‌سازی را اعلام بفرمایید.`
    );
  };

  const handleCopy = () => {
    const msg = generateOrderMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    handleCopy();
    window.open(SHOWROOM_INFO.telegram, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base">سفارش ابعاد اختصاصی کابین روشویی</h2>
              <p className="text-[11px] text-slate-400">تولید مستقیم در کارگاه تاتار (کابین روز)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSendTelegram} className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          <div className="bg-amber-50 border border-amber-200/80 p-3.5 rounded-2xl text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>امکان ساخت دقیق مطابق با اندازه سرویس بهداشتی شما:</span>
            </div>
            <p className="text-amber-800/90 leading-relaxed text-[11px]">
              به دلیل تولید مستقیم و بدون واسطه در کارگاه کابین روز، شما می‌توانید بدون محدودیت، طول، عمق، رنگ و نوع آینه را مطابق سلیقه یا نقشه معماری خود سفارش دهید.
            </p>
          </div>

          {/* Sizing inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                طول (عرض) کابین روشویی (سانتی‌متر):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="40"
                  max="200"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none font-bold"
                  required
                />
                <span className="text-slate-500 text-xs shrink-0 font-medium">cm</span>
              </div>
              <div className="flex gap-1.5 mt-2 flex-wrap text-[11px]">
                {['55', '65', '75', '85', '100'].map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => setLength(preset)}
                    className={`px-2 py-0.5 rounded-md border ${
                      length === preset
                        ? 'bg-amber-500 text-white border-amber-500 font-bold'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                عمق کابین روشویی (سانتی‌متر):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="30"
                  max="70"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none font-bold"
                  required
                />
                <span className="text-slate-500 text-xs shrink-0 font-medium">cm</span>
              </div>
              <div className="flex gap-1.5 mt-2 flex-wrap text-[11px]">
                {['38', '42', '45', '48'].map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => setDepth(preset)}
                    className={`px-2 py-0.5 rounded-md border ${
                      depth === preset
                        ? 'bg-amber-500 text-white border-amber-500 font-bold'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mount and Mirror Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                نحوه نصب کابینت:
              </label>
              <select
                value={mountType}
                onChange={(e) => setMountType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="وال‌هنگ (دیواری معلق)">وال‌هنگ (دیواری معلق مدرن)</option>
                <option value="وال‌هنگ با شاسی فلزی دوبل">وال‌هنگ با شاسی فلزی دوبل</option>
                <option value="پایه‌دار زمینی استیل">پایه‌دار زمینی استیل</option>
                <option value="دیواری همراه با بک‌پنل چوبی">دیواری همراه با بک‌پنل چوبی</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                نوع آینه مورد نظر:
              </label>
              <select
                value={mirrorType}
                onChange={(e) => setMirrorType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="آینه گرد مینیمال فریم باریک">آینه گرد مینیمال فریم باریک</option>
                <option value="آینه باکس ست با درب شیاردار">آینه باکس ست با درب شیاردار</option>
                <option value="آینه باکس سه طبقه شلف‌دار ضدآب">آینه باکس سه طبقه شلف‌دار ضدآب</option>
                <option value="آینه مستطیل فریم لس">آینه مستطیل فریم لس</option>
                <option value="بدون آینه (فقط کابینت روشویی)">بدون آینه (فقط کابینت روشویی)</option>
              </select>
            </div>
          </div>

          {/* Color Finish & Basin Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                پوشش رنگ و متریال:
              </label>
              <select
                value={colorFinish}
                onChange={(e) => setColorFinish(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="طرح چوب بلوط شیاردار طبیعی">طرح چوب بلوط شیاردار طبیعی</option>
                <option value="مشکی مات سوپر پلی‌اورتان ضدخش">مشکی مات سوپر پلی‌اورتان ضدخش</option>
                <option value="سفید مات ابریشمی با دستگیره چوبی">سفید مات ابریشمی با دستگیره چوبی</option>
                <option value="طوسی فیلی مات با زهوار یا شیار">طوسی فیلی مات با زهوار یا شیار</option>
                <option value="سفید صدفی با زهوار طلایی PVD">سفید صدفی با زهوار طلایی PVD</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                نوع کاسه روشویی:
              </label>
              <select
                value={basinType}
                onChange={(e) => setBasinType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="کاسه سرامیک بیضی روکار">کاسه سرامیک بیضی روکار</option>
                <option value="کاسه سرامیک مشکی مات">کاسه سرامیک مشکی مات</option>
                <option value="کاسه سرامیک مستطیل روکار کالیبره">کاسه سرامیک مستطیل روکار کالیبره</option>
                <option value="روشویی سرامیکی یکپارچه لبه‌دار">روشویی سرامیکی یکپارچه لبه‌دار</option>
                <option value="بدون کاسه (کاسه را جداگانه دارم)">بدون کاسه (کاسه را جداگانه دارم)</option>
              </select>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                نام و نام خانوادگی متقاضی:
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="مثلاً مهندس حسینی / خریدار محترم"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                شماره تماس شما (جهت هماهنگی):
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="۰۹۱۲..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1 text-xs">
              توضیحات و نکات خاص (اختیاری):
            </label>
            <textarea
              rows={2}
              value={extraNotes}
              onChange={(e) => setExtraNotes(e.target.value)}
              placeholder="مثلاً جای لوله فاضلاب سمت راست است، شیرآلات توکار در نظر گرفته شده..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:border-amber-500 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>پاسخگویی سریع: {SHOWROOM_INFO.phone1} (تاتار)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'متن کپی شد' : 'کپی مشخصات'}</span>
              </button>

              <a
                href={SHOWROOM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCopy}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>دایرکت اینستاگرام</span>
              </a>

              <button
                type="submit"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-900/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>ارسال ابعاد به تلگرام کارگاه</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
