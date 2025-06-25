import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { LanguageService } from '../../../../services/language/language.service';
import {
  featherArrowRight,
  featherGlobe,
  featherPhone,
} from '@ng-icons/feather-icons';
import {
  lucideCaravan,
  lucideHouse,
  lucideMenu,
  lucidePhoneCall,
  lucideUsersRound,
  lucideX,
} from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIconsModule,TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  viewProviders: [
    provideIcons({
      featherGlobe,
      featherPhone,
      featherArrowRight,
      lucideMenu,
      lucideX,
      lucideHouse,
      lucideUsersRound,
      lucideCaravan,
      lucidePhoneCall,
    }),
  ],
})
export class Header {
  isScrolled = false;
  isMenuOpen = false;
  showHeader = true;

  private lastScrollTop = 0;

  currentLang: 'en' | 'ar' = 'en';
 navigation = [
  { name: 'heading.nav.home', href: '/' },
  { name: 'heading.nav.about', href: '/about' },
  { name: 'heading.nav.products', href: '/services' },
  { name: 'heading.nav.contact', href: '/contact' },
];

  constructor(private languageService: LanguageService, public router: Router) {
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;

    this.isScrolled = currentScroll > 20;

    if (currentScroll <= 0) {
      this.showHeader = true; // عند أول الصفحة خليه ظاهر
    } else if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.showHeader = false; // Scroll Down
    } else if (currentScroll < this.lastScrollTop) {
      this.showHeader = true; // Scroll Up
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.languageService.switchLanguage(this.currentLang);
  }
}
