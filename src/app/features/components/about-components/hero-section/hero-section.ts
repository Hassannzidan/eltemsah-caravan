import { CommonModule } from '@angular/common';
import { Component, HostListener, type OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule,TranslateModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {
  scrollY = 0;
  isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
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
