import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductTagsManager } from '../../components/admin-components/comprehensive-product-form/forms/product-tags-manager/product-tags-manager';
import { ComprehensiveProductForm } from '../../components/admin-components/comprehensive-product-form/comprehensive-product-form';
import { provideIcons, NgIconsModule } from '@ng-icons/core';
import {
  lucidePlus,
  lucideSettings,
  lucideSquarePen,
  lucideTrash2,
} from '@ng-icons/lucide';
import { SearchFilterBar } from '../../components/products-components/search-filter-bar/search-filter-bar';
import { RouterModule } from '@angular/router';
import { AddProductDialog } from '../../components/admin-components/add-product-dialog/add-product-dialog';

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  status: 'active' | 'inactive';
  price: number;
  tags: string[];
};

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    NgIconsModule,
    SearchFilterBar,
    RouterModule,
    AddProductDialog,
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
  viewProviders: provideIcons({
    lucideTrash2,
    lucideSquarePen,
    lucideSettings,
    lucidePlus
  }),
})
export class AdminDashboard {
  lucideSettings = 'lucideSettings';
  lucidePlus = 'lucidePlus';


  productTags: string[] = ['electronics', 'gadgets'];

  products = signal<Product[]>([
    {
      id: 1,
      name: 'Travel Caravan Deluxe',
      description: 'Luxury travel caravan with modern amenities',
      image:
        'https://images.unsplash.com/photo-1563783850023-077d97825802?w=400&h=300&fit=crop',
      category: 'Multi-purpose Caravans',
      subcategory: 'Travel',
      status: 'active',
      price: 50000,
      tags: ['luxury', 'travel', 'family'],
    },
    {
      id: 4,
      name: 'Gourmet Food Truck',
      description: 'High-end food truck with premium equipment',
      image:
        'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop',
      category: 'Food Trucks',
      subcategory: 'Gourmet',
      status: 'active',
      price: 80000,
      tags: ['food', 'business', 'mobile'],
    },
    {
      id: 7,
      name: 'Shopping Mall Kiosk',
      description: 'Premium retail kiosk for malls',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      category: 'Kiosks and Booths',
      subcategory: 'Retail',
      status: 'inactive',
      price: 25000,
      tags: ['retail', 'mall', 'commercial'],
    },
  ]);

  categories = [
    'Multi-purpose Caravans',
    'Food Trucks',
    'Kiosks and Booths',
    'Container Modifications',
    'Trailers',
    'Mobile Food Outlets',
    'Custom Utility Vehicles',
    'Bicycles and Tricycles',
    'Vehicle Customization',
    'General Steel Structure Fabrication',
  ];

  searchTerm = signal('');
  selectedCategory = signal('all');
  statusFilter = signal('all');
  viewMode = signal<'grid' | 'list'>('grid');
  editingProduct = signal<Product | null>(null);
  isFormOpen = signal(false);

  filteredProducts = computed(() => {
    const search = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    const status = this.statusFilter();

    return this.products().filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.tags.some((tag) => tag.toLowerCase().includes(search));
      const matchesCategory =
        category === 'all' || product.category === category;
      const matchesStatus = status === 'all' || product.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  });

  toggleStatus(productId: number) {
    const updated = this.products().map((p) =>
      p.id === productId
        ? {
            ...p,
            status: (p.status === 'active' ? 'inactive' : 'active') as
              | 'active'
              | 'inactive',
          }
        : p
    );
    this.products.set(updated);
  }

  deleteProduct(productId: number) {
    this.products.set(this.products().filter((p) => p.id !== productId));
  }

  openAddForm() {
    console.log('Opening add form');
    this.editingProduct.set(null);
    this.isFormOpen.set(true);
  }
  

  openEditForm(product: Product) {
    this.editingProduct.set(product);
    this.isFormOpen.set(true);
  }

  saveProduct(productData: Omit<Product, 'id'>) {
    const editing = this.editingProduct();
    if (editing) {
      const updated = this.products().map((p) =>
        p.id === editing.id ? { ...productData, id: editing.id } : p
      );
      this.products.set(updated);
    } else {
      const newId = Math.max(...this.products().map((p) => p.id)) + 1;
      this.products.set([...this.products(), { ...productData, id: newId }]);
    }
    this.isFormOpen.set(false);
    this.editingProduct.set(null);
  }
}
