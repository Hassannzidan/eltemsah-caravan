import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideClock, lucideMail, lucidePhone } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-cards',
  imports: [NgIconsModule, TranslateModule, CommonModule],
  templateUrl: './contact-cards.html',
  styleUrl: './contact-cards.css',
  viewProviders: [
    provideIcons({
      lucidePhone,
      lucideMail,
      lucideClock
    }),
  ],
})
export class ContactCards {
  email: string = 'Temsah.caravan@gmail.com';

  contactCards = [
    {
      id: 'phone',
      icon: 'lucidePhone',
      titleKey: 'contactCards.contact.phone.title',
      data: '+20 110 201 2009',
      descriptionKey: 'contactCards.contact.phone.desc',
      bgColor: 'bg-sky-500 group-hover:scale-110',
      iconBgHover: 'bg-sky-500 group-hover:bg-sky-400',
      ariaLabel: 'contactCards.contact.phone.aria',
      gradient: 'bg-gradient-to-r from-red-700/80 to-red-800',
      bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
    },
    {
      id: 'email',
      icon: 'lucideMail',
      titleKey: 'contactCards.contact.email.title',
      data: this.email,
      descriptionKey: 'contactCards.contact.email.desc',
      bgColor: 'bg-red-700/80 group-hover:scale-110',
      iconBgHover: 'bg-red-700 group-hover:bg-orange-500',
      ariaLabel: 'contact.contactCards.contact.email.aria',
      gradient: 'bg-gradient-to-r from-red-700/80 to-red-800',
      bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
    },
    {
      id: 'hours',
      icon: 'lucideClock',
      titleKey: 'contactCards.contact.hours.title',
      dataKey: 'contactCards.contact.hours.times',
      descriptionKey: 'contactCards.contact.hours.times',
      bgColor: 'bg-green-700 group-hover:scale-110',
      iconBgHover: 'bg-green-700 group-hover:bg-green-500',
      ariaLabel: 'contactCards.contact.hours.aria',
      gradient: 'bg-gradient-to-r from-red-700/80 to-red-800',
      bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
      data:'contactCards.contact.hours.data'
    },
  ];
}
