import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherArrowRight } from '@ng-icons/feather-icons';
import { bootstrapChevronCompactLeft, bootstrapChevronCompactRight } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule,NgIconsModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
    viewProviders:[provideIcons({bootstrapChevronCompactRight,bootstrapChevronCompactLeft,featherArrowRight})]

})
export class Carousel {
currentSlide = 0;
slideInterval: any;
animateSlide = true;


slides = [
  {
    image: '/assets/Daddys_Burger.jpg',
    title: 'Stand-Out Food Trucks',
    description: 'Drive your brand forward with custom-designed food trucks built to impress and perform.'
  },
  {
    image: '/assets/EL_Dorado.jpg',
    title: 'Next-Level Caravans',
    description: 'Multi-purpose caravans crafted to serve, sell, and shine — wherever you go.'
  },
  {
    image: '/assets/EL_taabee.jpg',
    title: 'Kiosks that Sell More',
    description: 'Sleek, smart kiosks that grab attention and elevate your business presence.'
  },
  {
    image: '/assets/Daddys_Burger-2.jpg',
    title: 'Containers with a Twist',
    description: 'Transform shipping containers into stylish cafés, pop-up shops, or mobile offices.'
  },
  {
    image: '/assets/EL_Dorado-2.jpg',
    title: 'Carts that Catch Eyes',
    description: 'From food stands to street carts — compact, creative, and ready to roll.'
  },
  {
    image: '/assets/EL_taabee-2.jpg',
    title: 'Steel Builds. Bold Moves.',
    description: 'From custom vehicle mods to solid steel structures — built to last, built to lead.'
  }
];



ngOnInit() {
  this.startAutoSlide();
}

ngOnDestroy() {
  clearInterval(this.slideInterval);
}

startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 8000); // كل 58ثواني
  }


goToSlide(index: number) {
  this.resetAnimation(() => {
    this.currentSlide = index;
  });
}

nextSlide() {
  this.resetAnimation(() => {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  });
}

prevSlide() {
  this.resetAnimation(() => {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  });
}

// private resetAnimation(callback: () => void) {
//   this.animateSlide = false;
//   setTimeout(() => {
//     callback();
//     this.animateSlide = true;
//   }, 10); // Small delay to re-trigger animation
// }

private resetAnimation(callback: () => void) {
  this.animateSlide = false;
  setTimeout(() => {
    callback();
    this.animateSlide = false; // تعطيل للحظة قصيرة قبل إعادة التفعيل
    setTimeout(() => {
      this.animateSlide = true;
    }, 10); // تفعيل الأنيميشن بعد تأخير بسيط
  }, 10);
}

}
