import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { About } from './features/pages/about/about';
import { Contact } from './features/pages/contact/contact';
import { Services } from './features/pages/services/services';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'about', component: About },
  { path: 'services', component: Services  },
  { path: 'contact', component: Contact },
];
