import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CustomizationOption {
  id: string;
  option: string;
  isVisible: boolean;
}

export interface CustomizationCategory {
  id: string;
  category: string;
  options: CustomizationOption[];
  isVisible: boolean;
}

@Component({
  selector: 'app-customization-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './customization-manager.html',
  styleUrl: './customization-manager.css'
})
export class CustomizationManager {

  @Input() customizations: CustomizationCategory[] = [];

  @Output() toggleCategoryVisibility = new EventEmitter<string>();
  @Output() toggleOptionVisibility = new EventEmitter<{ categoryId: string, optionId: string }>();
  @Output() addCategory = new EventEmitter<string>();
  @Output() addOption = new EventEmitter<{ categoryId: string, option: string }>();
  @Output() updateCategory = new EventEmitter<{ categoryId: string, category: string }>();
  @Output() updateOption = new EventEmitter<{ categoryId: string, optionId: string, option: string }>();
  @Output() deleteCategory = new EventEmitter<string>();
  @Output() deleteOption = new EventEmitter<{ categoryId: string, optionId: string }>();

  newCategory = '';
  newOptions: Record<string, string> = {};
  editingCategory: string | null = null;
  editingOption: string | null = null;
  editCategoryName = '';
  editOptionName = '';

  handleAddCategory() {
    const trimmed = this.newCategory.trim();
    if (trimmed) {
      this.addCategory.emit(trimmed);
      this.newCategory = '';
    }
  }

  handleAddOption(categoryId: string) {
    const optionText = this.newOptions[categoryId]?.trim();
    if (optionText) {
      this.addOption.emit({ categoryId, option: optionText });
      this.newOptions[categoryId] = '';
    }
  }

  startEditCategory(category: CustomizationCategory) {
    this.editingCategory = category.id;
    this.editCategoryName = category.category;
  }

  saveEditCategory() {
    if (this.editingCategory && this.editCategoryName.trim()) {
      this.updateCategory.emit({ categoryId: this.editingCategory, category: this.editCategoryName.trim() });
      this.editingCategory = null;
      this.editCategoryName = '';
    }
  }

  startEditOption(optionId: string, optionText: string) {
    this.editingOption = optionId;
    this.editOptionName = optionText;
  }

  saveEditOption(categoryId: string) {
    if (this.editingOption && this.editOptionName.trim()) {
      this.updateOption.emit({ categoryId, optionId: this.editingOption, option: this.editOptionName.trim() });
      this.editingOption = null;
      this.editOptionName = '';
    }
  }
}
