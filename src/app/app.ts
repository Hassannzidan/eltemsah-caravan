import { Component, inject, type OnInit } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Header } from './features/layout/header/header/header';
import { Footer } from './features/layout/footer/footer/footer';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language/language.service';
import { ChatBot } from './features/chat-bot/chat-bot';
import { filter } from 'rxjs';
import { LoaderService } from './services/spinner/loader.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    CommonModule,
    MatSnackBarModule,
    TranslateModule,
    ChatBot,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  // protected title = 'eltemsah-caravan';

  showLayout = true;
  private loader = inject(LoaderService);

  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.subscribe(() => {
      this.showLayout = !this.router.url.includes('/login');
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loader.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loader.hide();
      }
    });
  }

  ngOnInit() {
    const currentLang = this.languageService.getCurrentLanguage();
    // اضبط الاتجاه
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // أضف كلاس للغة على body للتحكم في الخط
    const body = document.body;
    body.classList.remove('font-arabic', 'font-english');
    body.classList.add(currentLang === 'ar' ? 'font-arabic' : 'font-english');

    // Scroll to top عند التوجيه
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}
