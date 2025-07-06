import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-time-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './lead-time-form.html',
  styleUrl: './lead-time-form.css'
})
export class LeadTimeForm {
  @Input() leadTime = {
    production: '',
    delivery: '',
    customization: ''
  };
  
  @Input() availability = '';

  @Output() leadTimeChange = new EventEmitter<typeof this.leadTime>();
  @Output() availabilityChange = new EventEmitter<string>();

  onChangeLeadTime(key: keyof typeof this.leadTime, value: string) {
    this.leadTime = { ...this.leadTime, [key]: value };
    this.leadTimeChange.emit(this.leadTime);
  }

  onChangeAvailability(value: string) {
    this.availability = value;
    this.availabilityChange.emit(value);
  }
} 
