import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-features',
  imports: [CommonModule],
  templateUrl: './company-features.html',
  styleUrl: './company-features.css'
})
export class CompanyFeatures {
  circles = Array.from({ length: 9 });

}
