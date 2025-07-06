import { Component } from '@angular/core';
import { HeroSection } from "../../contact/components/hero-section/hero-section";
import { ContactCards } from "../../contact/components/contact-cards/contact-cards";
import { FindUs } from "../../contact/components/find-us/find-us";
import { About } from "../../about/components/about.page";
import { RequestQoute } from "../../home/components/request-qoute/request-qoute";
import { FaqSection } from "../../contact/components/faq-section/faq-section";

@Component({
  selector: 'app-contact',
  imports: [HeroSection, ContactCards, FindUs],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
