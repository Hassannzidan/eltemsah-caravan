import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { LoaderService } from '../../../services/spinner/loader.service';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner {
  private loader = inject(LoaderService);
  isLoading = this.loader.isLoading();
}
