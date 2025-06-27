import { Component, Input } from '@angular/core';
import { NgIf, NgClass, NgStyle, CommonModule } from '@angular/common';

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

interface AnimatedOverlayProps {
  slide: SlideData;
  isActive: boolean;
}

@Component({
  selector: 'app-animated-overlay',
  imports: [CommonModule, NgClass, NgStyle],
  templateUrl: './animated-overlay.html',
  styleUrl: './animated-overlay.css'
})
export class AnimatedOverlay {
  @Input() slide!: SlideData;
  @Input() isActive: boolean = false;

  navigateTo(url: string) {
    window.location.href = url;
  }
}
