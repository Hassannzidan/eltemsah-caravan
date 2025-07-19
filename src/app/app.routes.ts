import { Routes } from '@angular/router';
import { Home } from './features/home/home.page';
import { About } from './features/about/components/about.page';
import { Contact } from './features/contact/contact.page';
import { Services } from './features/products/services.page';
import { Login } from './features/auth/components/auth-components/login';
import { ProductDetails } from './features/product-details/product-details.page';
import { OtpComponent } from './features/auth/components/auth-components/otp-component/otp-component';
import { authGuard } from './core/services/auth/auth.guard';
import { AdminDashboard } from './features/admin/admin-dashboard.page';

export const routes: Routes = [
  { path: '', component: Home , title: 'Home' }, 
  { path: 'about', component: About , title: 'About Us' },
  { path: 'services', component: Services , title: 'Our Services' },
  { path: 'contact', component: Contact  , title: 'Contact Us' },
  { path: 'login', component: Login , title: 'Login' },
  { path: 'admin', 
    component: AdminDashboard , 
    title: 'Admin Dashboard', 
    // canActivate: [authGuard] 
  },
  { path: 'verify-otp', component: OtpComponent , title: 'Verification Step' },
  { path: 'product/:id', component: ProductDetails , title: 'Product Detials'},
  {
    path: 'admin/product-details',
    component: ProductDetails,
    // canActivate: [authGuard]
  }
];
