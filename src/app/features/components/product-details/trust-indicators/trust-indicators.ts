import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideClock, lucideShield, lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-trust-indicators',
  imports: [NgIconsModule],
  templateUrl: './trust-indicators.html',
  styleUrl: './trust-indicators.css',
  viewProviders:[provideIcons({lucideShield,lucideStar,lucideClock})]

})
export class TrustIndicators {

}
