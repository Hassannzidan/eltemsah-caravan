import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectorRef,
  type OnInit,
} from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { ServiceCard } from './service-card/service-card';
import { TranslateModule } from '@ngx-translate/core';
export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-company-services',
  imports: [CommonModule, NgIconsModule, ServiceCard, TranslateModule],
  templateUrl: './company-services.html',
  styleUrl: './company-services.css',
})
export class CompanyServices implements OnInit {
  @Input() services: any[] = [];
  currentIndex = 0;
  isHovered = false;
  cardPerView = 3;
  private resizeTimeout: any;
  arrowShake = false;
  isRTL = false;
  touchStartX = 0;
  touchEndX = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngDoCheck() {
    const dir = document.documentElement.dir;
    if (this.isRTL !== (dir === 'rtl')) {
      this.isRTL = dir === 'rtl';
      this.currentIndex = 0; // Reset to avoid misalignment
      this.cdr.detectChanges(); // Force re-render
    }
  }

  ngOnInit(): void {
    this.updateCardsPerView();
    window.addEventListener('resize', this.updateCardsPerView.bind(this));

    this.isRTL =
      document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  }

  updateCardsPerView(): void {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      const width = window.innerWidth;
      if (width >= 1280) {
        this.cardPerView = 4;
      } else if (width >= 1024) {
        this.cardPerView = 3;
      } else if (width >= 640) {
        this.cardPerView = 2;
      } else {
        this.cardPerView = 1;
      }
    }, 150);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateCardsPerView.bind(this));
  }

  get cardsPerView(): number {
    return this.cardPerView;
  }

  get maxIndex(): number {
    return Math.max(0, this.services.length - this.cardPerView);
  }

  get pages(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }

  handleNext() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.shakeArrow();
    }
  }

  handlePrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.shakeArrow();
    }
  }

  shakeArrow() {
    this.arrowShake = true;
    setTimeout(() => {
      this.arrowShake = false;
    }, 600); // خليها تكفي المدة بتاعة الأنيميشن
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  get totalPages(): number {
    return Math.ceil(this.services.length / this.cardsPerView);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    const diff = this.touchStartX - this.touchEndX;

    // الحد الأدنى للمسافة عشان نعتبرها Swipe
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe Left → Next
        this.handleNext();
      } else {
        // Swipe Right → Previous
        this.handlePrevious();
      }
    }

    // Reset
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}
