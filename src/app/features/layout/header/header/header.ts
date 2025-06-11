import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule,  Router } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;
  isScrolled = false;
  // isVisible = true;
  // lastScrollY = 0;

  navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  constructor(public router: Router) {}

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
}
