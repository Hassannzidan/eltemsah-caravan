import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ProductData } from '../../../../../../data/product.types';
import { CommonModule } from '@angular/common';
import { SectionToggle } from '../../../section-toggle/section-toggle';
import { FeatureManager } from '../../../feature-manager/feature-manager';
import { provideIcons } from '@ng-icons/core';
import { lucideShield, lucideStar } from '@ng-icons/lucide';
import { SpecificationsManager } from '../../../specifications-manager/specifications-manager';
import { CustomizationManager } from '../../../customization-manager/customization-manager';

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

  handleToggleFeature(sectionType: 'benefits' | 'features', id: string) {
    this.toggleFeatureVisibility.emit({ id, sectionType });
  }

  handleAddFeature(sectionType: 'benefits' | 'features', content: string) {
    this.addFeature.emit({ sectionType, content });
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
  // المواصفات (specifications)

  addSpecificationCategory(category: any) {
    this.productDetails.specifications.push(category);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  addSpecification(spec: any) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === spec.categoryId
    );
    if (category) {
      category.specifications.push(spec);
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  updateSpecificationCategory(updated: any) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === updated.id
    );
    if (category) {
      Object.assign(category, updated);
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  updateSpecification(updated: any) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === updated.categoryId
    );
    if (category) {
      const spec = category.specifications.find((s) => s.id === updated.id);
      if (spec) {
        Object.assign(spec, updated);
        this.productDetailsChange.emit(structuredClone(this.productDetails));
      }
    }
  }

  deleteSpecificationCategory(categoryId: string) {
    this.productDetails.specifications =
      this.productDetails.specifications.filter((c) => c.id !== categoryId);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  deleteSpecification(specToDelete: any) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === specToDelete.categoryId
    );
    if (category) {
      category.specifications = category.specifications.filter(
        (s) => s.id !== specToDelete.id
      );
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  toggleSpecificationCategoryVisibility(categoryId: string) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === categoryId
    );
    if (category) {
      category.isVisible = !category.isVisible;
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  toggleSpecificationVisibility(specToToggle: any) {
    const category = this.productDetails.specifications.find(
      (c) => c.id === specToToggle.categoryId
    );
    if (category) {
      const spec = category.specifications.find(
        (s) => s.id === specToToggle.id
      );
      if (spec) {
        spec.isVisible = !spec.isVisible;
        this.productDetailsChange.emit(structuredClone(this.productDetails));
      }
    }
  }

  addCustomizationCategory(category: any) {
    this.productDetails.customizations.push(category);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  addCustomizationOption(option: any) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === option.categoryId
    );
    if (category) {
      category.options.push(option);
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  updateCustomizationCategory(updated: any) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === updated.id
    );
    if (category) {
      Object.assign(category, updated);
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  updateCustomizationOption(updated: any) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === updated.categoryId
    );
    if (category) {
      const option = category.options.find((o) => o.id === updated.id);
      if (option) {
        Object.assign(option, updated);
        this.productDetailsChange.emit(structuredClone(this.productDetails));
      }
    }
  }

  deleteCustomizationCategory(categoryId: string) {
    this.productDetails.customizations =
      this.productDetails.customizations.filter((c) => c.id !== categoryId);
    this.productDetailsChange.emit(structuredClone(this.productDetails));
  }

  deleteCustomizationOption(optionToDelete: any) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === optionToDelete.categoryId
    );
    if (category) {
      category.options = category.options.filter(
        (o) => o.id !== optionToDelete.id
      );
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  toggleCustomizationCategoryVisibility(categoryId: string) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === categoryId
    );
    if (category) {
      category.isVisible = !category.isVisible;
      this.productDetailsChange.emit(structuredClone(this.productDetails));
    }
  }

  toggleCustomizationOptionVisibility(optionToToggle: any) {
    const category = this.productDetails.customizations.find(
      (c) => c.id === optionToToggle.categoryId
    );
    if (category) {
      const option = category.options.find((o) => o.id === optionToToggle.id);
      if (option) {
        option.isVisible = !option.isVisible;
        this.productDetailsChange.emit(structuredClone(this.productDetails));
      }
    }
  }
}
