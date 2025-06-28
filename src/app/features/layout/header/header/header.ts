import { CommonModule } from '@angular/common';
import { Component, HostListener, type OnInit, ElementRef } from '@angular/core';
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
  imports: [CommonModule, RouterModule, NgIconsModule, TranslateModule],
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

  lastScrollTop = 0;
  showNavbar = true;

  // private lastScrollTop = 0;

  currentLang: 'en' | 'ar' = 'en';
  navigation = [
    { name: 'heading.nav.home', href: '/' },
    { name: 'heading.nav.about', href: '/about' },
    { name: 'heading.nav.products', href: '/services' },
    { name: 'heading.nav.contact', href: '/contact' },
  ];

  constructor(
    private languageService: LanguageService,
    public router: Router,
    private eRef: ElementRef
  ) {
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // المستخدم نازل لتحت
      this.showNavbar = false;
    } else {
      // المستخدم طالع لفوق
      this.showNavbar = true;
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


  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
