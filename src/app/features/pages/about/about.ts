import { Component } from '@angular/core';
import { HeroSection } from "../../components/about-components/hero-section/hero-section";
import { CompanyOverview } from "../../components/about-components/company-overview/company-overview";
import { RequestQoute } from "../../components/home-components/request-qoute/request-qoute";
import { MissionVision } from "../../components/about-components/mission-vision/mission-vision";
import { WhyChooseUs } from "../../components/about-components/why-choose-us/why-choose-us";
import { CoreValues } from "../../components/about-components/core-values/core-values";

@Component({
  selector: 'app-about',
  imports: [HeroSection, CompanyOverview, RequestQoute, MissionVision, WhyChooseUs, CoreValues],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
