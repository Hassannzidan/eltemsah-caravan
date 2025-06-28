import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideMail, lucidePhone } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-cards',
  imports: [NgIconsModule,TranslateModule,CommonModule],
  templateUrl: './contact-cards.html',
  styleUrl: './contact-cards.css',
  viewProviders:[provideIcons({
    lucidePhone,
    lucideMail
  })]
})
export class ContactCards  {
  email:string = 'Temsah.caravan@gmail.com';

   contactCards = [
    {
      id: 'phone',
      icon: 'lucidePhone',
      titleKey: 'phone.title',
      data: '+20 110 201 2009',
      descriptionKey: 'phone.desc',
      bgColor: 'bg-sky-500 group-hover:scale-110',
      iconBgHover: 'bg-sky-500 group-hover:bg-sky-400',
      ariaLabel: 'contact.phone.aria',
    },
    {
      id: 'email',
      icon: 'lucideMail',
      titleKey: 'email.title',
      data: this.email,
      descriptionKey: 'email.desc',
      bgColor: 'bg-red-700/80 group-hover:scale-110',
      iconBgHover: 'bg-red-700 group-hover:bg-orange-500',
      ariaLabel: 'contact.email.aria',
    },
    {
      id: 'hours',
      svg: 'M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5zM12 6v6.75l4.5 2.25',
      titleKey: 'hours.title',
      dataKey: 'hours.times',
      descriptionKey: null,
      bgColor: 'bg-green-700 group-hover:scale-110',
      iconBgHover: 'bg-green-700 group-hover:bg-green-500',
      ariaLabel: 'contact.hours.aria',
    },
  ];
}
