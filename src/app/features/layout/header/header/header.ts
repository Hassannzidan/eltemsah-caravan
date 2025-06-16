import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule,  Router } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { LanguageService } from '../../../../services/language/language.service';
import { featherArrowRight, featherGlobe, featherPhone } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  viewProviders:[provideIcons({featherGlobe,featherPhone,featherArrowRight })]
})
export class Header {
  isMenuOpen = false;
  isScrolled = false;
  // isVisible = true;
  // lastScrollY = 0;
  currentLang: 'en' | 'ar' = 'en';
  navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  constructor(
    private languageService: LanguageService,
    public router: Router
  ) {
    this.currentLang = this.languageService.getCurrentLanguage();

  }

@HostListener('window:scroll', [])
onScroll(): void {
  this.isScrolled = window.scrollY > 50;
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
