import { TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoPlayerComponent],
    });

    component = TestBed.inject(VideoPlayerComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
