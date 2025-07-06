import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { ContactCards } from "./components/contact-cards/contact-cards";
import { FindUs } from "./components/find-us/find-us";


@Component({
  selector: 'app-contact',
  imports: [HeroSection, ContactCards, FindUs],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export class Contact {

}
