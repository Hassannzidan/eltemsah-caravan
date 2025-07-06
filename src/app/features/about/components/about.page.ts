import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { CompanyOverview } from "./company-overview/company-overview";
import { RequestQoute } from "../../home/components/request-qoute/request-qoute";
import { MissionVision } from "./mission-vision/mission-vision";
import { WhyChooseUs } from "./why-choose-us/why-choose-us";
import { CoreValues } from "./core-values/core-values";

@Component({
  selector: 'app-about',
  imports: [HeroSection, CompanyOverview, RequestQoute, MissionVision, WhyChooseUs, CoreValues],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class About {

}
