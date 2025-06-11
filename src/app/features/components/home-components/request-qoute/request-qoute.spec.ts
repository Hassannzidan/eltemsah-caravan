import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQoute } from './request-qoute';

describe('RequestQoute', () => {
  let component: RequestQoute;
  let fixture: ComponentFixture<RequestQoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestQoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestQoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
