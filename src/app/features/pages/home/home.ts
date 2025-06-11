import { Component } from '@angular/core';
import { Carousel } from "../../components/home-components/carousel/carousel";
import { VehicleSolutions } from "../../components/home-components/vehicle-solutions/vehicle-solutions";
import { TrustedSponsors } from "../../components/home-components/trusted-sponsors/trusted-sponsors";
import { CompanyServices } from "../../components/home-components/company-services/company-services";
import { VideoShowcase } from "../../components/home-components/video-showcase/video-showcase";
import { Brochure } from "../../components/home-components/brochure/brochure";
import { RequestQoute } from "../../components/home-components/request-qoute/request-qoute";
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-home',
  imports: [Carousel, VehicleSolutions, TrustedSponsors, CompanyServices, VideoShowcase, Brochure, RequestQoute,CommonModule,NgIconsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
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
    title: "Multi-use Caravans",
    category: "Mobile Solutions",
    description: "Custom-built multi-purpose caravans designed for versatility and durability, perfect for various commercial and recreational applications.",
    image: "https://images.unsplash.com/photo-1628132260110-223179a54477?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Food Trucks",
    category: "Mobile Kitchens",
    description: "Professional food truck manufacturing with state-of-the-art kitchen equipment and eye-catching designs to boost your mobile business.",
    image: "https://images.unsplash.com/photo-1570441262582-a2d4b9a916a5?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Kiosks",
    category: "Retail Solutions",
    description: "Modern kiosk designs for retail, information, and service applications with weather-resistant materials and contemporary aesthetics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Container Modifications",
    category: "Industrial Solutions",
    description: "Expert container modifications for storage, offices, workshops, and specialized industrial applications with precision engineering.",
    image: "https://images.unsplash.com/photo-1713859272766-76751031af78?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Trailers",
    category: "Transport Solutions",
    description: "Heavy-duty trailer manufacturing for cargo, equipment transport, and specialized hauling needs with robust construction.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Food Stands",
    category: "Street Food",
    description: "Compact and efficient food stands designed for high-traffic areas with optimized workflow and attractive presentation.",
    image: "https://images.unsplash.com/photo-1672792338308-4dad83c9f6af?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Karts",
    category: "Mobile Retail",
    description: "Lightweight and maneuverable retail karts perfect for markets, events, and mobile selling with customizable configurations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Bikes & Tricycles",
    category: "Eco Transport",
    description: "Custom-built commercial bikes and tricycles for delivery, vending, and eco-friendly transportation solutions.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    title: "Van/Vehicle Modifications",
    category: "Fleet Solutions",
    description: "Professional vehicle modifications for commercial fleets, mobile workshops, and specialized transportation requirements.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
  },
  {
    id: 10,
    title: "General Steel Structures",
    category: "Construction",
    description: "Robust steel structure fabrication for industrial, commercial, and residential projects with precision welding and finishing.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
  }
];


  currentIndex = 0;
  private intervalId: any;
 

  ngOnInit(): void {
    this.startAutoSlide();
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
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
