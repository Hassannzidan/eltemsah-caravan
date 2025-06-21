import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Product } from '../../../../data/product.types';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   category: string;
//   subcategory?: string;
//   status: 'active' | 'inactive';
//   price?: number;
//   tags: string[];
// }

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  @Input() product: Product | null = null;
  @Input() categories: string[] = [];
  @Output() onSave = new EventEmitter<Omit<Product, 'id'>>();
  @Output() onCancel = new EventEmitter<void>();

  formData = {
    name: '',
    description: '',
    images: [] as string[],
    category: '',
    subcategory: '',
    status: 'active' as 'active' | 'inactive',
    tags: [] as string[]
  };

  newTag = '';
  dragActive = false;

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
      this.formData = {
        name: this.product.name,
        description: this.product.description,
        images: Array.isArray(this.product.images) ? [...this.product.images] : [],
        category: this.product.category,
        subcategory: this.product.subcategory ?? '',
        status: this.product.status ?? 'active',
        tags: [...this.product.tags]
      };
    }
  }

  handleDrag(event: DragEvent, enter: boolean) {
    event.preventDefault();
    this.dragActive = enter;
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.dragActive = false;

    const file = event.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (this.formData.images.length === 0) {
          this.formData.images.push(e.target?.result as string);
        } else {
          this.formData.images[0] = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  handleFileInput(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (this.formData.images.length === 0) {
          this.formData.images.push(e.target?.result as string);
        } else {
          this.formData.images[0] = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  addTag() {
    const tag = this.newTag.trim();
    if (tag && !this.formData.tags.includes(tag)) {
      this.formData.tags.push(tag);
      this.newTag = '';
    }
  }

  removeTag(tag: string) {
    this.formData.tags = this.formData.tags.filter(t => t !== tag);
  }

  handleSubmit() {
    this.onSave.emit(this.formData);
  }

  get availableSubcategories(): string[] {
    return this.subcategories[this.formData.category] || [];
  }
}
