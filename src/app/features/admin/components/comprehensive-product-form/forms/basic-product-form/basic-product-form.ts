import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-product-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './basic-product-form.html',
  styleUrl: './basic-product-form.css'
})
export class BasicProductForm {
   @Input() formData!: {
    name: string;
    description: string;
    category: string;
    subcategory: string;
    status: 'active' | 'inactive';
  };

  @Input() categories: string[] = [];
  @Input() subcategories: string[] = [];

  @Output() formDataChange = new EventEmitter<Partial<typeof this.formData>>();

  updateField(field: keyof typeof this.formData, value: any) {
    this.formDataChange.emit({ [field]: value });
  }
}
