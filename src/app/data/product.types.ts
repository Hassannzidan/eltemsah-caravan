export interface ProductSection {
  id: string;
  name: string;
  isVisible: boolean;
  order: number;
}

export interface ProductFeature {
  id: string;
  sectionId: string;
  content: string;
  isVisible: boolean;
  order: number;
}

export interface ProductSpecificationCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  specifications: { id: string; key: string; value: string; isVisible: boolean }[];
  isVisible: boolean;
}

export interface CustomizationCategory {
  id: string;
  category: string;
  options: { id: string; option: string; isVisible: boolean }[];
  isVisible: boolean;
}

export interface ProductData {
  id: number;
  sections: ProductSection[];
  benefits: ProductFeature[];
  features: ProductFeature[];
  specifications: ProductSpecificationCategory[];
  customizations: CustomizationCategory[];
  leadTime: {
    production: string;
    delivery: string;
    customization?: string;
  };
  availability: string;
  orderProcess: { id: string; step: string; isVisible: boolean }[];
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  category: string;
  subcategory?: string;
  status?: 'active' | 'inactive';
  tags: string[];
  productDetails?: ProductData;
}

