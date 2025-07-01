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
  }

  // for the app specification manager
  onAddCategory(category: ProductSpecificationCategory) {
    this.productDetails.specifications.push(category);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  onAddSpecification(event: { categoryId: string; spec: any }) {
    const category = this.productDetails.specifications.find(
      (cat) => cat.id === event.categoryId
    );
    if (category) {
      category.specifications.push(event.spec);
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  onUpdateCategory(event: { id: string; title: string }) {
    const category = this.productDetails.specifications.find(
      (cat) => cat.id === event.id
    );
    if (category) {
      category.title = event.title;
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  onUpdateSpecification(event: {
    categoryId: string;
    specId: string;
    key: string;
    value: string;
  }) {
    const category = this.productDetails.specifications.find(
      (cat) => cat.id === event.categoryId
    );
    if (category) {
      const spec = category.specifications.find((s) => s.id === event.specId);
      if (spec) {
        spec.key = event.key;
        spec.value = event.value;
        this.productDetailsChange.emit(structuredClone(this.productDetails));
      }
    }
  }

  onDeleteCategory(categoryId: string) {
    this.productDetails.specifications =
      this.productDetails.specifications.filter((cat) => cat.id !== categoryId);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  onDeleteSpecification(event: { categoryId: string; specId: string }) {
    const category = this.productDetails.specifications.find(
      (cat) => cat.id === event.categoryId
    );
    if (category) {
      category.specifications = category.specifications.filter(
        (s) => s.id !== event.specId
      );
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  isSectionVisible(sectionId: string): boolean {
    const section = this.productDetails.sections.find(
      (sec) => sec.id === sectionId
    );
    return section?.isVisible ?? true;
  }
}
