import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroQuestionMarkCircle } from '@ng-icons/heroicons/outline';



interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule,NgIcon],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css',
  viewProviders:[provideIcons({
    heroQuestionMarkCircle
  })]
})
export class FaqSection {

  faqs: FaqItem[] = [
    {
      question: 'What type of caravan should I buy?',
      answer: 'The best choice depends on your budget, travel style, and needs. Consider size, facilities, and whether to buy new or used.',
      isOpen: false,
    },
    {
      question: 'Do I need a special license to tow a caravan?',
      answer: 'In most cases, a standard driving license is sufficient, but heavier caravans may require additional certification.',
      isOpen: false,
    },
    {
      question: 'How do I maintain my caravan?',
      answer: 'Regular maintenance includes checking the engine, battery, tyres, brakes, and water/gas systems. A yearly habitation check is recommended.',
      isOpen: false,
    },
    {
      question: 'Where can I park my caravan overnight?',
      answer: 'Options include campsites, wild camping (where permitted), and designated stopovers. Always check local regulations.',
      isOpen: false,
    },
    {
      question: 'What’s the difference between a campervan and a motorhome?',
      answer: 'Campervans are smaller and often van conversions, while motorhomes are larger with separate living, kitchen, and sleeping areas.',
      isOpen: false,
    },
    {
      question: 'Do I need insurance for my caravan?',
      answer: 'Yes, insurance is essential to cover accidental damage, theft, breakdowns, and personal belongings.',
      isOpen: false,
    },
    {
      question: 'How can I improve my caravan’s fuel efficiency?',
      answer: 'Maintain a steady speed, keep tyres properly inflated, travel light, and use a windscreen cover when parked.',
      isOpen: false,
    },
    {
      question: 'Are there weight limits for towing a caravan?',
      answer: 'Yes, your car and caravan’s combined weight must not exceed your vehicle’s Gross Train Weight (GTW).',
      isOpen: false,
    },
    {
      question: 'What’s the best way to keep caravan tyres in good condition?',
      answer: 'Replace tyres every 5-7 years, check for wear, and store them properly when not in use.',
      isOpen: false,
    },
    {
      question: 'Can I sleep in a moving caravan?',
      answer: 'No, it’s illegal for passengers to sleep in a moving caravan. Seatbelts must be worn while in motion.',
      isOpen: false,
    },
  ];

  toggleAnswer(item: FaqItem): void {
    this.faqs.forEach((faq) => {
      if (faq !== item && faq.isOpen) {
        faq.isOpen = false;
      }
    });
    item.isOpen = !item.isOpen;
  }
}
