import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-tags-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-tags-manager.html',
  styleUrl: './product-tags-manager.css'
})
export class ProductTagsManager {

  @Input() tags: string[] = [];
  @Output() tagsChange = new EventEmitter<string[]>();

  newTag = '';

  addTag() {
    const trimmedTag = this.newTag.trim();
    if (trimmedTag && !this.tags.includes(trimmedTag)) {
      this.tagsChange.emit([...this.tags, trimmedTag]);
      this.newTag = '';
    }
  }

  removeTag(tag: string) {
    this.tagsChange.emit(this.tags.filter(t => t !== tag));
  }

  onKeyEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTag();
    }
  }

}
