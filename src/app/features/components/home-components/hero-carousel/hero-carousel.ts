import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { CarouselIndicators } from './carousel-indicators/carousel-indicators';
import { CarouselNavigation } from './carousel-navigation/carousel-navigation';
import { CarouselSlide } from './carousel-slide/carousel-slide';
import { AnimatedOverlay } from './animated-overlay/animated-overlay';
import { TranslateModule } from '@ngx-translate/core';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

@Component({
  selector: 'app-hero-carousel',
  imports: [
    CommonModule,
    CarouselIndicators,
    CarouselNavigation,
    CarouselSlide,
    TranslateModule,
  ],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css',
})
export class HeroCarousel {
  // slideData: SlideData[] = [
  //   {
  //     id: 1,
  //     image: 'assets/slides/caravan-one.png',
  //     title: 'Precision Manufacturing',
  //     description:
  //       'Advanced manufacturing solutions with cutting-edge technology and uncompromising quality standards for modern industries.',
  //     primaryCta: { text: 'Explore Solutions', href: '/services' },
  //     secondaryCta: { text: 'Learn More', href: '/about' },
  //   },
  //   {
  //     id: 2,
  //     image: 'assets/slides/caravan-five.jpg',
  //     title: 'Smart Automation',
  //     description:
  //       'Revolutionary automated systems that enhance productivity and ensure consistent quality in every manufactured product.',
  //     primaryCta: { text: 'View Technology', href: '/services' },
  //     secondaryCta: { text: 'Contact Us', href: '/contact' },
  //   },
  //   {
  //     id: 3,
  //     image: 'assets/slides/caravan-three.png',
  //     title: 'Custom Engineering',
  //     description:
  //       'Tailored manufacturing solutions designed to meet your specific requirements with precision engineering expertise.',
  //     primaryCta: { text: 'Get Quote', href: '/contact' },
  //     secondaryCta: { text: 'Our Process', href: '/about' },
  //   },
  //   {
  //     id: 4,
  //     image: 'assets/slides/caravan-eight.png',
  //     title: 'Quality Assurance',
  //     description:
  //       'Rigorous quality control processes ensuring every product meets the highest industry standards and specifications.',
  //     primaryCta: { text: 'Quality Standards', href: '/about' },
  //     secondaryCta: { text: 'Certifications', href: '/about' },
  //   },
  //   {
  //     id: 5,
  //     image: 'assets/slides/caravan-four.jpg',
  //     title: 'Innovation Hub',
  //     description:
  //       "Pioneering next-generation manufacturing technologies that push the boundaries of what's possible in modern production.",
  //     primaryCta: { text: 'Innovation Lab', href: '/services' },
  //     secondaryCta: { text: 'Research', href: '/about' },
  //   },
  //   {
  //     id: 6,
  //     image: 'assets/slides/caravan-six.jpg',
  //     title: 'Global Reach',
  //     description:
  //       'Worldwide manufacturing capabilities delivering excellence across diverse markets and industries with local expertise.',
  //     primaryCta: { text: 'Global Services', href: '/services' },
  //     secondaryCta: { text: 'Locations', href: '/contact' },
  //   },
  //   {
  //     id: 7,
  //     image: 'assets/slides/caravan-two.png',
  //     title: 'Digital Integration',
  //     description:
  //       'Seamless integration of digital technologies and IoT solutions for smart, connected manufacturing environments.',
  //     primaryCta: { text: 'Digital Solutions', href: '/services' },
  //     secondaryCta: { text: 'Technology', href: '/about' },
  //   },
  //   {
  //     id: 8,
  //     image: 'assets/slides/caravan-seven.png',
  //     title: 'Sustainable Future',
  //     description:
  //       'Eco-friendly manufacturing processes and sustainable practices for a greener tomorrow without compromising quality.',
  //     primaryCta: { text: 'Sustainability', href: '/about' },
  //     secondaryCta: { text: 'Green Initiative', href: '/contact' },
  //   },
  // ];
  slideData: SlideData[] = [
    {
      id: 1,
      image: 'assets/slides/caravan-one.png',
      title: 'slides.1.title',
      description: 'slides.1.description',
      primaryCta: { text: 'slides.1.primary', href: '/services' },
      secondaryCta: { text: 'slides.1.secondary', href: '/about' },
    },
    {
      id: 2,
      image: 'assets/slides/caravan-five.jpg',
      title: 'slides.2.title',
      description: 'slides.2.description',
      primaryCta: { text: 'slides.2.primary', href: '/contact' },
      secondaryCta: { text: 'slides.2.secondary', href: '/about' },
    },
    {
      id: 3,
      image: 'assets/slides/caravan-three.png',
      title: 'slides.3.title',
      description: 'slides.3.description',
      primaryCta: { text: 'slides.3.primary', href: '/services' },
      secondaryCta: { text: 'slides.3.secondary', href: '/contact' },
    },
    {
      id: 4,
      image: 'assets/slides/caravan-eight.png',
      title: 'slides.4.title',
      description: 'slides.4.description',
      primaryCta: { text: 'slides.4.primary', href: '/about' },
      secondaryCta: { text: 'slides.4.secondary', href: '/about' },
    },
    {
      id: 5,
      image: 'assets/slides/caravan-four.jpg',
      title: 'slides.5.title',
      description: 'slides.5.description',
      primaryCta: { text: 'slides.5.primary', href: '/services' },
      secondaryCta: { text: 'slides.5.secondary', href: '/about' },
    },
    {
      id: 6,
      image: 'assets/slides/caravan-six.jpg',
      title: 'slides.6.title',
      description: 'slides.6.description',
      primaryCta: { text: 'slides.6.primary', href: '/services' },
      secondaryCta: { text: 'slides.6.secondary', href: '/contact' },
    },
    {
      id: 7,
      image: 'assets/slides/caravan-two.png',
      title: 'slides.7.title',
      description: 'slides.7.description',
      primaryCta: { text: 'slides.7.primary', href: '/services' },
      secondaryCta: { text: 'slides.7.secondary', href: '/contact' },
    },
    {
      id: 8,
      image: 'assets/slides/caravan-seven.png',
      title: 'slides.8.title',
      description: 'slides.8.description',
      primaryCta: { text: 'slides.8.primary', href: '/about' },
      secondaryCta: { text: 'slides.8.secondary', href: '/contact' },
    },
  ];

  currentSlide = signal(0);
  isAutoPlaying = signal(true);

  private timer: any;

  constructor() {
    effect(() => {
      clearInterval(this.timer);
      if (this.isAutoPlaying()) {
        this.timer = setInterval(() => this.nextSlide(), 10000);
      }
    });
  }

  nextSlide() {
    this.currentSlide.update((i) => (i + 1) % this.slideData.length);
  }

  prevSlide() {
    this.currentSlide.update(
      (i) => (i - 1 + this.slideData.length) % this.slideData.length
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
