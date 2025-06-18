import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComprehensiveProductForm } from "../comprehensive-product-form/comprehensive-product-form";

@Component({
  selector: 'app-add-product-dialog',
  imports: [CommonModule, ComprehensiveProductForm],
  templateUrl: './add-product-dialog.html',
  styleUrl: './add-product-dialog.css'
})
export class AddProductDialog {
  @Input() isOpen: boolean = false;
  @Input() editingProduct: any = null;
  @Input() categories: any[] = [];

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSave(product: any) {
    this.save.emit(product);
  }

  onCancel() {
    this.cancel.emit();
  }

}
