import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedOverlay } from "../animated-overlay/animated-overlay";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

@Component({
  selector: 'app-carousel-slide',
  imports: [CommonModule, AnimatedOverlay],
  templateUrl: './carousel-slide.html',
  styleUrl: './carousel-slide.css',
})
export class CarouselSlide {
  @Input() slide!: SlideData;
  @Input() isActive: boolean = false;
  @Input() slideIndex!: number; // ✅ أضف ده


  navigateTo(url: string) {
    window.location.href = url;
  }
}
