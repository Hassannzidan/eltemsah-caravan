import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-gallery',
  imports: [CommonModule],
  templateUrl: './product-image-gallery.html',
  styleUrl: './product-image-gallery.css',
})
export class ProductImageGallery {
  @Input() images: string[] = [];
  @Input() productName: string = '';
  currentImageIndex: number = 0;

  setCurrentImageIndex(index: number): void {
    this.currentImageIndex = index;
  }

  trackByFn(index: number, image: string): string {
    return image;
  }
}
