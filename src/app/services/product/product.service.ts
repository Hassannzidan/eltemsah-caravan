import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Product } from '../../data/product.types';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/products';

  createProduct(productFormData: FormData): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, productFormData);
  }

  updateProduct(id: string, productFormData: FormData): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, productFormData);
  }

  
  getAllProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
  }

}