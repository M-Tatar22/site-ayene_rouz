import React from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

const mediaList: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    url: '/images/behind-video.mp4',
    title: 'خط تولید و کارگاه آینه روز',
    description: 'نگاهی به حجم آماده‌سازی و کیفیت ساخت کابین‌ها و روشویی‌ها'
  },
  {
    id: 2,
    type: 'image',
    url: '/images/behind-white.jpg',
    title: 'کابین روشویی سفید شیاردار',
    description: 'ظرافت در مونتاژ و رنگ‌آمیزی یکدست با بالاترین کیفیت'
  },
  {
    id: 3,
    type: 'image',
    url: '/images/behind-gray.jpg',
    title: 'کابین روشویی مدرن طوسی',
    description: 'طراحی ترکیب طوسی و سفید مناسب دکوراسیون‌های مدرن'
  }
];

export const BehindTheScenes: React.FC = () => {
  return (
    <section id="behind-the-scenes" className="py-16 bg-gray-50 dir-rtl text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان بخش */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            گالری پشت صحنه
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:mt-4">
            تصاویر و ویدیوهای اختصاصی از کارگاه آینه روز و کیفیت محصولات
          </p>
        </div>

        {/* کارت‌های عکس و ویدیو */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaList.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-72 bg-black flex items-center justify-center overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                ) : (
                  <video 
                    src={item.url} 
                    controls 
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
