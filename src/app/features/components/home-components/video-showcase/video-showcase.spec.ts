import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShowcase } from './video-showcase';

describe('VideoShowcase', () => {
  let component: VideoShowcase;
  let fixture: ComponentFixture<VideoShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
