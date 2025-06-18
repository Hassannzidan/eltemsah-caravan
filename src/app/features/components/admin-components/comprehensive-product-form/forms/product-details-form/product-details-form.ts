import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ProductData } from '../../../../../../data/product.types';
import { CommonModule } from '@angular/common';
import { SectionToggle } from '../../../section-toggle/section-toggle';
import { FeatureManager } from '../../../feature-manager/feature-manager';
import { provideIcons } from '@ng-icons/core';
import { lucideShield, lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-product-details-form',
  imports: [CommonModule,SectionToggle,FeatureManager],
  templateUrl: './product-details-form.html',
  styleUrl: './product-details-form.css',
  viewProviders: [provideIcons({    
    lucideStar,
    lucideShield})]
})
export class ProductDetailsForm {
  @Input() productDetails!: ProductData;

  @Output() productDetailsChange = new EventEmitter<ProductData>();
  @Output() toggleFeatureVisibility = new EventEmitter<{ id: string; sectionType: 'benefits' | 'features' }>();
  @Output() addFeature = new EventEmitter<{ sectionType: 'benefits' | 'features'; content: string }>();
  @Output() updateFeature = new EventEmitter<{ id: string; sectionType: 'benefits' | 'features'; content: string }>();
  @Output() deleteFeature = new EventEmitter<{ id: string; sectionType: 'benefits' | 'features' }>();

  handleToggleFeature(sectionType: 'benefits' | 'features', id: string) {
    this.toggleFeatureVisibility.emit({ id, sectionType });
  }

  handleAddFeature(sectionType: 'benefits' | 'features', content: string) {
    this.addFeature.emit({ sectionType, content });
  }

  handleUpdateFeature(sectionType: 'benefits' | 'features', id: string, content: string) {
    this.updateFeature.emit({ id, sectionType, content });
  }

  handleDeleteFeature(sectionType: 'benefits' | 'features', id: string) {
    this.deleteFeature.emit({ id, sectionType });
  }

  toggleSectionVisibility(sectionId: string) {
  const section = this.productDetails.sections.find(s => s.id === sectionId);
  if (section) {
    section.isVisible = !section.isVisible;
    this.productDetailsChange.emit(structuredClone(this.productDetails)); // مهم علشان يحصل تحديث
  }
}

}