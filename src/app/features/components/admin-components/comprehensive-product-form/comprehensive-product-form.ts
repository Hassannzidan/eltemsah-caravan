import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { BasicProductForm } from './forms/basic-product-form/basic-product-form';
import { ProductTagsManager } from './forms/product-tags-manager/product-tags-manager';
import { LeadTimeForm } from './forms/lead-time-form/lead-time-form';
import { ProductDetailsForm } from './forms/product-details-form/product-details-form';
import { ProductService } from '../../../../services/product/product.service';
import { Router } from '@angular/router';
import type { Product, ProductData } from '../../../../data/product.types';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule,  MatSnackBar } from '@angular/material/snack-bar';
import { ProductImageUpload } from './forms/product-image-upload/product-image-upload';

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
  imports: [
    CommonModule,
    FormsModule,
    BasicProductForm,
    ProductImageUpload,
    ProductTagsManager,
    ProductDetailsForm,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './comprehensive-product-form.html',
  styleUrl: './comprehensive-product-form.css',
  viewProviders: [
    provideIcons({
      lucideEye,
      lucideEyeOff,
    }),
  ],
})
export class ComprehensiveProductForm {
  [x: string]: any;
  isLoading = false;

  @Input() product: Product | null = null;
  @Input() categories: string[] = [];
  @Output() cancel = new EventEmitter<void>();
  @Output() saveSuccess = new EventEmitter<Product>();

  
  productDetails = signal<ProductData>(this.getDefaultProductDetails());
  productImages: File[] = [];
  activeTab = signal<'basic' | 'details'>('basic');

  subcategories: Record<string, string[]> = {
    'Multi-purpose Caravans': ['Travel', 'Office', 'Workshop'],
    'Food Trucks': ['Gourmet', 'Street Food', 'Ice Cream'],
    'Kiosks and Booths': ['Retail', 'Information', 'Security'],
    'Container Modifications': ['Office', 'Storage', 'Workshop'],
    Trailers: ['Cargo', 'Car Carrier', 'Equipment'],
    'Mobile Food Outlets': ['Coffee', 'Juice', 'Snacks'],
    'Custom Utility Vehicles': ['Maintenance', 'Medical', 'Emergency'],
    'Bicycles and Tricycles': ['Cargo', 'Vending', 'Delivery'],
    'Vehicle Customization': ['Interior', 'Exterior', 'Branding'],
    'General Steel Structure Fabrication': [
      'Industrial',
      'Commercial',
      'Components',
    ],
  };

  ngOnInit() {
    if (this.product) {
      this.formData.set({
        name: this.product.name,
        description: this.product.description,
        image: this.product.images[0] ?? '',
        category: this.product.category,
        subcategory: this.product.subcategory ?? '',
        status: this.product.status ?? 'active',
        tags: this.product.tags,
      });
      this.productDetails.set(
        this.product.productDetails ?? this.getDefaultProductDetails()
      );
    }
  }

  constructor(
    private productService: ProductService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  formData = signal({
    name: '',
    description: '',
    image: '',
    category: '',
    subcategory: '',
    status: 'active' as 'active' | 'inactive',
    tags: [] as string[],
  });

  get availableSubcategories(): string[] {
    return this.formData().category
      ? this.subcategories[this.formData().category] || []
      : [];
  }


//   handleSubmit() {
//   this.isLoading = true;

//   const formData = new FormData();
//   formData.append('name', this.formData().name);
//   formData.append('description', this.formData().description);
//   formData.append('category', this.formData().category);
//   formData.append('subcategory', this.formData().subcategory);
//   formData.append('status', this.formData().status);
//   formData.append('tags', JSON.stringify(this.formData().tags));
//   formData.append('productDetails', JSON.stringify(this.productDetails()));

//   this.productImages.forEach((file, index) => {
//     formData.append('images', file); 
//     });


//   this.productService.createProduct(formData).subscribe({
//     next: (response) => {
//       this.snackBar.open('Product created successfully!', 'Close', {
//         duration: 3000,
//         horizontalPosition: 'right',
//         verticalPosition: 'top',
//         panelClass: ['snackbar-success'],
//       });
//       this.isLoading = false;
//       const createdProduct = response; 
//       console.log(response);
//       this.saveSuccess.emit(createdProduct);

//       // this['saveSuccess'].emit();
//     },
//     error: (err) => {
//       this.isLoading = false;
//       console.error('Create failed', err);
//     },
//   });
// }
  handleSubmit() {
    this.isLoading = true;

    const formData = new FormData();
    formData.append('name', this.formData().name);
    formData.append('description', this.formData().description);
    formData.append('category', this.formData().category);
    formData.append('subcategory', this.formData().subcategory);
    formData.append('status', this.formData().status);
    formData.append('tags', JSON.stringify(this.formData().tags));
    formData.append('productDetails', JSON.stringify(this.productDetails()));

    this.productImages.forEach((file) => {
      formData.append('images', file);
    });

    // ✅ لو في منتج موجود، نعمل Update
    const request$ = this.product?._id
      ? this.productService.updateProduct(this.product._id, formData)
      : this.productService.createProduct(formData);

    request$.subscribe({
      next: (response) => {
        this.snackBar.open(
          this.product ? 'Product updated successfully!' : 'Product created successfully!',
          'Close',
          { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['snackbar-success'] }
        );
        this.isLoading = false;
        this.saveSuccess.emit(response); // ✅ يرجع للـ parent سواء كان جديد أو معدل
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Operation failed', err);
      },
    });
  }


  getDefaultProductDetails(): ProductData {
    return {
      id: 1,
      sections: [
        { id: 'benefits', name: 'Key Benefits', isVisible: true, order: 1 },
        {
          id: 'features',
          name: 'Features Included',
          isVisible: true,
          order: 2,
        },
        {
          id: 'specifications',
          name: 'Technical Specifications',
          isVisible: true,
          order: 3,
        },
        {
          id: 'customization',
          name: 'Customization Options',
          isVisible: true,
          order: 4,
        },
        {
          id: 'availability',
          name: 'Lead Times & Availability',
          isVisible: true,
          order: 5,
        },
        { id: 'inquiry', name: 'Inquiry Form', isVisible: true, order: 6 },
        { id: 'cta', name: 'Call to Action', isVisible: true, order: 7 },
        { id: 'trust', name: 'Trust Indicators', isVisible: true, order: 8 },
      ],
      benefits: [
        {
          id: 'b1',
          sectionId: 'benefits',
          content: 'Save 40% on accommodation costs during travel',
          isVisible: true,
          order: 1,
        },
        {
          id: 'b2',
          sectionId: 'benefits',
          content: 'Complete independence and freedom to explore',
          isVisible: true,
          order: 2,
        },
      ],
      features: [
        {
          id: 'f1',
          sectionId: 'features',
          content: 'Luxury interior with premium finishes',
          isVisible: true,
          order: 1,
        },
        {
          id: 'f2',
          sectionId: 'features',
          content: 'Full kitchen with modern appliances',
          isVisible: true,
          order: 2,
        },
      ],
      specifications: [],
      customizations: [],
      leadTime: {
        production: '8-12 weeks',
        delivery: '1-2 weeks (domestic)',
        customization: 'Add 2-4 weeks for custom modifications',
      },
      availability: 'Available - 3 units in production queue',
      orderProcess: [
        {
          id: 'o1',
          step: 'Submit inquiry with your requirements',
          isVisible: true,
        },
        {
          id: 'o2',
          step: 'Receive detailed quote within 24 hours',
          isVisible: true,
        },
      ],
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
