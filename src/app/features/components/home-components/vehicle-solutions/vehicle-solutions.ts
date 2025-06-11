import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-vehicle-solutions',
  imports: [CommonModule],
  templateUrl: './vehicle-solutions.html',
  styleUrl: './vehicle-solutions.css'
})
export class VehicleSolutions {
showMore = false;
  isExpanded = signal(false);
  
  toggleShowMore(): void {
      this.showMore = !this.showMore;
    }


  toggleExpanded() {
    this.isExpanded.update(value => !value);
  }
}
