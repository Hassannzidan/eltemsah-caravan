// loader.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = signal(false);

  show() {
    this.loading.set(true);
      console.log('Spinner: SHOW');
  }

  hide() {
    this.loading.set(false);
      console.log('Spinner: off');

  }

  isLoading() {
    return this.loading.asReadonly();
  }
}
