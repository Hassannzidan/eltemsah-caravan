import { Component, ElementRef, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-core-values',
  imports: [CommonModule, TranslateModule],
  templateUrl: './core-values.html',
  styleUrl: './core-values.css',
})
export class CoreValues implements OnInit{
  currentLetter = signal(-1);
  showFinalAnimation = signal(false);
  isVisible = signal(false);
  sectionRef!: ElementRef<HTMLElement>;

  temsahValues = [
    {
      letter: 'T',
      title: 'Trust & Transparency',
      description:
        'Building lasting relationships through honest communication, reliable partnerships, and unwavering integrity in every interaction with our clients and stakeholders.',
      icon: 'shield',
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      letterColor: 'text-blue-600',
    },
    {
      letter: 'E',
      title: 'Excellence in Engineering',
      description:
        'Pursuing perfection in every design, manufacturing process, and final product through cutting-edge technology and superior craftsmanship standards.',
      icon: 'star',
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      letterColor: 'text-amber-600',
    },
    {
      letter: 'M',
      title: 'Manufacturing Mastery',
      description:
        'Six decades of expertise in creating premium caravans and specialized vehicles, combining traditional craftsmanship with modern innovation.',
      icon: 'award',
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      letterColor: 'text-purple-600',
    },
    {
      letter: 'S',
      title: 'Service Superiority',
      description:
        'Delivering exceptional customer experiences through comprehensive support, personalized solutions, and dedicated after-sales service excellence.',
      icon: 'users',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      letterColor: 'text-green-600',
    },
    {
      letter: 'A',
      title: 'Adaptive Innovation',
      description:
        'Continuously evolving our designs and processes to meet changing market demands while maintaining our commitment to quality and reliability.',
      icon: 'zap',
      gradient: 'from-indigo-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      letterColor: 'text-indigo-600',
    },
    {
      letter: 'H',
      title: 'Heritage & Heart',
      description:
        'Honoring our rich legacy while infusing passion and dedication into every project, creating vehicles that carry families and dreams.',
      icon: 'heart',
      gradient: 'from-rose-500 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50',
      letterColor: 'text-rose-600',
    },
  ];

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
          this.startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const section = document.querySelector('#core-values-section');
      if (section) observer.observe(section);
    });
  }

  startAnimation() {
    this.temsahValues.forEach((_, index) => {
      setTimeout(() => this.currentLetter.set(index), index * 1000);
    });

    setTimeout(
      () => this.showFinalAnimation.set(true),
      this.temsahValues.length * 1000 + 1000
    );
  }
}
