import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
   @Input() service!: {
    id: number;
    title: string;
    category: string;
    description: string;  
    image: string;
  };

  isHovered = false;

}
