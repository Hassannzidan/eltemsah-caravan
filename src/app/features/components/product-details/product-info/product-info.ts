import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ProductInfoProps {
  name: string;
  category: string;
  subcategory?: string;
  longDescription: string;
}

@Component({
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css'
})
export class ProductInfo {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() subcategory?: string;
  @Input() longDescription: string = '';
}
