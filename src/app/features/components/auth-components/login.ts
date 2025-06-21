import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, type FormBuilder, type FormGroup } from '@angular/forms';
import { RouterModule,  Router } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NgIconsModule,
    FormsModule

  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  viewProviders:[provideIcons({featherEye,featherEyeOff})]

})
export class Login {

    email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:3000/auth/login', {
  email: 'hzidan014@gmail.com',
  password: '1234567'
})
.subscribe({
  next: () => {
    this.router.navigate(['/verify-otp'], { state: { email: 'hzidan014@gmail.com' } });
  },
  error: (err) => {
    this.error = 'Login failed';
    console.log(err);
  }
});

  //   this.http.post('http://localhost:3000/auth/login', {
  //     email: this.email,
  //     password: this.password
  //   }).subscribe({
  //     next: () => {
  //       this.router.navigate(['/verify-otp'], { state: { email: this.email } });
  //     },
  //     error: () => {
  //       this.error = 'Invalid credentials';
  //     }
  //   });
  // }

}
}
