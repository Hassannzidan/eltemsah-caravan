import { Component, inject } from '@angular/core';
import { FeatureManager } from '../feature-manager/feature-manager';
import { CommonModule } from '@angular/common';
import { SectionToggle } from '../section-toggle/section-toggle';
import { ProductDataService } from '../../../../services/language/product-data';

@Component({
  selector: 'app-product-details-manager',
  imports: [CommonModule, SectionToggle, FeatureManager],
  templateUrl: './product-details-manager.html',
  styleUrl: './product-details-manager.css'
})
export class ProductDetailsManager {

 private productDataService = inject(ProductDataService);

  productData = this.productDataService.data;

  get data() {
    return this.productData();
  }

  get sections() {
    return this.data.sections;
  }

  get benefits() {
    return this.data.benefits;
  }

  get features() {
    return this.data.features;
  }

  toggleSectionVisibility = (id: string) => this.productDataService.toggleSectionVisibility(id);
  toggleFeatureVisibility = (id: string, type: 'benefits' | 'features') => this.productDataService.toggleFeatureVisibility(id, type);
  addFeature = (type: 'benefits' | 'features', content: string) => this.productDataService.addFeature(type, content);
  updateFeature = (id: string, type: 'benefits' | 'features', content: string) => this.productDataService.updateFeature(id, type, content);
  deleteFeature = (id: string, type: 'benefits' | 'features') => this.productDataService.deleteFeature(id, type);
}
