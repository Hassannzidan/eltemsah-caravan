import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, type OnInit, type OnChanges, type SimpleChanges } from '@angular/core';
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
  
  @Output() cancel = new EventEmitter<void>();
  @Output() saveSuccess = new EventEmitter<any>();

  onCancel() {
    this.cancel.emit();
  }

  handleSaveSuccess(Product:any) {
    this.saveSuccess.emit(Product);
  }


}
