import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-product-benefits',
  imports: [CommonModule,NgIconsModule],
  templateUrl: './product-benefits.html',
  styleUrl: './product-benefits.css',
  viewProviders: provideIcons({lucideStar})

})
export class ProductBenefits {
    @Input() benefits: string[] = [];

}
