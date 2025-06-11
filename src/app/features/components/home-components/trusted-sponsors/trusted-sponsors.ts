import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, signal, ViewChild, type WritableSignal } from '@angular/core';

@Component({
  selector: 'app-trusted-sponsors',
  imports: [CommonModule],
  templateUrl: './trusted-sponsors.html',
  styleUrl: './trusted-sponsors.css'
})
export class TrustedSponsors {

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
        satisfaction: Math.min(this.targets.satisfaction, +(
          this.targets.satisfaction * easeOut
        ).toFixed(1)),
        support: Math.floor(this.targets.support * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        this.counts.set(this.targets);
      }
    }, stepTime);
  }
  private elRef = inject(ElementRef);
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;
  isVisible = false;

  // Target values
  private targets = {
    partners: 500,
    countries: 50,
    satisfaction: 99.9,
    support: 24,
  };

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

   clients = [ 
    // {
    //   id: 1,
    //   name: "Daddys Burger",
    //   logo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=100&h=100&fit=crop"
    // },
    
    {
      name: "Fine",
      logo: "assets/logos/fine-logo.png"
    },
    {
      name: "Arabiataa",
      logo: "assets/logos/arabiataa.jpg"
    },
    {
      name: "Cook Door",
      logo: "assets/logos/cookDoor.png"
    },
     {
      name: "Barber",
      logo: "assets/logos/Barber.png"
    },
    {
      name: "Arbys",
      logo: "assets/logos/Arbys.png",
    },
    {
      name: "ElRahmane",
      logo: 'assets/logos/elrahmane.png',
    },
    {
      name: "Fteera",
      logo: "assets/logos/fteraa.png"
    },
    {
      name: "Taabee",
      logo: "assets/logos/taabeeBefore.png"
    },
    {
      name: "BRGR",
      logo: "assets/logos/BRGR.jpg"
    },
  
    {
      name: "skrimpShack",
      logo: "assets/logos/skrimpShack.png"
    }
   ,
    {
      name: "Candos",
      logo: "assets/logos/candos.jpg"
    }
   
  ];
   
  get duplicatedClients() {
    return [...this.clients, ...this.clients];
  }

   ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.isVisible) {
          this.isVisible = true;
          this.startCounting();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.statsSection.nativeElement);
  }

}
