import React, { useState } from 'react';
import { X, Send, Ruler, Sparkles, Check, Phone, MessageCircle } from 'lucide-react';
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
  const [mirrorType, setMirrorType] = useState('آینه هوشمند بک‌لایت لمسی');
  const [colorFinish, setColorFinish] = useState('طوسی زغالی مات');
  const [basinType, setBasinType] = useState('کاسه سرامیک پرسلان روکار');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  const generateOrderMessage = () => {
    return (
      `درود بر برادران تاتار (کابین روز)،\n` +
      `درخواست استعلام تولید سفارشی کابین روشویی با ابعاد اختصاصی دارم:\n\n` +
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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateOrderMessage();
    const url = `https://wa.me/98${SHOWROOM_INFO.whatsapp.substring(1)}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
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
        <form onSubmit={handleSendWhatsApp} className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold focus:bg-white focus:border-amber-500 outline-none"
                  placeholder="مثلاً ۷۵"
                  required
                />
                <span className="text-xs text-slate-500 shrink-0 font-medium">سانتی‌متر</span>
              </div>
              <div className="flex gap-1.5 mt-1.5 flex-wrap">
                {['۵۰', '۶۰', '۷۵', '۸۰', '۹۰', '۱۰۰', '۱۲۰'].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setLength(sz)}
                    className="text-[10px] bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded text-slate-700"
                  >
                    {sz} cm
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                عمق کابین روشویی (فاصله از دیوار):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="30"
                  max="60"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold focus:bg-white focus:border-amber-500 outline-none"
                  placeholder="مثلاً ۴۵"
                  required
                />
                <span className="text-xs text-slate-500 shrink-0 font-medium">سانتی‌متر</span>
              </div>
              <div className="flex gap-1.5 mt-1.5 flex-wrap">
                {['۳۶ (کم‌جا)', '۴۲ (استاندارد)', '۴۸ (جادار)'].map((dp) => (
                  <button
                    key={dp}
                    type="button"
                    onClick={() => setDepth(dp.split(' ')[0])}
                    className="text-[10px] bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded text-slate-700"
                  >
                    {dp}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mount and Mirror Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                نوع نصب:
              </label>
              <select
                value={mountType}
                onChange={(e) => setMountType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="وال‌هنگ (دیواری معلق)">وال‌هنگ (دیواری معلق مدرن)</option>
                <option value="پایه‌دار زمینی با پایه‌های فلزی">پایه‌دار زمینی با پایه‌های فلزی</option>
                <option value="پایه‌دار کلاسیک PVC">پایه‌دار کلاسیک PVC</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                نوع آینه:
              </label>
              <select
                value={mirrorType}
                onChange={(e) => setMirrorType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="آینه هوشمند بک‌لایت لمسی">آینه هوشمند بک‌لایت تاچ (سنسوردار)</option>
                <option value="آینه کپسولی بیضی با قاب فلزی">آینه کپسولی بیضی با قاب فلزی</option>
                <option value="آینه دایره‌ای مون‌لایت">آینه دایره‌ای مون‌لایت</option>
                <option value="آینه باکس دو درب ضدآب PVC">آینه باکس دو درب ضدآب PVC</option>
                <option value="بدون آینه (فقط کابین روشویی)">بدون آینه (فقط کابین روشویی)</option>
              </select>
            </div>
          </div>

          {/* Color & Basin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                رنگ بدنه (رنگ سوپر پلی‌اورتان):
              </label>
              <select
                value={colorFinish}
                onChange={(e) => setColorFinish(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="طوسی زغالی مات">طوسی زغالی مات</option>
                <option value="سفید صدفی براق">سفید صدفی براق</option>
                <option value="مشکی سوپرمات با لبه‌های طلایی">مشکی سوپرمات با خطوط طلایی</option>
                <option value="طرح چوب گردویی ضدآب">طرح چوب گردویی ضدآب</option>
                <option value="سبز سدری / زیتونی نئوکلاسیک">سبز سدری / زیتونی نئوکلاسیک</option>
                <option value="کرم بژ شنی">کرم بژ شنی</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1.5 text-xs">
                نوع کاسه و صفحه:
              </label>
              <select
                value={basinType}
                onChange={(e) => setBasinType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:border-amber-500 outline-none"
              >
                <option value="کاسه سرامیک پرسلان روکار">کاسه سرامیک پرسلان روکار</option>
                <option value="صفحه اسلب سرامیکی با آبریز مخفی">صفحه اسلب سرامیکی با آبریز مخفی</option>
                <option value="صفحه سنگ کورین ضدخش">صفحه سنگ کورین ضدخش</option>
                <option value="سنگ طبیعی مرمر">سنگ طبیعی مرمر</option>
                <option value="بدون کاسه (تهیه کاسه توسط خودم)">بدون کاسه (تهیه کاسه توسط خودم)</option>
              </select>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                نام و نام خانوادگی (اختیاری):
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="مثلاً مهندس رضایی"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs focus:bg-white focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-800 mb-1 text-xs">
                شماره همراه:
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="۰۹۱۲..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs focus:bg-white focus:border-amber-500 outline-none font-mono"
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

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs hover:bg-slate-50 transition-colors"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-900/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ارسال ابعاد به واتساپ کارگاه</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
