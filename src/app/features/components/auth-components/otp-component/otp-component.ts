import { CommonModule } from '@angular/common';
import  { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-otp-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-component.html',
  styleUrl: './otp-component.css'
})
export class OtpComponent {
    otp1 = '';
  otp2 = '';
  otp3 = '';
  otp4 = '';
  email = '';
  error = '';

  constructor(private router: Router, private http: HttpClient) {
    const nav = this.router.getCurrentNavigation();
    this.email = nav?.extras?.state?.['email'] ?? '';
  }

  verify() {
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;

    this.http
      .post<{ access_token: string }>('http://localhost:3000/auth/verify-otp', {
        email: this.email,
        otp,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.error = 'Invalid OTP';
        },
      });
  }

  resendOtp() {
  this.http.post('http://localhost:3000/auth/login', {
    email: this.email,
    password: 'placeholder' // أو ممكن تتعامل بطرق تانية
  }).subscribe({
    next: () => {
      alert('OTP sent again!');
    },
    error: () => {
      this.error = 'Failed to resend OTP';
    }
  });
}

}
