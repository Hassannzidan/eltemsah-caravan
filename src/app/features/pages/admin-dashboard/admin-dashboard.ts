import {
  Component,
  signal,
  computed,
  type OnInit,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideIcons, NgIconsModule } from '@ng-icons/core';
import {
  lucideLogOut,
  lucidePlus,
  lucideSettings,
  lucideSquarePen,
  lucideTrash2,
} from '@ng-icons/lucide';
import { SearchFilterBar } from '../../components/products-components/search-filter-bar/search-filter-bar';
import { RouterModule, Router } from '@angular/router';
import { AddProductDialog } from '../../components/admin-components/add-product-dialog/add-product-dialog';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../data/product.types';
import { AuthService } from '../../../services/auth/auth.service';

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
    lucidePlus,
    lucideLogOut,
  }),
})
export class AdminDashboard {
  // Icons
  lucideSettings = 'lucideSettings';
  lucidePlus = 'lucidePlus';

  // Filters
  searchTerm = signal('');
  selectedCategory = signal('all');
  statusFilter = signal('all');
  viewMode = signal<'grid' | 'list'>('grid');

  // Dialogs and Editing
  editingProduct = signal<Product | null>(null);
  isFormOpen = signal(false);

  // Categories
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

  // Shared Signal from Service
  get products() {
    return this.productService.products;
  }

  dialogOpen = false;
  productTags: string[] = ['electronics', 'gadgets'];

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {
    this.productService.loadProductsFromBackend();
  }

  filteredProducts = computed(() => {
    const search = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    const status = this.statusFilter();
    const allProducts = this.productService.products();

    return allProducts.filter((product) => {
      const matchesSearch =
        (product.name?.toLowerCase().includes(search) ?? false) ||
        (product.description?.toLowerCase().includes(search) ?? false) ||
        (product.tags?.some((tag) => tag?.toLowerCase().includes(search)) ??
          false);

      const matchesCategory =
        category === 'all' || product.category === category;
      const matchesStatus = status === 'all' || product.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  });

  // ✅ حذف المنتج
  deleteProduct(productId: string) {
    if (!productId) {
      console.error('❌ Product ID is undefined!');
      return;
    }
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        // ممكن تضيف toastr أو snackBar هنا
        console.log('Product deleted successfully');
      },
      error: (err) => {
        console.error('Delete failed', err);
      },
    });
  }

  // ✅ تعديل حالة المنتج
  toggleStatus(productId: string) {
    console.log('Sending toggle for product ID:', productId); // 👈
    this.productService.toggleProductStatus(productId).subscribe({
      next: () => {
        console.log('Status toggled successfully');
      },
      error: (err) => {
        console.error('Status toggle failed', err);
      },
    });
  }

  // ✅ فتح نموذج الإضافة
  openAddForm() {
    this.editingProduct.set(null);
    this.isFormOpen.set(true);
  }

  // ✅ فتح نموذج التعديل
  openEditForm(product: Product) {
    this.editingProduct.set(product);
    this.isFormOpen.set(true);
  }

  addCreatedProduct(product: Product) {
    this.productService.updateLocalProduct(product);
    this.editingProduct.set(null);
    this.isFormOpen.set(false);
  }

  logout() {
    this.authService.logout();          // يحدث signal ويشيل التوكن
    this.router.navigate(['/login']);   // يرجع المستخدم لصفحة تسجيل الدخول
  }
}
