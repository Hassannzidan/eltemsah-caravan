import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language/language.service';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideAward, lucideSalad, lucideShield, lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, TranslateModule , NgIconsModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  viewProviders:[provideIcons({
    lucideStar,
    lucideShield,
    lucideAward
  })]
})
export class HeroSection implements OnInit {
  scrollY = 0;
  currentLang: 'en' | 'ar' = 'en';
  private langService = inject(LanguageService);

  ngOnInit(): void {
    this.currentLang = this.langService.getCurrentLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }
}
