// import { Injectable, signal } from '@angular/core';
// import type { ProductData, ProductFeature, ProductSection } from '../../data/product.types';
// // import { ProductSection, ProductFeature, ProductData } from '@/types/productTypes';

// @Injectable({ providedIn: 'root' })
// export class ProductDataService {
//   private defaultSections: ProductSection[] = [
//     { id: 'features', name: 'Features Included', isVisible: true, order: 1},
//     { id: 'specifications', name: 'Technical Specifications', isVisible: true, order: 2 },
//   ];

//   private productData = signal<ProductData>({
//     id: 1,
//     sections: this.defaultSections,
//     benefits: [
//       { id: 'b1', sectionId: 'benefits', content: 'Save 40% on accommodation costs during travel', isVisible: true, order: 1 },
//       { id: 'b2', sectionId: 'benefits', content: 'Complete independence and freedom to explore', isVisible: true, order: 2 }
//     ],
//     features: [
//       { id: 'f1', sectionId: 'features', content: 'Luxury interior with premium finishes', isVisible: true, order: 1 },
//       { id: 'f2', sectionId: 'features', content: 'Full kitchen with modern appliances', isVisible: true, order: 2 }
//     ],
//     specifications: [],
//     customizations: [],
//     leadTime: {
//       production: '8-12 weeks',
//       delivery: '1-2 weeks (domestic)',
//       customization: 'Add 2-4 weeks for custom modifications'
//     },
//     availability: 'Available - 3 units in production queue',
//     orderProcess: [
//       { id: 'o1', step: 'Submit inquiry with your requirements', isVisible: true },
//       { id: 'o2', step: 'Receive detailed quote within 24 hours', isVisible: true }
//     ]
//   });

//   get data() {
//     return this.productData.asReadonly();
//   }

//   toggleSectionVisibility(sectionId: string) {
//     this.productData.update(prev => ({
//       ...prev,
//       sections: prev.sections.map(s => s.id === sectionId ? { ...s, isVisible: !s.isVisible } : s)
//     }));
//   }

//   toggleFeatureVisibility(featureId: string, type: 'benefits' | 'features') {
//     this.productData.update(prev => ({
//       ...prev,
//       [type]: prev[type].map(f => f.id === featureId ? { ...f, isVisible: !f.isVisible } : f)
//     }));
//   }

//   addFeature(type: 'benefits' | 'features', content: string) {
//     const newId = `${type[0]}${Date.now()}`;
//     const newFeature: ProductFeature = {
//       id: newId,
//       sectionId: type,
//       content,
//       isVisible: true,
//       order: this.productData()[type].length + 1
//     };

//     this.productData.update(prev => ({
//       ...prev,
//       [type]: [...prev[type], newFeature]
//     }));
//   }

//   updateFeature(featureId: string, type: 'benefits' | 'features', content: string) {
//     this.productData.update(prev => ({
//       ...prev,
//       [type]: prev[type].map(f => f.id === featureId ? { ...f, content } : f)
//     }));
//   }

//   deleteFeature(featureId: string, type: 'benefits' | 'features') {
//     this.productData.update(prev => ({
//       ...prev,
//       [type]: prev[type].filter(f => f.id !== featureId)
//     }));
//   }
// }
