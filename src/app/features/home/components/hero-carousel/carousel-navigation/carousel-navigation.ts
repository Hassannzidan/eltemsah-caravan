import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

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

  // Touch event properties for swipe detection
  private touchStartX = 0;
  private touchEndX = 0;

  onPrevClick() {
    if (this.canGoPrev) this.prevClick.emit();
  }

  onNextClick() {
    if (this.canGoNext) this.nextClick.emit();
  }

  // ⌨️ Keyboard arrow navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.onPrevClick();
    } else if (event.key === 'ArrowRight') {
      this.onNextClick();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipeGesture();
  }

  private handleSwipeGesture() {
    const swipeThreshold = 50; // pixels to qualify as swipe

    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Swiped right
        this.onPrevClick();
      } else {
        // Swiped left
        this.onNextClick();
      }
    }
  }
}
