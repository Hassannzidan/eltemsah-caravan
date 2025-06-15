import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import { featherHome } from '@ng-icons/feather-icons';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideTranslate } from './translate.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideIcons({ featherHome }),
    provideHttpClient(withInterceptorsFromDi()),    
    provideTranslate()    
  ]
};
