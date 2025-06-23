import { Component, EventEmitter, Input, Output } from '@angular/core';
import type {
  ProductData,
  ProductFeature,
  ProductSpecificationCategory,
} from '../../../../../../data/product.types';
import { CommonModule } from '@angular/common';
import { SectionToggle } from '../../../section-toggle/section-toggle';
import { FeatureManager } from '../../../feature-manager/feature-manager';
import { provideIcons } from '@ng-icons/core';
import { lucideShield, lucideStar } from '@ng-icons/lucide';
import { SpecificationsManager } from '../../../specifications-manager/specifications-manager';
import { CustomizationManager } from '../../../customization-manager/customization-manager';
import { ProductService } from '../../../../../../services/product/product.service';

@Component({
  selector: 'app-product-details-form',
  imports: [
    CommonModule,
    SectionToggle,
    FeatureManager,
    SpecificationsManager,
    CustomizationManager,
  ],
  templateUrl: './product-details-form.html',
  styleUrl: './product-details-form.css',
  viewProviders: [
    provideIcons({
      lucideStar,
      lucideShield,
    }),
  ],
})
export class ProductDetailsForm {
  @Input() productDetails!: ProductData;
  @Input() productId!: string;

  @Output() productDetailsChange = new EventEmitter<ProductData>();
  @Output() toggleFeatureVisibility = new EventEmitter<{
    id: string;
    sectionType: 'benefits' | 'features';
  }>();
  @Output() addFeature = new EventEmitter<{
    sectionType: 'benefits' | 'features';
    content: string;
  }>();
  @Output() updateFeature = new EventEmitter<{
    id: string;
    sectionType: 'benefits' | 'features';
    content: string;
  }>();
  @Output() deleteFeature = new EventEmitter<{
    id: string;
    sectionType: 'benefits' | 'features';
  }>();

  constructor(public productService: ProductService) {}
  handleToggleFeature(sectionType: 'benefits' | 'features', id: string) {
    this.toggleFeatureVisibility.emit({ id, sectionType });
  }

  handleAddFeature(sectionType: 'benefits' | 'features', content: string) {
  const feature: ProductFeature = {
    id: crypto.randomUUID(),
    sectionId: sectionType,
    content,
    isVisible: true,
    order: this.productDetails.features.length + 1,
  };

  this.productDetails.features.push(feature);
  this.productDetailsChange.emit(structuredClone(this.productDetails));
}

  handleUpdateFeature(
    sectionType: 'benefits' | 'features',
    id: string,
    content: string
  ) {
    this.updateFeature.emit({ id, sectionType, content });
  }

  handleDeleteFeature(sectionType: 'benefits' | 'features', id: string) {
    this.deleteFeature.emit({ id, sectionType });
  }

  toggleSectionVisibility(sectionId: string) {
    const section = this.productDetails.sections.find(
      (s) => s.id === sectionId
    );
    if (section) {
      section.isVisible = !section.isVisible;
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }

    // ابعت التحديث للـ backend
    // this.productService
    //   .updateProductSections(this.productId, this.productDetails.sections)
    //   .subscribe();
  }

  onAddCategory(category: ProductSpecificationCategory) {
    // Send category to backend using ProductService
    // this.productService.addCategory(this.productId, category).subscribe();
  }

  onAddSpecification(event: { categoryId: string; spec: any }) {
    // this.productService.addSpecification(this.productId, event.categoryId, event.spec).subscribe();
  }

  onUpdateCategory(event: { id: string; title: string }) {
    // this.productService.updateCategory(this.productId, event.id, event.title).subscribe();
  }

  onUpdateSpecification(event: {
    categoryId: string;
    specId: string;
    key: string;
    value: string;
  }) {
    // this.productService.updateSpecification(this.productId, event.categoryId, event.specId, event.key, event.value).subscribe();
  }

  onDeleteCategory(categoryId: string) {
    // this.productService.deleteCategory(this.productId, categoryId).subscribe();
  }

  onDeleteSpecification(event: { categoryId: string; specId: string }) {
    // this.productService.deleteSpecification(this.productId, event.categoryId, event.specId).subscribe();
  }

  isSectionVisible(sectionId: string): boolean {
    const section = this.productDetails.sections.find(
      (sec) => sec.id === sectionId
    );
    return section?.isVisible ?? true;
  }
}
