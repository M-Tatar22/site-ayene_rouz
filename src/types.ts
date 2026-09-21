export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  categoryId: string;
  brand: string;
  brandOrigin: string;
  priceEstimate?: string;
  priceNote: string;
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  warranty: string;
  images: string[];
  sizeCategory?: 'small' | 'medium' | 'large' | 'master' | 'custom';
  basinType?: 'ceramic' | 'integrated' | 'stone' | 'none';
  specs: {
    unitSize?: string; // عرض کابین روشویی یا قطر آینه
    dimensions?: string; // ابعاد دقیق کابینت (طول × عمق × ارتفاع)
    mirrorDimensions?: string; // ابعاد آینه یا آینه باکس
    material: string; // جنس بدنه (PVC ۱۰۰٪ ضدآب)
    finish: string; // رنگ و روکش (پلی‌اورتان مات/براق، طرح سنگ/چوب)
    basinType?: string; // نوع کاسه/صفحه
    mirrorFeature?: string; // قابلیت‌های آینه هوشمند
    hardware?: string; // جنس لولا و یراق‌آلات (استیل ۳۰۴ ضدزنگ)
    mechanism?: string; // مکانیزم کشو و درب
    installation: string; // نوع نصب (دیواری وال‌هنگ یا پایه‌دار)
  };
  features: string[];
  description: string;
  installationTip?: string;
  telegramPostUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  itemCount: number;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  note?: string;
}
