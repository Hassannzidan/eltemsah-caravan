import { CommonModule } from '@angular/common';
import { Component, HostListener, type OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {
  imageUrl = '';
  scrollY = 0;
  isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
    const isMobile = window.innerWidth < 768;
    this.imageUrl = isMobile
      ? 'https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?q=50&w=800&auto=format' // نسخة خفيفة
      : 'https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?q=80&w=2070&auto=format';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth >= 768) {
      this.scrollY = window.scrollY;
    } else {
      this.scrollY = 0; // مفيش حركة على الموبايل
    }
  }
}
