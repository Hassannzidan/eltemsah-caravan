import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { Component, Input } from '@angular/core';
import { lucideEye, lucideShield } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-features',
  imports: [NgIconsModule,CommonModule],
  templateUrl: './product-features.html',
  styleUrl: './product-features.css',
  viewProviders:[provideIcons({lucideShield,lucideEye})]
})
export class ProductFeatures {
  @Input() features: string[] = [];

}
