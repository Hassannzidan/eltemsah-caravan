import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { CarouselIndicators } from "./carousel-indicators/carousel-indicators";
import { CarouselNavigation } from "./carousel-navigation/carousel-navigation";
import { CarouselSlide } from "./carousel-slide/carousel-slide";
import { AnimatedOverlay } from "./animated-overlay/animated-overlay";



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
  imports: [CommonModule, CarouselIndicators, CarouselNavigation, CarouselSlide, AnimatedOverlay],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css',
})
export class HeroCarousel {
  slideData: SlideData[] = [
    {
      id: 1,
      image:
        // 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop',
        'assets/slides/caravan_slide_one.jpg',
      title: 'Precision Manufacturing',
      description:
        'Advanced manufacturing solutions with cutting-edge technology and uncompromising quality standards for modern industries.',
      primaryCta: { text: 'Explore Solutions', href: '/services' },
      secondaryCta: { text: 'Learn More', href: '/about' },
    },
    {
      id: 2,
      image:
        // 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop',
        'assets/slides/EL_Dorado-2.jpg',
      title: 'Smart Automation',
      description:
        'Revolutionary automated systems that enhance productivity and ensure consistent quality in every manufactured product.',
      primaryCta: { text: 'View Technology', href: '/services' },
      secondaryCta: { text: 'Contact Us', href: '/contact' },
    },
    {
      id: 3,
      image:
        // 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop',
        'assets/slides/tabeee.png',
      title: 'Custom Engineering',
      description:
        'Tailored manufacturing solutions designed to meet your specific requirements with precision engineering expertise.',
      primaryCta: { text: 'Get Quote', href: '/contact' },
      secondaryCta: { text: 'Our Process', href: '/about' },
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop',
      title: 'Quality Assurance',
      description:
        'Rigorous quality control processes ensuring every product meets the highest industry standards and specifications.',
      primaryCta: { text: 'Quality Standards', href: '/about' },
      secondaryCta: { text: 'Certifications', href: '/about' },
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop',
      title: 'Innovation Hub',
      description:
        "Pioneering next-generation manufacturing technologies that push the boundaries of what's possible in modern production.",
      primaryCta: { text: 'Innovation Lab', href: '/services' },
      secondaryCta: { text: 'Research', href: '/about' },
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop',
      title: 'Global Reach',
      description:
        'Worldwide manufacturing capabilities delivering excellence across diverse markets and industries with local expertise.',
      primaryCta: { text: 'Global Services', href: '/services' },
      secondaryCta: { text: 'Locations', href: '/contact' },
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop',
      title: 'Digital Integration',
      description:
        'Seamless integration of digital technologies and IoT solutions for smart, connected manufacturing environments.',
      primaryCta: { text: 'Digital Solutions', href: '/services' },
      secondaryCta: { text: 'Technology', href: '/about' },
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop',
      title: 'Sustainable Future',
      description:
        'Eco-friendly manufacturing processes and sustainable practices for a greener tomorrow without compromising quality.',
      primaryCta: { text: 'Sustainability', href: '/about' },
      secondaryCta: { text: 'Green Initiative', href: '/contact' },
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
