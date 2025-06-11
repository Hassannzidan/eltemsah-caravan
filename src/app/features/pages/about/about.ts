import { Component } from '@angular/core';
import { HeroSection } from "../../components/about-components/hero-section/hero-section";
import { CompanyOverview } from "../../components/about-components/company-overview/company-overview";
import { RequestQoute } from "../../components/home-components/request-qoute/request-qoute";
import { CoreValues } from "../../components/about-components/core-values/core-values";
import { MissionVision } from "../../components/about-components/mission-vision/mission-vision";

@Component({
  selector: 'app-about',
  imports: [HeroSection, CompanyOverview, RequestQoute, MissionVision],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
