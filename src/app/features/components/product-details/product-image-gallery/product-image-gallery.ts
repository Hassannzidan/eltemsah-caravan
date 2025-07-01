import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  type ElementRef,
  type OnInit,
} from '@angular/core';

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
  @ViewChild('thumbnailContainer', { static: true })
  thumbnailContainer!: ElementRef;
  dir: 'ltr' | 'rtl' = 'ltr';

  scrollThumbnails(direction: 'next' | 'prev') {
    const container = this.thumbnailContainer.nativeElement as HTMLElement;
    const scrollAmount = 150; // كمية التحرك

    const increment = direction === 'next' ? scrollAmount : -scrollAmount;
    container.scrollBy({
      left: this.dir === 'rtl' ? -increment : increment,
      behavior: 'smooth',
    });
  }

  // Swipe Support for Mobile
  private touchStartX = 0;
  private touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    const delta = this.touchEndX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        this.scrollThumbnails(this.dir === 'rtl' ? 'next' : 'prev');
      } else {
        this.scrollThumbnails(this.dir === 'rtl' ? 'prev' : 'next');
      }
    }
  }

  setCurrentImageIndex(index: number): void {
    this.currentImageIndex = index;
  }

  trackByFn(index: number, image: string): string {
    return image;
  }
}
