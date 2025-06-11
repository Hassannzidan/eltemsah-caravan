import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { About } from './features/pages/about/about';
import { Contact } from './features/pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'about', component: About },
  // { path: 'services', component:  },
  { path: 'contact', component: Contact },
];
