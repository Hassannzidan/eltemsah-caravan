import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators,  FormGroup,  FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-qoute',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './request-qoute.html',
  styleUrl: './request-qoute.css'
})
export class RequestQoute {
form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      industry: ['', Validators.required],
      details: ['']
    });
  }

   onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

  get f() {
    return this.form.controls;
  }
}
