import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideFacebook,
  lucideInstagram,
  lucideMail,
  lucideMessageCircle,
} from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  viewProviders: [
    provideIcons({
      lucideFacebook,
      lucideInstagram,
      lucideChevronRight,
      lucideMail,
      lucideMessageCircle,
    }),
  ],
})
export class Footer {
  emailControl = new FormControl('');
  footerSectors = [
    'footer.sectors.0',
    'footer.sectors.1',
    'footer.sectors.2',
    'footer.sectors.3',
    'footer.sectors.4',
    'footer.sectors.5',
    'footer.sectors.6',
    'footer.sectors.7',
    'footer.sectors.8',
    'footer.sectors.9',
  ];

  getRoute(item: string): string {
    switch (item) {
      case 'Home':
        return '/';
      case 'About Us':
        return '/about';
      case 'Contact Us':
        return '/contact';
      case 'Our Products':
        return '/services';
      default:
        return '/';
    }
  }

  onSubmit() {
    console.log('Newsletter signup:', this.emailControl.value);
    this.emailControl.reset();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
