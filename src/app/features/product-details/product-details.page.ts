import { Component, Input } from '@angular/core';
import { ProductSpecification } from './components/product-specification/product-specification';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCTA } from './components/product-cta/product-cta';
import { ProductFeatures } from './components/product-features/product-features';
import { ProductInfo } from './components/product-info/product-info';
import { ProductImageGallery } from './components/product-image-gallery/product-image-gallery';
import { Product, type ProductSpecificationCategory } from '../../data/product.types';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideArrowBigLeftDash } from '@ng-icons/lucide';
import { TrustIndicators } from './components/trust-indicators/trust-indicators';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  imports: [
    CommonModule,
    ProductImageGallery,
    ProductInfo,
    ProductFeatures,
    ProductSpecification,
    ProductCTA,
    TrustIndicators,
    RouterLink,
    NgIconsModule
  ],
  templateUrl: './product-details.page.html',
  styleUrl: './product-details.page.css',
  viewProviders:[provideIcons({
    lucideArrowBigLeftDash
  })]
})
export class ProductDetails {
  productId: string | null = null;
  product: Product | null = null;
  @Input() galleryPreviews: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productId = id;
        this.loadProductDetails(id);
      }
    });
  }

  loadProductDetails(id: string): void {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  get features(): string[] {
  return this.product?.productDetails?.features?.map(f => f.content) || [];
}

getFlatSpecifications(categories: ProductSpecificationCategory[] = []): Record<string, string> {
  const specs: Record<string, string> = {};
  for (const cat of categories) {
    for (const spec of cat.specifications) {
      specs[spec.key] = spec.value;
    }
  }
  return specs;
}

isSectionVisible(sectionId: string): boolean {
  if (!this.product) {
    return true;
  }
  return this.product.productDetails?.sections?.find(s => s.id === sectionId)?.isVisible ?? true;
}


}
