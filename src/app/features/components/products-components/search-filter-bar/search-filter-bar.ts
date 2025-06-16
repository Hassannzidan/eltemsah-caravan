import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ElementRef,
  OnInit,
} from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import {
  featherCheck,
  featherChevronDown,
  featherChevronUp,
  featherFilter,
  featherList,
} from '@ng-icons/feather-icons';
import { heroListBulletSolid } from '@ng-icons/heroicons/solid';
import { lucideGrid3x3 } from '@ng-icons/lucide';

@Component({
  selector: 'app-search-filter-bar',
  imports: [CommonModule, NgIconsModule],
  templateUrl: './search-filter-bar.html',
  styleUrl: './search-filter-bar.css',
  viewProviders: [
    provideIcons({
      featherFilter,
      featherChevronUp,
      featherChevronDown,
      featherCheck,
      heroListBulletSolid,
      lucideGrid3x3
    }),
  ],
})
export class SearchFilterBar {
  showCategoryMenu = false;
  constructor(private elementRef: ElementRef) {}

  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  @Input() selectedCategory: string = 'all';
  @Output() selectedCategoryChange = new EventEmitter<string>();

  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Output() viewModeChange = new EventEmitter<'grid' | 'list'>();

  @Input() categories: string[] = [];
  @Input() filteredProductsCount: number = 0;

  onSearchChange(value: string) {
    this.searchTermChange.emit(value);
  }

  onCategoryChange(value: string) {
    this.selectedCategoryChange.emit(value);
  }

  onViewModeChange(mode: 'grid' | 'list') {
    this.viewModeChange.emit(mode);
  }

  // for detecting clicks outside the component to close the category menu
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(
      event.target as Node
    );
    if (!clickedInside) {
      this.showCategoryMenu = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showCategoryMenu = false;
    }
  }
}
