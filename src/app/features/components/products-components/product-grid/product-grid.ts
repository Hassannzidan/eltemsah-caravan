import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
}

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {
  @Input() products: Product[] = [];

}
