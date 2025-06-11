import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedSponsors } from './trusted-sponsors';

describe('TrustedSponsors', () => {
  let component: TrustedSponsors;
  let fixture: ComponentFixture<TrustedSponsors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedSponsors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedSponsors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
