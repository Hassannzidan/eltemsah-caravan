import { Component, Input, Output, EventEmitter, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeClosed, lucidePencil, lucidePlus, lucideSquarePen, lucideTrash, lucideTrash2, lucideWrench } from '@ng-icons/lucide';

interface ProductSpecificationItem {
  id: string;
  key: string;
  value: string;
  isVisible: boolean;
}

interface ProductSpecificationCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  specifications: ProductSpecificationItem[];
  isVisible: boolean;
}


@Component({
  selector: 'app-specifications-manager',
  imports: [CommonModule, FormsModule,NgIconsModule],
  templateUrl: './specifications-manager.html',
  styleUrl: './specifications-manager.css',
  viewProviders:provideIcons({
    lucideWrench,
    lucidePlus,
    lucideEye,
    lucideEyeClosed,
    lucideTrash,
    lucidePencil,
    lucideSquarePen,
    lucideTrash2
  })
})
export class SpecificationsManager {

    newCategory = '';
  newSpecs: Record<string, { key: string; value: string }> = {};

  @Input() disabled: boolean = false;
  @Input() specifications: ProductSpecificationCategory[] = [];

  @Output() addCategory = new EventEmitter<ProductSpecificationCategory>();
  @Output() addSpecification = new EventEmitter<{ categoryId: string; spec: ProductSpecificationItem }>();
  @Output() updateCategory = new EventEmitter<{ id: string; title: string }>();
  @Output() updateSpecification = new EventEmitter<{ categoryId: string; specId: string; key: string; value: string }>();
  @Output() deleteCategoryEvent = new EventEmitter<string>();
  @Output() deleteSpecificationEvent = new EventEmitter<{ categoryId: string; specId: string }>();

  editingCategory: string | null = null;
  editingSpec: string | null = null;
  editCategoryName = '';
  editSpecData = { key: '', value: '' };

  generateId(): string {
    return Math.random().toString(36).substring(2, 10);
  }

  handleAddCategory() {
    if (!this.newCategory.trim()) return;

    const newCat: ProductSpecificationCategory = {
      id: this.generateId(),
      title: this.newCategory.trim(),
      icon: 'lucideWrench',
      color: '#4f46e5',
      isVisible: true,
      specifications: []
    };

    this.specifications.push(newCat);
    this.addCategory.emit(newCat);
    this.newCategory = '';
  }

  handleAddSpecification(categoryId: string) {
    const spec = this.newSpecs[categoryId];
    if (spec?.key.trim() && spec?.value.trim()) {
      const category = this.specifications.find(c => c.id === categoryId);
      if (category) {
        const newSpec: ProductSpecificationItem = {
          id: this.generateId(),
          key: spec.key.trim(),
          value: spec.value.trim(),
          isVisible: true
        };
        category.specifications.push(newSpec);
        this.addSpecification.emit({ categoryId, spec: newSpec });
        this.newSpecs[categoryId] = { key: '', value: '' };
      }
    }
  }

  getSpecKey(categoryId: string): string {
    return this.newSpecs[categoryId]?.key || '';
  }

  setSpecKey(categoryId: string, key: string) {
    this.newSpecs[categoryId] = { ...(this.newSpecs[categoryId] || {}), key };
  }

  getSpecValue(categoryId: string): string {
    return this.newSpecs[categoryId]?.value || '';
  }

  setSpecValue(categoryId: string, value: string) {
    this.newSpecs[categoryId] = { ...(this.newSpecs[categoryId] || {}), value };
  }

  
  startEditCategory(category: ProductSpecificationCategory) {
    this.editingCategory = category.id;
    this.editCategoryName = category.title;
  }

  saveEditCategory() {
    const cat = this.specifications.find(c => c.id === this.editingCategory);
    if (cat) {
      cat.title = this.editCategoryName;
      this.updateCategory.emit({ id: cat.id, title: cat.title });
    }
    this.editingCategory = null;
  }

  startEditSpec(specId: string, key: string, value: string) {
    this.editingSpec = specId;
    this.editSpecData = { key, value };
  }

  saveEditSpec(categoryId: string) {
    const category = this.specifications.find(c => c.id === categoryId);
    const spec = category?.specifications.find(s => s.id === this.editingSpec);
    if (spec) {
      spec.key = this.editSpecData.key;
      spec.value = this.editSpecData.value;
      this.updateSpecification.emit({
        categoryId,
        specId: spec.id,
        key: spec.key,
        value: spec.value
      });
    }
    this.editingSpec = null;
  }

