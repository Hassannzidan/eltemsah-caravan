import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-navigation',
  imports: [],
  templateUrl: './carousel-navigation.html',
  styleUrl: './carousel-navigation.css',
})
export class CarouselNavigation {
  @Input() canGoPrev = false;
  @Input() canGoNext = false;

  @Output() prevClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  onPrevClick() {
    if (this.canGoPrev) this.prevClick.emit();
  }

  onNextClick() {
    if (this.canGoNext) this.nextClick.emit();
  }
}
