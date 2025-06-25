import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
  type WritableSignal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
  selector: 'app-trusted-sponsors',
  imports: [CommonModule, TranslateModule],
  templateUrl: './trusted-sponsors.html',
  styleUrl: './trusted-sponsors.css',
})
export class TrustedSponsors implements AfterViewInit, OnDestroy {
  isVisible = false;
  private elRef = inject(ElementRef);
  clients = [
    {
      name: 'Fine',
      logo: 'assets/logos/fine-logo.png',
    },
    {
      name: 'Arabiataa',
      logo: 'assets/logos/arabiataa.jpg',
    },
    {
      name: 'Cook Door',
      logo: 'assets/logos/cookDoor.png',
    },
    {
      name: 'Barber',
      logo: 'assets/logos/Barber.png',
    },
    {
      name: 'Arbys',
      logo: 'assets/logos/Arbys.png',
    },
    {
      name: 'ElRahmane',
      logo: 'assets/logos/elrahmane.png',
    },
    {
      name: 'Fteera',
      logo: 'assets/logos/fteraa.png',
    },
    {
      name: 'Taabee',
      logo: 'assets/logos/taabeeBefore.png',
    },
    {
      name: 'BRGR',
      logo: 'assets/logos/BRGR.jpg',
    },

    {
      name: 'skrimpShack',
      logo: 'assets/logos/skrimpShack.png',
    },
    {
      name: 'Candos',
      logo: 'assets/logos/candos.jpg',
    },
  ];
  duplicatedClients = [...this.clients, ...this.clients];

  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;
  @ViewChild('track') track!: ElementRef;
  @ViewChild('carouselWrapper') wrapper!: ElementRef;

  private startCounting() {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.counts.set({
        partners: Math.floor(this.targets.partners * easeOut),
        countries: Math.floor(this.targets.countries * easeOut),
        satisfaction: Math.min(
          this.targets.satisfaction,
          +(this.targets.satisfaction * easeOut).toFixed(1)
        ),
        support: Math.floor(this.targets.support * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        this.counts.set(this.targets);
      }
    }, stepTime);
  }
  private targets = {
    partners: 500,
    countries: 50,
    satisfaction: 99.9,
    support: 24,
  };

  private tween!: gsap.core.Tween;
  private scrollSpeed = 0.4;
  private isHovered = false;
  private loopTimeline!: gsap.core.Timeline;

  // Signals for animated values
  counts: WritableSignal<{
    partners: number;
    countries: number;
    satisfaction: number;
    support: number;
  }> = signal({
    partners: 0,
    countries: 0,
    satisfaction: 0,
    support: 0,
  });

  // get duplicatedClients() {
  //   return [...this.clients, ...this.clients];
  // }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.isVisible) {
          this.isVisible = true;
          this.startCounting();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.statsSection.nativeElement);

    this.startScroll();
    // Pause on hover
    this.wrapper.nativeElement.addEventListener('mouseenter', () => {
      this.loopTimeline.pause();
    });
    this.wrapper.nativeElement.addEventListener('mouseleave', () => {
      this.loopTimeline.play();
    });
    // Speed up on scroll down
    window.addEventListener('scroll', this.handleScroll);
  }
  ngOnDestroy() {
    this.tween?.kill();
    window.removeEventListener('scroll', this.handleScroll);
  }

  startScroll() {
    const trackEl = this.track.nativeElement;

    // احسبي العرض الحقيقي لواحدة من النصين
    const singleLoopWidth = trackEl.scrollWidth / 2;
    // Reset position to 0
    gsap.set(trackEl, { x: 0 });
    this.loopTimeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none' },
    });

    this.loopTimeline.to(trackEl, {
      x: -singleLoopWidth,
      duration: 30 / this.scrollSpeed,
      onComplete: () => {
        // Reset X back to 0 without flicker
        gsap.set(trackEl, { x: 0 });
      },
    });
  }

  handleScroll = () => {
    const factor = Math.min(window.scrollY / 100 + 1, 3);
    this.loopTimeline.timeScale(factor);
  };

  trackByIndex(index: number) {
    return index;
  }
}
