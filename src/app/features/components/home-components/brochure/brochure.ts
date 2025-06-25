import { CommonModule } from '@angular/common';
import { Component, type AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ElementRef, ViewChild } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideView } from '@ng-icons/lucide';


@Component({
  selector: 'app-brochure',
  imports: [CommonModule,TranslateModule,NgParticlesModule,NgIconsModule],
  templateUrl: './brochure.html',
  styleUrl: './brochure.css',
  viewProviders:[provideIcons({lucideView})]
})
export class Brochure implements AfterViewInit{
  showPdf: boolean = false;
  @ViewChild('modal') modalRef!: ElementRef;
  @ViewChild('quoteBox', { static: false }) quoteBox!: ElementRef;

  closePdfPreview(event: MouseEvent): void {
    this.showPdf = false;
  }

  ngAfterViewInit() {
  if (this.showPdf && this.modalRef) {
    gsap.from(this.modalRef.nativeElement, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  }

  if (this.quoteBox) {
    // Scroll-triggered fade-in animation
    gsap.from(this.quoteBox.nativeElement, {
      scrollTrigger: {
        trigger: this.quoteBox.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power3.out',
    });

    // Continuous floating animation (up and down)
    gsap.to(this.quoteBox.nativeElement, {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }
}



 
}
