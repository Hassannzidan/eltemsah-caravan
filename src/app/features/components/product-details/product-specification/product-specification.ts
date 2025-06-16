import { CommonModule } from '@angular/common';
import { Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-product-specification',
  imports: [CommonModule],
  templateUrl: './product-specification.html',
  styleUrl: './product-specification.css'
})
export class ProductSpecification {
 @Input() specifications: Record<string, string> = {};

  isSpecsOpen = signal<boolean>(false); 

  toggleSpecs() {
    this.isSpecsOpen.set(!this.isSpecsOpen());
}
}