  deleteCategory(categoryId: string) {
    this.specifications = this.specifications.filter(c => c.id !== categoryId);
    this.deleteCategoryEvent.emit(categoryId);
  }

  deleteSpecification(categoryId: string, specId: string) {
    const category = this.specifications.find(c => c.id === categoryId);
    if (category) {
      category.specifications = category.specifications.filter(s => s.id !== specId);
      this.deleteSpecificationEvent.emit({ categoryId, specId });
    }
  }


}




// toggleCategoryVisibility(categoryId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   if (category) {
  //     category.isVisible = !category.isVisible;
  //     this.toggleCategoryVisibilityEvent.emit(categoryId);
  //   }
  // }

  // toggleSpecVisibility(categoryId: string, specId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   const spec = category?.specifications.find(s => s.id === specId);
  //   if (spec) {
  //     spec.isVisible = !spec.isVisible;
  //     this.toggleSpecVisibilityEvent.emit({ categoryId, specId });
  //   }
  // }




  // newCategory = '';
  // newSpecs: Record<string, { key: string; value: string }> = {};
  // @Input() specifications: ProductSpecificationCategory[] = [];

  // @Output() addCategory = new EventEmitter<ProductSpecificationCategory>();
  // @Output() addSpecification = new EventEmitter<{ categoryId: string; spec: ProductSpecificationItem }>();



  // editingCategory: string | null = null;
  // editingSpec: string | null = null;
  // editCategoryName = '';
  // editSpecData = { key: '', value: '' };

  // generateId(): string {
  //   return Math.random().toString(36).substring(2, 10);
  // }

  // handleAddCategory() {
  //   if (!this.newCategory.trim()) return;
  //   this.specifications.push({
  //     id: this.generateId(),
  //     title: this.newCategory.trim(),
  //     icon: 'lucideWrench', // أي أيقونة من اللي بتستخدميهم
  //     color: '#4f46e5',     // أي لون افتراضي (مثلاً بنفسجي)
  //     isVisible: true,
  //     specifications: []
  //   });
  //   this.newCategory = '';
  // }


  // handleAddSpecification(categoryId: string) {
  //   const spec = this.newSpecs[categoryId];
  //   if (spec?.key.trim() && spec?.value.trim()) {
  //     const category = this.specifications.find(c => c.id === categoryId);
  //     if (category) {
  //       category.specifications.push({
  //         id: this.generateId(),
  //         key: spec.key.trim(),
  //         value: spec.value.trim(),
  //         isVisible: true
  //       });
  //       this.newSpecs[categoryId] = { key: '', value: '' };
  //     }
  //   }
  // }

  // getSpecKey(categoryId: string): string {
  //   return this.newSpecs[categoryId]?.key || '';
  // }

  // setSpecKey(categoryId: string, key: string) {
  //   this.newSpecs[categoryId] = { ...(this.newSpecs[categoryId] || {}), key };
  // }

  // getSpecValue(categoryId: string): string {
  //   return this.newSpecs[categoryId]?.value || '';
  // }

  // setSpecValue(categoryId: string, value: string) {
  //   this.newSpecs[categoryId] = { ...(this.newSpecs[categoryId] || {}), value };
  // }

  // toggleCategoryVisibility(categoryId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   if (category) category.isVisible = !category.isVisible;
  // }

  // toggleSpecVisibility(categoryId: string, specId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   const spec = category?.specifications.find(s => s.id === specId);
  //   if (spec) spec.isVisible = !spec.isVisible;
  // }

  // startEditCategory(category: any) {
  //   this.editingCategory = category.id;
  //   this.editCategoryName = category.title;
  // }

  // saveEditCategory() {
  //   const cat = this.specifications.find(c => c.id === this.editingCategory);
  //   if (cat) cat.title = this.editCategoryName;
  //   this.editingCategory = null;
  // }

  // startEditSpec(specId: string, key: string, value: string) {
  //   this.editingSpec = specId;
  //   this.editSpecData = { key, value };
  // }

  // saveEditSpec(categoryId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   const spec = category?.specifications.find(s => s.id === this.editingSpec);
  //   if (spec) {
  //     spec.key = this.editSpecData.key;
  //     spec.value = this.editSpecData.value;
  //   }
  //   this.editingSpec = null;
  // }

  // deleteCategory(categoryId: string) {
  //   this.specifications = this.specifications.filter(c => c.id !== categoryId);
  // }

  // deleteSpecification(categoryId: string, specId: string) {
  //   const category = this.specifications.find(c => c.id === categoryId);
  //   if (category) {
  //     category.specifications = category.specifications.filter(s => s.id !== specId);
  //   }
  // }

