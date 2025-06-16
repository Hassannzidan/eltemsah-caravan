import { Component } from '@angular/core';
import { ProductSpecification } from "../../components/product-details/product-specification/product-specification";
import { ActivatedRoute } from '@angular/router';
import { productData } from '../../../data/products.data';
import { CommonModule } from '@angular/common';
import { TrustIndicators } from '../../components/product-details/trust-indicators/trust-indicators';
import { ProductCTA } from '../../components/product-details/product-cta/product-cta';
import { ProductFeatures } from '../../components/product-details/product-features/product-features';
import { ProductBenefits } from '../../components/product-details/product-benefits/product-benefits';
import { ProductInfo } from '../../components/product-details/product-info/product-info';
import { ProductImageGallery } from '../../components/product-details/product-image-gallery/product-image-gallery';

@Component({
  selector: 'app-product-details',
  imports: [
    CommonModule,
    ProductImageGallery,
    ProductInfo,
    ProductBenefits,
    ProductFeatures,
    ProductSpecification,
    ProductCTA,
    TrustIndicators
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
   productSpecifications = {
    "Weight": "1.2 kg",
    "Dimensions": "30 x 20 x 10 cm",
    "Battery Life": "10 hours",
    "Warranty": "2 years",
  };

  productId: number | null = null;
  product: any = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId = id ? +id : null;
      this.product = productData[this.productId as keyof typeof productData] || null;
    });
  }
}
