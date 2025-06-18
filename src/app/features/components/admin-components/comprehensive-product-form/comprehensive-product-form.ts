import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import type { Product, ProductData } from '../../../../data/product.types';
import { BasicProductForm } from "./forms/basic-product-form/basic-product-form";
import { ProductImageUpload } from "./forms/product-image-upload/product-image-upload";
import { ProductTagsManager } from "./forms/product-tags-manager/product-tags-manager";
import { LeadTimeForm } from "./forms/lead-time-form/lead-time-form";
import { ProductDetailsForm } from "./forms/product-details-form/product-details-form";


type Category =
  | 'Multi-purpose Caravans'
  | 'Food Trucks'
  | 'Kiosks and Booths'
  | 'Container Modifications'
  | 'Trailers'
  | 'Mobile Food Outlets'
  | 'Custom Utility Vehicles'
  | 'Bicycles and Tricycles'
  | 'Vehicle Customization'
  | 'General Steel Structure Fabrication';



@Component({
  selector: 'app-comprehensive-product-form',
  imports: [CommonModule, FormsModule, BasicProductForm, ProductImageUpload, ProductTagsManager, ProductDetailsForm],
  templateUrl: './comprehensive-product-form.html',
  styleUrl: './comprehensive-product-form.css',
  viewProviders: [provideIcons({
    lucideEye,
    lucideEyeOff
  })]
})
export class ComprehensiveProductForm {
[x: string]: any;

  @Input() product: Product | null = null;
  @Input() categories: string[] = [];
  @Output() save = new EventEmitter<Omit<Product, 'id'>>();
  @Output() cancel = new EventEmitter<void>();

  formData = signal({
    name: '',
    description: '',
    image: '',
    category: '',
    subcategory: '',
    status: 'active' as 'active' | 'inactive',
    price: 0,
    tags: [] as string[]
  });

  productDetails = signal<ProductData>(this.getDefaultProductDetails());

  activeTab = signal<'basic' | 'details'>('basic');

  subcategories: Record<string, string[]> = {
    'Multi-purpose Caravans': ['Travel', 'Office', 'Workshop'],
    'Food Trucks': ['Gourmet', 'Street Food', 'Ice Cream'],
    'Kiosks and Booths': ['Retail', 'Information', 'Security'],
    'Container Modifications': ['Office', 'Storage', 'Workshop'],
    'Trailers': ['Cargo', 'Car Carrier', 'Equipment'],
    'Mobile Food Outlets': ['Coffee', 'Juice', 'Snacks'],
    'Custom Utility Vehicles': ['Maintenance', 'Medical', 'Emergency'],
    'Bicycles and Tricycles': ['Cargo', 'Vending', 'Delivery'],
    'Vehicle Customization': ['Interior', 'Exterior', 'Branding'],
    'General Steel Structure Fabrication': ['Industrial', 'Commercial', 'Components']
  };

  ngOnInit() {
    if (this.product) {
      this.formData.set({
        name: this.product.name,
        description: this.product.description,
        image: this.product.image,
        category: this.product.category,
        subcategory: this.product.subcategory ?? '',
        status: this.product.status,
        price: this.product.price ?? 0,
        tags: this.product.tags
      });
      this.productDetails.set(this.product.productDetails ?? this.getDefaultProductDetails());
    }
  }

  get availableSubcategories(): string[] {
    return this.formData().category ? this.subcategories[this.formData().category] || [] : [];
  }

  handleSubmit() {
    this.save.emit({
      ...this.formData(),
      productDetails: this.productDetails()
    });
  }

  getDefaultProductDetails(): ProductData {
    return {
      id: 1,
      sections: [
        { id: 'benefits', name: 'Key Benefits', isVisible: true, order: 1 },
        { id: 'features', name: 'Features Included', isVisible: true, order: 2 },
        { id: 'specifications', name: 'Technical Specifications', isVisible: true, order: 3 },
        { id: 'customization', name: 'Customization Options', isVisible: true, order: 4 },
        { id: 'availability', name: 'Lead Times & Availability', isVisible: true, order: 5 },
        { id: 'inquiry', name: 'Inquiry Form', isVisible: true, order: 6 },
        { id: 'cta', name: 'Call to Action', isVisible: true, order: 7 },
        { id: 'trust', name: 'Trust Indicators', isVisible: true, order: 8 }
      ],
      benefits: [
        { id: 'b1', sectionId: 'benefits', content: 'Save 40% on accommodation costs during travel', isVisible: true, order: 1 },
        { id: 'b2', sectionId: 'benefits', content: 'Complete independence and freedom to explore', isVisible: true, order: 2 }
      ],
      features: [
        { id: 'f1', sectionId: 'features', content: 'Luxury interior with premium finishes', isVisible: true, order: 1 },
        { id: 'f2', sectionId: 'features', content: 'Full kitchen with modern appliances', isVisible: true, order: 2 }
      ],
      specifications: [],
      customizations: [],
      leadTime: {
        production: '8-12 weeks',
        delivery: '1-2 weeks (domestic)',
        customization: 'Add 2-4 weeks for custom modifications'
      },
      availability: 'Available - 3 units in production queue',
      orderProcess: [
        { id: 'o1', step: 'Submit inquiry with your requirements', isVisible: true },
        { id: 'o2', step: 'Receive detailed quote within 24 hours', isVisible: true }
      ]
    };
  }

