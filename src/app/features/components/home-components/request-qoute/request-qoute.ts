import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  HostListener,
  signal,
  ViewChild,
  type ElementRef,
} from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherCheck, featherFilter } from '@ng-icons/feather-icons';
import { lucideChevronDown, lucidePhone } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-request-qoute',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgIconsModule,
    TranslateModule,
  ],
  templateUrl: './request-qoute.html',
  styleUrl: './request-qoute.css',
  viewProviders: [
    provideIcons({
      lucidePhone,
      featherCheck,
      featherFilter,
      lucideChevronDown,
    }),
  ],
})
export class RequestQoute {
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  form: FormGroup;
  isDropdownOpen = signal(false);

  options = [
    { label: 'All Categories', value: 'all' },
    { label: 'Multi-purpose caravans', value: 'caravans' },
    { label: 'Food trucks', value: 'food' },
    { label: 'Kiosks and booths', value: 'kiosks' },
    { label: 'Container modifications', value: 'containers' },
    { label: 'Trailers', value: 'trailers' },
    { label: 'Mobile food outlets', value: 'mobile' },
    { label: 'Custom utility vehicles', value: 'utility' },
    { label: 'Bicycles and tricycles for commercial use', value: 'bikes' },
    { label: 'Vehicle customization', value: 'customization' },
    { label: 'General steel structure fabrication', value: 'fabrication' },
  ];

  selectedOption = computed(() =>
    this.options.find((opt) => opt.value === this.form.value['category'])
  );

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      industry: ['', Validators.required],
      category: ['', Validators.required], // Custom dropdown control
      details: [''],
    });
  }
  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }
  selectOption(option: { label: string; value: string }) {
  this.form.controls['category'].setValue(option.value);
  requestAnimationFrame(() => {
    this.isDropdownOpen.set(false);
  });
}


  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }


}
