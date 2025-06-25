import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './features/layout/header/header/header';
import { Footer } from './features/layout/footer/footer/footer';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';
import { ChatBot } from "./features/components/chat-bot/chat-bot";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    CommonModule,
    MatSnackBarModule,
    TranslateModule,
    ChatBot
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'eltemsah-caravan';

  showLayout = true;

  constructor(
    private router: Router , 
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.subscribe(() => {
      this.showLayout = !this.router.url.includes('/login');
    });
  }
}
