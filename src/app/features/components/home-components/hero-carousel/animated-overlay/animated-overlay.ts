import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { Component, Input } from '@angular/core';
import { NgIf, NgClass, NgStyle, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { featherHome } from '@ng-icons/feather-icons';

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
  selector: 'app-animated-overlay',
  imports: [CommonModule, NgClass, NgStyle, TranslateModule, NgIconsModule],
  templateUrl: './animated-overlay.html',
  styleUrl: './animated-overlay.css',
  viewProviders: [
    provideIcons({
      featherHome,
    }),
  ],
})
export class AnimatedOverlay {
  @Input() slide!: SlideData;
  @Input() isActive: boolean = false;

  navigateTo(url: string) {
    window.location.href = url;
  }
}
