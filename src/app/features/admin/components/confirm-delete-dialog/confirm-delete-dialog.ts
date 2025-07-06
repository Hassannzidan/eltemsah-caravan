import { Component, Input, Output, EventEmitter, signal, computed, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-confirm-delete-dialog',
  imports: [CommonModule, FormsModule],
  templateUrl: './confirm-delete-dialog.html',
  styleUrl: './confirm-delete-dialog.css'
})
export class ConfirmDeleteDialog {

  @Input() productName = '';
  @Output() cancel = new EventEmitter();
  @Output() confirmDelete = new EventEmitter();

  // Step control
  step = signal<1 | 2>(1);

  // Input for confirmation
  confirmText = signal('');

  isMatching = computed(() =>
    this.confirmText().toLowerCase().trim() === this.productName.toLowerCase().trim()
  );

  proceedToStep2() {
    this.step.set(2);
  }

  handleDelete() {
    if (this.isMatching()) {
      this.confirmDelete.emit();
    }
  }
}
