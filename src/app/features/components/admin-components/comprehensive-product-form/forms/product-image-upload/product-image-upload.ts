import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideUpload } from '@ng-icons/lucide';

@Component({
  selector: 'app-product-image-upload',
  imports: [CommonModule, FormsModule, NgIconsModule],
  templateUrl: './product-image-upload.html',
  styleUrl: './product-image-upload.css',
  viewProviders:[provideIcons({lucideUpload})]
})
export class ProductImageUpload implements OnInit {


  @Input() images: File[] = [];
  @Output() imagesChange = new EventEmitter<File[]>();
  dragActive = false;
  previewUrls: string[] = [];


  ngOnInit() {
  document.addEventListener('paste', this.handlePaste.bind(this));
  }

  handlePaste(event: ClipboardEvent) {
  const items = event.clipboardData?.items;
  if (items) {
    const files: File[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }
    if (files.length) {
      this.readFiles(files);
    }
  }
}

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

  const files = event.dataTransfer?.files;
  if (files) {  
      this.readFiles(Array.from(files));
  }
  }

  handleFileInput(event: Event) {
const input = event.target as HTMLInputElement;
const files = input.files;
if (!files || !files[0] || !files[0].type.startsWith('image/')) {
  alert('Only image files are allowed!');
  return;
}

  if (files && files.length > 0) {
    this.readFiles(Array.from(files));
  }

  input.value = '';
  }


 readFiles(files: File[]) {
  const maxImages = 5;
  const newImages: File[] = [];
  const newUrls: string[] = [];
  const currentCount = this.images.length;

  files.forEach((file) => {
    if (file.type.startsWith('image/') && currentCount + newImages.length < maxImages) {
      newImages.push(file);
      newUrls.push(URL.createObjectURL(file));
    }
  });

  if (newImages.length > 0) {
    this.imagesChange.emit([...this.images, ...newImages]);
    this.previewUrls.push(...newUrls);  // أضف URLs
  }
  }




 removeImage(index: number) {
  const updated = [...this.images];
  updated.splice(index, 1);
  this.imagesChange.emit(updated);
  this.previewUrls.splice(index, 1);
}


}
