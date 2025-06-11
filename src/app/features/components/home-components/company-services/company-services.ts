import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { ServiceCard } from "./service-card/service-card";
export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-company-services',
  imports: [CommonModule, NgIconsModule, ServiceCard],
  templateUrl: './company-services.html',
  styleUrl: './company-services.css'
})
export class CompanyServices {
@Input() services: any[] = [];
  currentIndex = 0;
  isHovered = false;
  cardPerView = 1;

  ngOnInit(): void {
  this.updateCardsPerView();
  window.addEventListener('resize', this.updateCardsPerView.bind(this));
}

updateCardsPerView(): void {
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
}

ngOnDestroy(): void {
  window.removeEventListener('resize', this.updateCardsPerView.bind(this));
}

  get cardsPerView(): number {
    return 3;
  }

  get maxIndex(): number {
    return Math.max(0, Math.ceil(this.services.length / this.cardsPerView) - 1);
  }

  get pages(): number[] {
  return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
}


  handleNext() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }

  handlePrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
