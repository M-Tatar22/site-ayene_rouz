import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  return (
    <div className="flex items-center gap-3 text-right">
      {/* Ornate Luxury Mirror & Vanity Emblem inspired by the logo */}
      <div
        className={`relative ${sizeClasses} rounded-2xl bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-900/15 shrink-0 flex items-center justify-center`}
      >
        <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center overflow-hidden relative">
          {/* Subtle star & circular mirror halo */}
          <div className="absolute top-1 w-2.5 h-2.5 text-amber-300 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </div>

          {/* Vanity Basin & Mirror silhouette */}
          <svg
            viewBox="0 0 40 40"
            className="w-7 h-7 text-amber-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            fill="none"
            stroke="currentColor"
          >
            {/* Circular Mirror Frame */}
            <circle cx="20" cy="18" r="11" stroke="url(#goldGrad)" strokeWidth="1.8" />
            <circle cx="20" cy="18" r="8.5" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 1.5" />
            
            {/* Vanity Table/Drawer */}
            <rect x="8" y="27" width="24" height="8" rx="1.5" fill="#0f172a" stroke="url(#goldGrad)" strokeWidth="1.5" />
            {/* Drawer Line and handle */}
            <line x1="16" y1="31" x2="24" y2="31" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Golden Basin Top */}
            <ellipse cx="20" cy="26.5" rx="5" ry="1.8" fill="url(#goldGrad)" />
            
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight ${
              size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-base'
            } ${isDark ? 'text-slate-900' : 'text-white'}`}
          >
            کابین روز
          </span>
          <span className="text-[10px] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-1.5 py-0.5 rounded shadow-xs">
            تاتار
          </span>
        </div>
        <span
          className={`text-[10.5px] font-medium leading-tight ${
            isDark ? 'text-slate-500' : 'text-slate-300'
          }`}
        >
          تولید کننده انواع آینه و کابین روشویی PVC
        </span>
      </div>
    </div>
  );
};
