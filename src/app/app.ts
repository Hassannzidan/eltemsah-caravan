import { Component, type OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from './features/layout/header/header/header';
import { Footer } from './features/layout/footer/footer/footer';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';
import { ChatBot } from "./features/components/chat-bot/chat-bot";
import { filter } from 'rxjs';

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
export class App implements OnInit{
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
  ngOnInit() {
    // استمع لأحداث التوجيه
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // عندما يتم التوجيه، نعيد التمرير إلى أعلى الصفحة
      window.scrollTo(0, 0);
    });
  }

}
