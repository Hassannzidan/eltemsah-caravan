import { Component, signal, computed, type OnInit } from '@angular/core';
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
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../data/product.types';

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
  dialogOpen = false; 

  productTags: string[] = ['electronics', 'gadgets'];

  products = signal<Product[]>([
    {
      id: '1',
      name: 'Travel Caravan Deluxe',
      description: 'Luxury travel caravan with modern amenities',
      images:
        ['https://images.unsplash.com/photo-1563783850023-077d97825802?w=400&h=300&fit=crop'],
      category: 'Multi-purpose Caravans',
      subcategory: 'Travel',
      status: 'active',
      tags: ['luxury', 'travel', 'family'],
    },
    {
      id: '4',
      name: 'Gourmet Food Truck',
      description: 'High-end food truck with premium equipment',
      images:['https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop'],
      category: 'Food Trucks',
      subcategory: 'Gourmet',
      status: 'active',
      tags: ['food', 'business', 'mobile'],
    },
    {
      id: '7',
      name: 'Shopping Mall Kiosk',
      description: 'Premium retail kiosk for malls',
      images:
        ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'],
      category: 'Kiosks and Booths',
      subcategory: 'Retail',
      status: 'inactive',
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


  constructor(private productService: ProductService) {
  this.loadProducts(); 
  }
  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
    });
  }


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


  toggleStatus(productId: string) {
    const updated = this.products().map((p) =>
      p.id === productId.toString()
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

  deleteProduct(productId: string) {
    this.products.set(this.products().filter((p) => p.id !== productId.toString()));
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

  // saveProduct(productData: Omit<Product, 'id'>) {
  //   const editing = this.editingProduct();
  //   if (editing) {
  //     const updated = this.products().map((p) =>
  //       p.id === editing.id ? { ...productData, id: editing.id } : p
  //     );
  //     this.products.set(updated);
  //   } else {
  //     const newId = Math.max(...this.products().map((p) => p.id)) + 1;
  //     this.products.set([...this.products(), { ...productData, id: newId }]);
  //   }
  //   this.isFormOpen.set(false);
  //   this.editingProduct.set(null);
  // }

//   saveProduct(productData: Omit<Product, 'id'>) {
//   const editing = this.editingProduct();

//   if (editing) {
//     this.productService.updateProduct(editing.id.toString(), productData).subscribe(() => {
//       this.loadProducts(); // ✅ Reload from backend
//     });
//   } else {
//     this.productService.createProduct(productData).subscribe(() => {
//       this.loadProducts(); // ✅ Reload from backend
//     });
//   }

//   this.isFormOpen.set(false);
//   this.editingProduct.set(null);
// }

 saveProduct(productData: Omit<Product, 'id'>) {
  console.log('🔥 saveProduct triggered');

  console.log('💡 isFormOpen before:', this.isFormOpen());

  const editing = this.editingProduct();
  const formData = new FormData();

  Object.entries(productData).forEach(([key, value]) => {
  if (Array.isArray(value)) {
    value.forEach((v) => formData.append(`${key}[]`, String(v)));
  } else if (value instanceof File) {
    formData.append(key, value); // الصورة
  } else {
    formData.append(key, String(value)); // أي حاجة تانية
  }
});

  if (editing) {
    this.productService.updateProduct(editing.id.toString(), formData).subscribe(() => {
      this.loadProducts();
      console.log('Before closing dialog');
      this.isFormOpen.set(false);
      console.log('After closing dialog');
      this.editingProduct.set(null);
    });
  } else {
    this.productService.createProduct(formData).subscribe(() => {
      this.loadProducts();
      console.log('Before closing dialog');
      this.isFormOpen.set(false);
      console.log('After closing dialog');
      this.editingProduct.set(null);
    });
  }
  }




}
