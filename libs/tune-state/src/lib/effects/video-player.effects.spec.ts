import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VideoPlayerEffects } from './video-player.effects';

describe('VideoPlayerEffects', () => {
  let actions$: Observable<any>;
  let effects: VideoPlayerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VideoPlayerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VideoPlayerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
