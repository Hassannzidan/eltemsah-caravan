import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  type FormGroup,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment.prod';
import {
  lucideEye,
  lucideEyeClosed,
  lucideKeyRound,
  lucideLockKeyhole,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NgIconsModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  viewProviders: [
    provideIcons({
      featherEye,
      featherEyeOff,
      lucideLockKeyhole,
      lucideKeyRound,
      lucideEyeClosed,
      lucideEye,
    }),
  ],
})
export class Login {
  showPassword = false;
  isLoading = false;
  error = '';
  backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  
  
  // ✅ Inject dependencies
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
  
  email = 'Email: admin@company.com';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.form.invalid) return;

    this.isLoading = true;
    const { email, password } = this.form.value;

    this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .subscribe({
        next: () => {
          this.router.navigate(['/verify-otp']);
        },
        error: () => {
          this.error = 'Login failed. Check your credentials.';
          this.isLoading = false;
        },
      });
  }
}
