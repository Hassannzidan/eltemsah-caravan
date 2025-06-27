import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  computed,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-carousel-indicators',
  imports: [CommonModule],
  templateUrl: './carousel-indicators.html',
  styleUrl: './carousel-indicators.css',
})
export class CarouselIndicators {
  @Input() totalSlides = 0;
  @Input() currentSlide = 0;
  @Output() onIndicatorClick = new EventEmitter<number>();

  get totalArray(): undefined[] {
    return Array(this.totalSlides);
  }
}
