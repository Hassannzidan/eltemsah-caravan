import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { About } from './features/pages/about/about';
import { Contact } from './features/pages/contact/contact';
import { Services } from './features/pages/products/services';
import { Login } from './features/components/auth-components/login';
import { AdminDashboard } from './features/pages/admin-dashboard/admin-dashboard';
import { ProductDetails } from './features/pages/product-details/product-details';
import { OtpComponent } from './features/components/auth-components/otp-component/otp-component';
import { authGuard } from './services/auth/auth.guard';

export const routes: Routes = [
  { path: '', component: Home , title: 'Home' }, 
  { path: 'about', component: About , title: 'About Us' },
  { path: 'services', component: Services , title: 'Our Services' },
  { path: 'contact', component: Contact  , title: 'Contact Us' },
  { path: 'login', component: Login , title: 'Login' },
  { path: 'admin', 
    component: AdminDashboard , 
    title: 'Admin Dashboard', 
    canActivate: [authGuard] 
  },
  { path: 'verify-otp', component: OtpComponent , title: 'Verification Step' },
  { path: 'product/:id', component: ProductDetails },
  {
    path: 'admin/product-details',
    component: ProductDetails,
    canActivate: [authGuard]
  }
];
