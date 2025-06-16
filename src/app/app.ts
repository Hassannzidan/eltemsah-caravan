import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from "./features/layout/header/header/header";
import { Footer } from "./features/layout/footer/footer/footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'eltemsah-caravan';
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showLayout = !this.router.url.includes('/login');
    });
  }

}
