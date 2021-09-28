import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VideoPlayerService } from './services/video-player.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let videoPlayerService: VideoPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        {
          provide: VideoPlayerService,
          useValue: {
            randomizeVideo: () => null,
          },
        },
      ],
    });

    component = TestBed.inject(AppComponent);
    videoPlayerService = TestBed.inject(VideoPlayerService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should randomize video', () => {
    const spy = jest.spyOn(videoPlayerService, 'randomizeVideo');
    component.randomizeVideo();
    expect(spy).toHaveBeenCalled();
  });
});
