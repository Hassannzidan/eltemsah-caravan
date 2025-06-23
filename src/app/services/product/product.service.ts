import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import type { Product } from '../../data/product.types';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/products';

  // Signal لتخزين المنتجات
  private _products = signal<Product[]>([]);
  public products = this._products.asReadonly();

   constructor() {
    this.loadProductsFromBackend();
  }

  getAllProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
  }

  loadProductsFromBackend() {
    this.getAllProducts().subscribe((products) => {
      console.log('📦 Loaded from backend:', products);
      this._products.set(products);
    });
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this._products.set(this._products().filter(p => p._id !== id));
      })
    );
  }

  addProduct(product: Product) {
    this._products.set([product, ...this._products()]);
  }

  updateProduct(productId: string, productData: FormData): Observable<Product> {
  return this.http.patch<Product>(`${this.baseUrl}/${productId}`, productData);
  }

  updateLocalProduct(product: Product) {
  const current = this._products();
  const index = current.findIndex(p => p._id === product._id);
  if (index !== -1) {
    const updated = [...current];
    updated[index] = product;
    this._products.set(updated);
  } else {
    this._products.set([...current, product]);
  }
}

  updateProductInState(updated: Product) {
    this._products.set(this._products().map(p => p._id === updated._id ? updated : p));
  }

  get productsSnapshot() {
    return this._products();
  }

  createProduct(productFormData: FormData): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, productFormData).pipe(
    tap((product) => {
      this.addProduct(product); 
    })
  );
  }

  toggleProductStatus(productId: string): Observable<Product> {
  return this.http.patch<Product>(`${this.baseUrl}/${productId}/status`, {}).pipe(
    tap((updatedProduct) => {
      this.updateProductInState(updatedProduct);
    })
  );
}



  // updateProduct(id: string, productFormData: FormData): Observable<Product> {
  //   return this.http.put<Product>(`${this.baseUrl}/${id}`, productFormData);
  // }





  // ✅ إضافة منتج جديد إلى ال signal
  // addProductToState(product: Product) {
  //   this._products.set([product, ...this._products()]);
  // }

}