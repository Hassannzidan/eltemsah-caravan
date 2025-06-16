import { Component, computed, signal } from '@angular/core';
import { HeroSectionProducts } from "../../components/products-components/hero-section-products/hero-section-products";
import { SearchFilterBar } from "../../components/products-components/search-filter-bar/search-filter-bar";
import { ProductGrid } from "../../components/products-components/product-grid/product-grid";
import { ProductList } from "../../components/products-components/product-list/product-list";
import { services, allProducts, allCategories, type Product, type Service } from '../../../data/products.data';
import { CommonModule } from '@angular/common';
import { NoResult } from "../../components/products-components/no-result/no-result";

@Component({
  selector: 'app-services',
  imports: [SearchFilterBar, ProductGrid, ProductList, CommonModule, HeroSectionProducts, NoResult],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services { 
  // for the search filter bar
  searchTerm: string = '';
  selectedCategory: string = 'all';
  viewMode: 'grid' | 'list' = 'grid';
  // filteredProductsCount: number = 0;
  
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
  products: Product[] = allProducts;
  categoriesGrid: string[] = allCategories;
  
  get filteredProducts(): Product[] {
  return this.products.filter(product => {
    const matchesCategory =
      this.selectedCategory === 'all' ||
      product.category.toLowerCase() === this.selectedCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

  get filteredProductsCount(): number {
    return this.filteredProducts.length;
  }
}