  updateFormData(partialData: Partial<ReturnType<typeof this.formData>>): void {
    this.formData.set({ ...this.formData(), ...partialData });
  }

  updateImage(image: string): void {
  this.formData.set({ ...this.formData(), image });
  }

  updateTags(tags: string[]): void {
    this.formData.set({ ...this.formData(), tags });
  }

  updateLeadTime(leadTime: any): void {
    this.productDetails.set({ ...this.productDetails(), leadTime });
  }

  updateAvailability(availability: string): void {
    this.productDetails.set({ ...this.productDetails(), availability });
  }

}
// export class ComprehensiveProductForm {

//   @Input() product: Product | null = null;
//   @Input() categories: string[] = [];
//   @Output() onSave = new EventEmitter<Omit<Product, 'id'>>();
//   @Output() onCancel = new EventEmitter<void>();

//   tabs = signal<'basic' | 'details'>('basic');

//   formData = signal({
//     name: '',
//     description: '',
//     image: '',
//     category: '',
//     subcategory: '',
//     status: 'active' as 'active' | 'inactive',
//     price: 0,
//     tags: [] as string[]
//   });

//   productDetails = signal<ProductData>(this.getDefaultProductDetails());

//   ngOnInit() {
//     if (this.product) {
//       this.formData.set({
//         name: this.product.name,
//         description: this.product.description,
//         image: this.product.image,
//         category: this.product.category,
//         subcategory: this.product.subcategory || '',
//         status: this.product.status,
//         price: this.product.price || 0,
//         tags: [...this.product.tags]
//       });

//       if (this.product.productDetails) {
//         this.productDetails.set(this.product.productDetails);
//       }
//     }
//   }

//  get availableSubcategories(): string[] {
//   const all: Record<Category, string[]> = {
//     'Multi-purpose Caravans': ['Travel', 'Office', 'Workshop'],
//     'Food Trucks': ['Gourmet', 'Street Food', 'Ice Cream'],
//     'Kiosks and Booths': ['Retail', 'Information', 'Security'],
//     'Container Modifications': ['Office', 'Storage', 'Workshop'],
//     'Trailers': ['Cargo', 'Car Carrier', 'Equipment'],
//     'Mobile Food Outlets': ['Coffee', 'Juice', 'Snacks'],
//     'Custom Utility Vehicles': ['Maintenance', 'Medical', 'Emergency'],
//     'Bicycles and Tricycles': ['Cargo', 'Vending', 'Delivery'],
//     'Vehicle Customization': ['Interior', 'Exterior', 'Branding'],
//     'General Steel Structure Fabrication': ['Industrial', 'Commercial', 'Components']
//   };

//   const category = this.formData().category as Category;
//   return all[category] || [];
// }

//   private getDefaultProductDetails(): ProductData {
//     return {
//       id: 1,
//       sections: [
//         { id: 'benefits', name: 'Key Benefits', isVisible: true, order: 1 },
//         { id: 'features', name: 'Features Included', isVisible: true, order: 2 },
//         { id: 'specifications', name: 'Technical Specifications', isVisible: true, order: 3 },
//         { id: 'customization', name: 'Customization Options', isVisible: true, order: 4 },
//         { id: 'availability', name: 'Lead Times & Availability', isVisible: true, order: 5 },
//         { id: 'inquiry', name: 'Inquiry Form', isVisible: true, order: 6 },
//         { id: 'cta', name: 'Call to Action', isVisible: true, order: 7 },
//         { id: 'trust', name: 'Trust Indicators', isVisible: true, order: 8 }
//       ],
//       benefits: [
//         { id: 'b1', sectionId: 'benefits', content: 'Save 40% on accommodation costs during travel', isVisible: true, order: 1 },
//         { id: 'b2', sectionId: 'benefits', content: 'Complete independence and freedom to explore', isVisible: true, order: 2 }
//       ],
//       features: [
//         { id: 'f1', sectionId: 'features', content: 'Luxury interior with premium finishes', isVisible: true, order: 1 },
//         { id: 'f2', sectionId: 'features', content: 'Full kitchen with modern appliances', isVisible: true, order: 2 }
//       ],
//       specifications: [],
//       customizations: [],
//       leadTime: {
//         production: '8-12 weeks',
//         delivery: '1-2 weeks (domestic)',
//         customization: 'Add 2-4 weeks for custom modifications'
//       },
//       availability: 'Available - 3 units in production queue',
//       orderProcess: [
//         { id: 'o1', step: 'Submit inquiry with your requirements', isVisible: true },
//         { id: 'o2', step: 'Receive detailed quote within 24 hours', isVisible: true }
//       ]
//     };
//   }

//   submitForm(e: Event) {
//     e.preventDefault();
//     this.onSave.emit({
//       ...this.formData(),
//       productDetails: this.productDetails()
//     });
//   }


// }