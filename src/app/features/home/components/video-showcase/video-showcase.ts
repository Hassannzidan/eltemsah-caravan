import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, signal, ViewChild, ViewChildren, type AfterViewInit, type QueryList } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-video-showcase',
  imports: [CommonModule,TranslateModule],
  templateUrl: './video-showcase.html',
  styleUrl: './video-showcase.css'
})
export class VideoShowcase implements AfterViewInit  {
  @ViewChild('leftContent', { static: true }) leftContent!: ElementRef;
  @ViewChild('rightContent', { static: true }) rightContent!: ElementRef;
  @ViewChildren('featuresList', { read: ElementRef }) featuresList!: QueryList<ElementRef>;

  activeTooltip = signal<string | null>(null);
  isVideoPlaying = false;

  plusButtons = [
    { id: "employees", textKey: "videoShowCase.hero.tooltip.plusButtons.employees", position: { top: "20%", right: "15%" } },
    { id: "sustainable", textKey: "videoShowCase.hero.tooltip.plusButtons.sustainable", position: { bottom: "30%", right: "20%" } },
    { id: "projects", textKey: "videoShowCase.hero.tooltip.plusButtons.projects", position: { top: "40%", left: "10%" } },
    { id: "experience", textKey: "videoShowCase.hero.tooltip.plusButtons.experience", position: { bottom: "25%", left: "15%" } }
  ];

   toggleTooltip(id: string) {
    this.activeTooltip() === id
      ? this.activeTooltip.set(null)
      : this.activeTooltip.set(id);
  }

  playVideo() {
    this.isVideoPlaying = true;
  }

  closeVideo() {
    this.isVideoPlaying = false;
  }

  ngAfterViewInit(): void {
  gsap.registerPlugin(ScrollTrigger);

  requestAnimationFrame(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.leftContent.nativeElement,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    tl.from(this.leftContent.nativeElement, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    })
    .from(this.rightContent.nativeElement, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, "-=1.2"); // يدخل معاه بعد 0.3 ثانية تقريبا

    // stagger features
    gsap.from('.feature-item', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      delay: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.leftContent.nativeElement,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    ScrollTrigger.refresh();
  });
}



 @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape' && this.isVideoPlaying) {
    this.closeVideo();
  }
}


  // buttonClasses =
  //   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

}

