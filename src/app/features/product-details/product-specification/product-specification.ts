import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import type { ProductSpecificationCategory } from '../../../data/product.types';

@Component({
  selector: 'app-product-specification',
  imports: [CommonModule],
  templateUrl: './product-specification.html',
  styleUrl: './product-specification.css',
})
export class ProductSpecification {
  @Input() specifications: ProductSpecificationCategory[] = [];

  isSpecsOpen = signal<boolean>(false);

  toggleSpecs() {
    this.isSpecsOpen.set(!this.isSpecsOpen());
  }
}
