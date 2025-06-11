import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFeatures } from './company-features';

describe('CompanyFeatures', () => {
  let component: CompanyFeatures;
  let fixture: ComponentFixture<CompanyFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
