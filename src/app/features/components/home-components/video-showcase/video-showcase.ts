import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-video-showcase',
  imports: [CommonModule],
  templateUrl: './video-showcase.html',
  styleUrl: './video-showcase.css'
})
export class VideoShowcase {
  activeTooltip = signal<string | null>(null);
  isVideoPlaying = false;


  plusButtons = [
    { id: "employees", text: "400 Employees", position: { top: "20%", right: "15%" } },
    { id: "sustainable", text: "696 Sustainable", position: { bottom: "30%", right: "20%" } },
    { id: "projects", text: "1,200+ Projects", position: { top: "40%", left: "10%" } },
    { id: "experience", text: "60+ Years Experience", position: { bottom: "25%", left: "15%" } },
  ];

features = [
  "Certified Quality Systems",
  "Guaranteed Client Satisfaction",
  "Professionally Trained Staff",
  "Accurate and Reliable Testing",
  "Precision Craftsmanship",
  "Qualified Engineering Personnel",
  "Environmentally Safe Practices",
  "Tailored Industrial Solutions"
];


   toggleTooltip(id: string) {
    this.activeTooltip() === id
      ? this.activeTooltip.set(null)
      : this.activeTooltip.set(id);
  }

  // closeVideo() {
  //   this.isVideoPlaying.set(false);
  // }

  // playVideo() {
  //   this.isVideoPlaying.set(true);
  // }


  playVideo() {
    this.isVideoPlaying = true;
  }

  closeVideo() {
    this.isVideoPlaying = false;
  }


 @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape' && this.isVideoPlaying) {
    this.closeVideo();
  }
}


  buttonClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

}

