import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  type OnInit,
} from '@angular/core';
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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
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
export class ComprehensiveProductForm implements OnInit {
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

  updateImages(files: File[]) {
    this.productImages = files;
  }

  get availableSubcategories(): string[] {
    return this.formData().category
      ? this.subcategories[this.formData().category] || []
      : [];
  }

  handleSubmit() {
    this.isLoading = true;

    // BiscProduct Data
    const formData = new FormData();
    formData.append('name', this.formData().name);
    formData.append('description', this.formData().description);
    formData.append('category', this.formData().category);
    formData.append('subcategory', this.formData().subcategory);
    formData.append('status', this.formData().status);
    formData.append('tags', JSON.stringify(this.formData().tags));

    // productDetails Data
    const productDetails = {
      sections: this.productDetails()['sections'],
      features: this.productDetails()['features'],
      specifications: this.productDetails()['specifications'],
    };
    formData.append('productDetails', JSON.stringify(productDetails));

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
          this.product
            ? 'Product updated successfully!'
            : 'Product created successfully!',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['snackbar-success'],
          }
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
        {
          id: 'features',
          name: 'Features Included',
          isVisible: true,
          order: 1,
        },
        {
          id: 'specifications',
          name: 'Technical Specifications',
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
}
