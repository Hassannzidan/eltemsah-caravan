import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeClosed, lucideSave, lucideShield, lucideSquarePen, lucideStar, lucideTrash2, lucideX } from '@ng-icons/lucide';

// export interface ProductFeature {
//   id: string;
//   content: string;
//   isVisible: boolean;
// }

export interface ProductFeature {
  id: string;
  sectionId: string;
  content: string;
  isVisible: boolean;
  order: number;
}

@Component({
  selector: 'app-feature-manager',
  imports: [CommonModule, FormsModule,NgIconsModule],
  templateUrl: './feature-manager.html',
  styleUrl: './feature-manager.css',
  viewProviders: [
    provideIcons({
      lucideStar,
      lucideShield,
      lucideSquarePen,
      lucideTrash2,
      lucideEye,
      lucideEyeClosed,
      lucideSave,
      lucideX
    })
  ]
})
export class FeatureManager {
  
  @Input() disabled: boolean = false;

  @Input() iconName!: string;
  @Input() title!: string;
  @Input() icon!: string | null;
  @Input() features: ProductFeature[] = [];

  @Output() toggleFeature = new EventEmitter<string>();
  @Output() addFeature = new EventEmitter<string>();
  @Output() updateFeature = new EventEmitter<{ id: string; content: string }>();
  @Output() deleteFeature = new EventEmitter<string>();

  newFeature = '';
  editingId: string | null = null;
  editContent = '';

  handleAddFeature() {
    const content = this.newFeature.trim();
    if (content) {
      this.addFeature.emit(content);
      this.newFeature = '';
    }
  }

  startEdit(feature: ProductFeature) {
    this.editingId = feature.id;
    this.editContent = feature.content;
  }

  saveEdit() {
    if (this.editingId && this.editContent.trim()) {
      this.updateFeature.emit({ id: this.editingId, content: this.editContent.trim() });
      this.editingId = null;
      this.editContent = '';
    }
  }

  cancelEdit() {
    this.editingId = null;
    this.editContent = '';
  }
}
