import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('app_lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  switchLanguage(lang: 'en' | 'ar') {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('app_lang', lang);

    // غير كلاس الخط على body
    const body = document.body;
    body.classList.remove('font-arabic', 'font-english');
    body.classList.add(lang === 'ar' ? 'font-arabic' : 'font-english');
  }

  getCurrentLanguage(): 'en' | 'ar' {
    return (this.translate.currentLang || 'en') as 'en' | 'ar';
  }
}
