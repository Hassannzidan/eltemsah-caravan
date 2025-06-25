import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideFacebook, lucideInstagram } from '@ng-icons/lucide';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ReactiveFormsModule, NgIconsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  viewProviders: [provideIcons({ 
    lucideFacebook, 
    lucideInstagram,
    lucideChevronRight
  
  })],
})
export class Footer {
  emailControl = new FormControl('');

  onSubmit() {
    console.log('Newsletter signup:', this.emailControl.value);
    this.emailControl.reset();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
