import { LoaderService } from '../../services/spinner/loader.service';
import { Component } from '@angular/core';
import { VehicleSolutions } from './components/vehicle-solutions/vehicle-solutions';
import { TrustedSponsors } from './components/trusted-sponsors/trusted-sponsors';
import { CompanyServices } from './components/company-products/company-services';
import { VideoShowcase } from './components/video-showcase/video-showcase';
import { RequestQoute } from './components/request-qoute/request-qoute';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { HeroCarousel } from './components/hero-carousel/hero-carousel';
import { Brochure } from './components/brochure/brochure';

@Component({
  selector: 'app-home',
  imports: [
    VehicleSolutions,
    TrustedSponsors,
    CompanyServices,
    VideoShowcase,
    Brochure,
    RequestQoute,
    CommonModule,
    NgIconsModule,
    HeroCarousel,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class Home {
  images: string[] = [
    '/assets/Daddys_Burger.jpg',
    '/assets/EL_Dorado.jpg',
    '/assets/EL_taabee.jpg',
    '/assets/Daddys_Burger-2.jpg',
    '/assets/EL_Dorado-2.jpg',
    '/assets/EL_taabee-2.jpg',
  ];

  services = [
    {
      id: 1,
      title: 'services.1.title',
      category: 'services.1.category',
      description: 'services.2.description',
      image:
        'https://images.unsplash.com/photo-1628132260110-223179a54477?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'services.2.title',
      category: 'services.2.category',
      description: 'services.2.description',
      image:
        'https://images.unsplash.com/photo-1570441262582-a2d4b9a916a5?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'services.3.title',
      category: 'services.3.category',
      description: 'services.3.description',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'services.4.title',
      category: 'services.4.category',
      description: 'services.4.description',
      image:
        'https://images.unsplash.com/photo-1713859272766-76751031af78?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'services.5.title',
      category: 'services.5.category',
      description: 'services.5.description',
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'services.6.title',
      category: 'services.7.category',
      description: 'services.6.description',
      image:
        'https://images.unsplash.com/photo-1672792338308-4dad83c9f6af?w=800&h=600&fit=crop',
    },
    {
      id: 7,
      title: 'services.7.title',
      category: 'services.7.category',
      description: 'services.7.description',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      title: 'services.8.title',
      category: 'services.8.category',
      description: 'services.8.description',
      image:
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      title: 'services.9.title',
      category: 'services.9.category',
      description: 'services.9.description',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    },
    {
      id: 10,
      title: 'services.10.title',
      category: 'services.10.category',
      description: 'services.10.description',
      image:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    },
  ];

  currentIndex = 0;
  private intervalId: any;
  
  constructor(private loader:LoaderService){}

  ngOnInit(): void {
    
    this.loader.show();
    this.startAutoSlide();

    setTimeout(() => {
    this.loader.hide(); 
  }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
