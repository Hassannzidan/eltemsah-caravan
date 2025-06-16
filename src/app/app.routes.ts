import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { About } from './features/pages/about/about';
import { Contact } from './features/pages/contact/contact';
import { Services } from './features/pages/products/services';
import { Login } from './features/components/admin-components/auth/login';
import { Dashboard } from './features/components/admin-components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'about', component: About },
  { path: 'services', component: Services  },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login},
  { path: 'admin', component: Dashboard},
  {
    path: 'product/:id',
    loadComponent: () => import('./features/pages/product-details/product-details').then(m => m.ProductDetails)
  }
  
];
