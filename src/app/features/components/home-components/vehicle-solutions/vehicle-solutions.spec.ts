import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSolutions } from './vehicle-solutions';

describe('VehicleSolutions', () => {
  let component: VehicleSolutions;
  let fixture: ComponentFixture<VehicleSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
