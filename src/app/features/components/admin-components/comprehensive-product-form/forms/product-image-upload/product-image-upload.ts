import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-image-upload',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-image-upload.html',
  styleUrl: './product-image-upload.css'
})
export class ProductImageUpload {
  /**
   * Component for uploading product images with drag-and-drop support.
   * Allows users to upload images by dragging them into the designated area or by selecting files from their device.
   * Emits the uploaded image data as a base64 string to the parent component.
   */

  @Input() image: string = '';
  @Output() imageChange = new EventEmitter<string>();
  dragActive = false;

  handleDrag(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter' || event.type === 'dragover') {
      this.dragActive = true;
    } else if (event.type === 'dragleave') {
      this.dragActive = false;
    }
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive = false;

    const file = event.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        this.imageChange.emit(result);
      };
      reader.readAsDataURL(file);
    }
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        this.imageChange.emit(result);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.imageChange.emit('');
  }
}
