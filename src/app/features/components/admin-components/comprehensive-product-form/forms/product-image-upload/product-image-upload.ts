import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  type OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideImage, lucideUpload } from '@ng-icons/lucide';
import { v4 as uuidv4 } from 'uuid';

interface UploadingImage {
  id: string;
  file: File;
  preview: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

@Component({
  selector: 'app-product-image-upload',
  imports: [CommonModule, FormsModule, NgIconsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-image-upload.html',
  styleUrl: './product-image-upload.css',
  viewProviders: [provideIcons({ lucideUpload ,lucideImage })],
})
export class ProductImageUpload {
  dragActive = signal(false);
  images = signal<string[]>([]);
  uploadingImages = signal<UploadingImage[]>([]);

  @Output() imagesChange = new EventEmitter<File[]>();
  private http = inject(HttpClient);

  handleDrag(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      this.dragActive.set(true);
    } else if (event.type === 'dragleave') {
      this.dragActive.set(false);
    }
  }
  handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive.set(false);
    if (event.dataTransfer?.files?.length) {
      this.processFiles(event.dataTransfer.files);
    }
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.processFiles(input.files);
      input.value = ''; // reset
    }
  }

  // processFiles(files: FileList) {
  //   const validFiles = Array.from(files).filter((file) => {
  //     const isImage = file.type.startsWith('image/');
  //     const isSizeOk = file.size <= 10 * 1024 * 1024;
  //     return isImage && isSizeOk;
  //   });

  //   validFiles.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const preview = e.target.result as string;
  //       const newImage: UploadingImage = {
  //         id: uuidv4(),
  //         file,
  //         preview,
  //         progress: 0,
  //         status: 'uploading',
  //       };
  //       this.uploadingImages.update((list) => [...list, newImage]);
  //       // this.simulateUpload(newImage);
  //       this.simulateUpload(newImage);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // }
  processFiles(files: FileList) {
    const validFiles = Array.from(files).filter((file) => {
      const isImage = file.type.startsWith('image/');
      const isSizeOk = file.size <= 10 * 1024 * 1024;
      return isImage && isSizeOk;
    });

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = e.target.result as string;
        const newImage: UploadingImage = {
          id: uuidv4(),
          file,
          preview,
          progress: 0,
          status: 'uploading',
        };
        this.uploadingImages.update((list) => [...list, newImage]);

        // 👇 Simulate only the progress bar (no upload!)
        this.simulateUpload(newImage);
      };
      reader.readAsDataURL(file);
    });
  }

  async simulateUpload(img: UploadingImage) {
    const totalSteps = 20;
    for (let i = 0; i <= totalSteps; i++) {
      await new Promise((res) => setTimeout(res, 50 + Math.random() * 100));
      const progress = (i / totalSteps) * 100;
      this.uploadingImages.update((list) =>
        list.map((item) =>
          item.id === img.id
            ? {
                ...item,
                progress,
                status: i === totalSteps ? 'completed' : 'uploading',
              }
            : item
        )
      );
    }
    setTimeout(() => {
      this.images.update((imgs) => {
        const updated = [...imgs, img.preview];
        this.imagesChange.emit(imgs.map((_, i) => img.file)); // <-- send files to parent
        return updated;
      });
      this.uploadingImages.update((list) =>
        list.filter((item) => item.id !== img.id)
      );
    }, 500);
  }

  // Move to completed
  //   setTimeout(() => {
  //     this.images.update((imgs) => {
  //       const updated = [...imgs, img.preview];
  //       this.imagesChange.emit(updated); // << هنا إرسال الصور
  //       return updated;
  //     });
  //     this.uploadingImages.update((list) =>
  //       list.filter((item) => item.id !== img.id)
  //     );
  //   }, 500);
  // }
  //   async uploadImage(img: UploadingImage) {
  //   // ❗ تحديث أولي للعرض الفوري
  //   this.uploadingImages.update((list) =>
  //     list.map((item) =>
  //       item.id === img.id
  //         ? { ...item, progress: 0, status: 'uploading' }
  //         : item
  //     )
  //   );

  //   const formData = new FormData();
  //   formData.append('file', img.file);

  //   this.http.post<{ url: string }>('http://localhost:3000/upload', formData, {
  //     reportProgress: true,
  //     observe: 'events',
  //   }).subscribe({
  //     next: (event: any) => {
  //       if (event.type === 1 && event.total) {
  //         const progress = Math.round((event.loaded / event.total) * 100);
  //         this.uploadingImages.update((list) =>
  //           list.map((item) =>
  //             item.id === img.id
  //               ? {
  //                   ...item,
  //                   progress,
  //                   status: progress === 100 ? 'completed' : 'uploading',
  //                 }
  //               : item
  //           )
  //         );
  //       } else if (event.body?.url) {
  //         // عند إكمال الرفع
  //         const url = event.body.url;
  //         this.images.update((imgs) => {
  //           const updated = [...imgs, url];
  //           this.imagesChange.emit(updated);
  //           return updated;
  //         });
  //         this.uploadingImages.update((list) =>
  //           list.filter((item) => item.id !== img.id)
  //         );
  //       }
  //     },
  //     error: () => {
  //       this.uploadingImages.update((list) =>
  //         list.map((item) =>
  //           item.id === img.id ? { ...item, status: 'error' } : item
  //         )
  //       );
  //     }
  //   });
  // }

  removeImage(index: number) {
    this.images.update((list) => list.filter((_, i) => i !== index));
  }

  removeUploadingImage(id: string) {
    this.uploadingImages.update((list) => list.filter((img) => img.id !== id));
  }

  getProgressColor(progress: number) {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  }
}
// export class ProductImageUpload implements OnInit {

