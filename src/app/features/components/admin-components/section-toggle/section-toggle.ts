import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';

export interface ProductSection {
  id: string;
  name: string;
  isVisible: boolean;
}

@Component({
  selector: 'app-section-toggle',
  imports: [CommonModule,NgIconsModule],
  templateUrl: './section-toggle.html',
  styleUrl: './section-toggle.css',
  viewProviders: [provideIcons({
    lucideEye,
    lucideEyeOff
  })]
})
export class SectionToggle {
  @Input() sections: ProductSection[] = [];
  // @Output() onToggleSection = new EventEmitter<string>();

  // toggleSection(sectionId: string) {
  //   this.onToggleSection.emit(sectionId);
  // }
  @Output() onToggleSection = new EventEmitter<string>();

  toggleSection(sectionId: string) {
    this.onToggleSection.emit(sectionId);
  }

}
