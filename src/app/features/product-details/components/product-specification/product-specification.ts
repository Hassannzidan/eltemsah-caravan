import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import type { ProductSpecificationCategory } from '../../../../data/product.types';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideWrench } from '@ng-icons/lucide';

@Component({
  selector: 'app-product-specification',
  imports: [CommonModule,NgIconsModule],
  templateUrl: './product-specification.html',
  styleUrl: './product-specification.css',
  viewProviders: [provideIcons({lucideWrench})],
})
export class ProductSpecification {
  @Input() specifications: ProductSpecificationCategory[] = [];

  isSpecsOpen = signal<boolean>(false);

  toggleSpecs() {
    this.isSpecsOpen.set(!this.isSpecsOpen());
  }
}
