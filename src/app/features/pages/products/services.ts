import { Component, computed, signal } from '@angular/core';
import { HeroSectionProducts } from "../../components/products-components/hero-section-products/hero-section-products";
import { SearchFilterBar } from "../../components/products-components/search-filter-bar/search-filter-bar";
import { ProductGrid } from "../../components/products-components/product-grid/product-grid";
import { ProductList } from "../../components/products-components/product-list/product-list";
import { services, allProducts, allCategories, Service } from '../../../data/products.data';
import { CommonModule } from '@angular/common';
import { NoResult } from "../../components/products-components/no-result/no-result";
import type { Product } from '../../../data/product.types';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-services',
  imports: [SearchFilterBar, ProductGrid, ProductList, CommonModule, HeroSectionProducts, NoResult],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services { 
  searchTerm = signal('');
  selectedCategory = signal('all');

  viewMode: 'grid' | 'list' = 'grid';
  categories = [
  'Multi-purpose caravans',
  'Food trucks',
  'Kiosks and booths',
  'Container modifications',
  'Trailers',
  'Mobile food outlets',
  'Custom utility vehicles',
  'Bicycles and tricycles for commercial use',
  'Vehicle customization',
  'General steel structure fabrication'
];
  allServices: Service[] = services;
  categoriesGrid: string[] = allCategories;
  constructor(private productService: ProductService){}

  get products() {
  return this.productService.products;
  }

  filteredProducts = computed(() => {
    return this.products().filter((p: Product) => {
      const search = this.searchTerm().toLowerCase();
      const category = this.selectedCategory().toLowerCase();
      return (
        p.status === 'active' && 
        p.name.toLowerCase().includes(search) &&
        (category === 'all' || p.category.toLowerCase() === category)
      );
    });
  });



    get filteredProductsCount(): number {
    return this.filteredProducts.length;
  }

  
  
}

