import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherArrowRight } from '@ng-icons/feather-icons';
import {
  bootstrapChevronCompactLeft,
  bootstrapChevronCompactRight,
} from '@ng-icons/bootstrap-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, NgIconsModule , TranslateModule ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  viewProviders: [
    provideIcons({
      bootstrapChevronCompactRight,
      bootstrapChevronCompactLeft,
      featherArrowRight,
    }),
  ],
})
export class Carousel {
  currentSlide = 0;
  animationFrameId: number | null = null;
  animateSlide = true;

  // for phones
  touchStartX: number = 0;
  touchEndX: number = 0;

  // for smooth intro
  isVisible = false;


  slides = [
    {
      image: '/assets/Daddys_Burger.jpg',
      title: 'carousel.slide1.title',
      description:
        'Drive your brand forward with custom-designed food trucks built to impress and perform.',
    },
    {
      image: '/assets/EL_Dorado.jpg',
      title: 'carousel.slide2.title',
      description:
        'carousel.slide2.description',
    },
    {
      image: '/assets/EL_taabee.jpg',
      title: 'carousel.slide3.title',
      description:
        'carousel.slide3.description',
    },
    {
      image: '/assets/Daddys_Burger-2.jpg',
      title: 'carousel.slide4.title',
      description:
        'carousel.slide4.description',
    },
    {
      image: '/assets/EL_Dorado-2.jpg',
      title: 'carousel.slide5.title',
      description:
        'carousel.slide5.description',
    },
    {
      image: '/assets/EL_taabee-2.jpg',
      title: 'carousel.slide6.title',
      description:
        'carousel.slide6.description',
    },
    {
      image: '/assets/tabeee.png',
      title: 'carousel.slide7.title',
      description:
        'carousel.slide7.description',
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
    window.addEventListener('keydown', this.handleKeydown);

    
  }

  startAutoSlide() {
    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;

      const delta = time - lastTime;

      if (delta >= 8000) {
        // كل 8 ثواني
        this.nextSlide();
        lastTime = time;
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  };

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
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    });
  }

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

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipeGesture();
  }

  handleSwipeGesture() {
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (swipeDistance > 50) {
      this.nextSlide(); // Swipe left
    } else if (swipeDistance < -50) {
      this.prevSlide(); // Swipe right
    }
  }
}
