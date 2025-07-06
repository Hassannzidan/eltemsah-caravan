import {
  Component,
  ElementRef,
  ViewChildren,
  AfterViewInit,
  QueryList,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import {
  lucideCar,
  lucideClock,
  lucideDollarSign,
  lucidePalette,
  lucidePhone,
  lucideSheet,
  lucideShield,
} from '@ng-icons/lucide';

interface Reason {
  number: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  delay: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule, TranslateModule, NgIconsModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
  viewProviders: [
    provideIcons({
      lucideClock,
      lucideShield,
      lucidePalette,
      lucideCar,
      lucideDollarSign,
    }),
  ],
})
export class WhyChooseUs implements AfterViewInit {
  @ViewChildren('item') items!: QueryList<ElementRef<HTMLDivElement>>;
  visibleItems = signal<number[]>([]);

  // reasons: Reason[] = [
  //   {
  //     number: '01',
  //     icon: 'lucide-clock',
  //     title: 'More Than 60 Years of Experience',
  //     description:
  //       'This wealth of experience positions us as a reliable and knowledgeable partner for our clients',
  //     gradient: 'from-brand-500 to-brand-600',
  //     delay: '0ms',
  //   },
  //   {
  //     number: '02',
  //     icon: 'lucide-shield',
  //     title: 'Quality',
  //     description:
  //       'Every product manufactured by El-Temsah undergoes stringent quality control measures to ensure durability, reliability, and safety.',
  //     gradient: 'from-blue-500 to-blue-600',
  //     delay: '100ms',
  //   },
  //   {
  //     number: '03',
  //     icon: 'lucide-palette',
  //     title: 'Designs',
  //     description:
  //       'El-Temsah takes pride in creating aesthetically pleasing and functional designs that cater to the evolving needs of our clients.',
  //     gradient: 'from-green-500 to-green-600',
  //     delay: '200ms',
  //   },
  //   {
  //     number: '04',
  //     icon: 'lucide-headphones',
  //     title: 'Aftersale Services',
  //     description:
  //       'Our relationship with clients extends beyond the point of sale...',
  //     gradient: 'from-purple-500 to-purple-600',
  //     delay: '300ms',
  //   },
  //   {
  //     number: '05',
  //     icon: 'lucide-dollar-sign',
  //     title: 'Affordable Prices',
  //     description:
  //       'El-Temsah believes in offering competitive and reasonable prices without compromising on quality.',
  //     gradient: 'from-orange-500 to-orange-600',
  //     delay: '400ms',
  //   },
  // ];

  reasons = [
    {
      number: '01',
      icon: 'lucideClock',
      gradient: 'from-red-700 to-red-800',
      delay: '0ms',
    },
    {
      number: '02',
      icon: 'lucideShield',
      gradient: 'from-red-600 to-red-700',
      delay: '100ms',
    },
    {
      number: '03',
      icon: 'lucidePalette',
      gradient: 'from-red-500 to-red-600',
      delay: '200ms',
    },
    {
      number: '04',
      icon: 'lucideCar',
      gradient: 'from-red-400 to-red-500',
      delay: '300ms',
    },
    {
      number: '05',
      icon: 'lucideDollarSign',
      gradient: 'from-red-300 to-red-400',
      delay: '400ms',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            this.visibleItems.update((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px 0px' }
    );

    this.items.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }
}
