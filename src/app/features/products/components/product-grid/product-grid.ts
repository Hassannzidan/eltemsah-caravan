import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { allCategories, allProducts, services, type Product, type Service } from '../../../../data/products.data';




@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
    @Input() products: Product[] = [];
    @Input() tags: string[] = [] ;


}
