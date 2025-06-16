import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherMail, featherPhone } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-product-cta',
  imports: [NgIconsModule],
  templateUrl: './product-cta.html',
  styleUrl: './product-cta.css',
  viewProviders:[provideIcons({featherPhone,featherMail})]
})
export class ProductCTA {

}
