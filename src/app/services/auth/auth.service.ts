// auth.service.ts
import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  
  private loggedIn = signal(!!localStorage.getItem('token'));

  isLoggedIn = computed(() => this.loggedIn());

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('token');
  }

}
