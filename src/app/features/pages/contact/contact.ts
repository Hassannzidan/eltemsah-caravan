import { Component } from '@angular/core';
import { HeroSection } from "../../components/contact-components/hero-section/hero-section";
import { ContactCards } from "../../components/contact-components/contact-cards/contact-cards";
import { FindUs } from "../../components/contact-components/find-us/find-us";
import { About } from "../about/about";
import { RequestQoute } from "../../components/home-components/request-qoute/request-qoute";
import { FaqSection } from "../../components/contact-components/faq-section/faq-section";

@Component({
  selector: 'app-contact',
  imports: [HeroSection, ContactCards, FindUs],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
