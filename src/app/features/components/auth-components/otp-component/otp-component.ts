import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-otp-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-component.html',
  styleUrl: './otp-component.css',
})
export class OtpComponent {
  otp1 = '';
  otp2 = '';
  otp3 = '';
  otp4 = '';
  email = '';
  error = '';

  constructor(private router: Router, private http: HttpClient,private authService: AuthService) {
    const nav = this.router.getCurrentNavigation();
    this.email = nav?.extras?.state?.['email'] ?? '';
  }

  verify() {
    const code = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}`;

    this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth/verify-code`, {
        code,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);

          // ✅ سجل الدخول داخليًا
          this.authService.login();

          this.router.navigate(['/admin']);
        },
        error: () => {
          this.error = 'Invalid verification code';
        },
      });
  }
}
// this.router.navigate(['/admin']);