//   @Input() existingImage: string = '';
//   @Input() images: File[] = [];
//   @Output() imagesChange = new EventEmitter<File[]>();
//   dragActive = false;
//   previewUrls: string[] = [];

//   ngOnInit() {
//   document.addEventListener('paste', this.handlePaste.bind(this));
//   }

//   handlePaste(event: ClipboardEvent) {
//   const items = event.clipboardData?.items;
//   if (items) {
//     const files: File[] = [];
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];
//       if (item.type.startsWith('image/')) {
//         const file = item.getAsFile();
//         if (file) {
//           files.push(file);
//         }
//       }
//     }
//     if (files.length) {
//       this.readFiles(files);
//     }
//   }
// }

//   handleDrag(event: DragEvent) {
//     event.preventDefault();
//     event.stopPropagation();

//     if (event.type === 'dragenter' || event.type === 'dragover') {
//       this.dragActive = true;
//     } else if (event.type === 'dragleave') {
//       this.dragActive = false;
//     }
//   }

//   handleDrop(event: DragEvent) {
//   event.preventDefault();
//   event.stopPropagation();
//   this.dragActive = false;

//   const files = event.dataTransfer?.files;
//   if (files) {
//       this.readFiles(Array.from(files));
//   }
//   }

//   handleFileInput(event: Event) {
// const input = event.target as HTMLInputElement;
// const files = input.files;
// if (!files || !files[0] || !files[0].type.startsWith('image/')) {
//   alert('Only image files are allowed!');
//   return;
// }

//   if (files && files.length > 0) {
//     this.readFiles(Array.from(files));
//   }

//   input.value = '';
//   }

//  readFiles(files: File[]) {
//   const maxImages = 5;
//   const newImages: File[] = [];
//   const newUrls: string[] = [];
//   const currentCount = this.images.length;

//   files.forEach((file) => {
//     if (file.type.startsWith('image/') && currentCount + newImages.length < maxImages) {
//       newImages.push(file);
//       newUrls.push(URL.createObjectURL(file));
//     }
//   });

//   if (newImages.length > 0) {
//     this.imagesChange.emit([...this.images, ...newImages]);
//     this.previewUrls.push(...newUrls);  // أضف URLs
//   }
//   }

//  removeImage(index: number) {
//   const updated = [...this.images];
//   updated.splice(index, 1);
//   this.imagesChange.emit(updated);
//   this.previewUrls.splice(index, 1);
// }

// }
