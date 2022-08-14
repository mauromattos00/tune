
import { TestBed } from '@angular/core/testing';

import { VideoPlayerService } from '../services/video-player.service';
import { RandomizeVideoDirective } from './randomize-video.directive';

describe('Directive: TuneRandomizeVideo', () => {
  let directive: RandomizeVideoDirective;
  let videoPlayerService: VideoPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomizeVideoDirective],
      providers: [
        {
          provide: VideoPlayerService,
          useValue: {
            randomizeVideo: () => null
          },
        },
      ]
    });

    directive = TestBed.inject(RandomizeVideoDirective);
    videoPlayerService = TestBed.inject(VideoPlayerService);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call randomizeVideo method', () => {
    const spy = spyOn(videoPlayerService, 'randomizeVideo');
    directive.randomizeVideo();
    expect(spy).toHaveBeenCalled();
  });
});
