import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowLeft, Layers, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>دسته‌بندی‌های تولیدی کابین روز</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            انواع کابین روشویی ضدآب PVC و آینه‌های هوشمند
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500">
          برای مشاهده مدل‌ها، روی هر دسته کلیک فرمایید
        </p>
        <button
  onClick={() => {
    const el = document.getElementById('behind-the-scenes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
  className="px-4 py-2 rounded-full text-xs font-bold transition-all bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 shadow-sm"
>
  🎬 گالری پشت صحنه
</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative overflow-hidden rounded-2xl text-right p-3.5 transition-all duration-300 flex flex-col justify-between border ${
                isActive
                  ? 'border-amber-500 bg-amber-50/70 shadow-md ring-2 ring-amber-500/20'
                  : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-1.5 right-1.5 text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {cat.itemCount} مدل
                </span>
              </div>

              <div>
                <h3
                  className={`text-xs sm:text-sm font-bold leading-snug line-clamp-1 ${
                    isActive ? 'text-amber-800' : 'text-slate-900 group-hover:text-amber-700'
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-normal">
                  {cat.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-amber-600 font-medium">
                <span>مشاهده مدل‌ها</span>
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
