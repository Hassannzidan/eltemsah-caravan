import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
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
