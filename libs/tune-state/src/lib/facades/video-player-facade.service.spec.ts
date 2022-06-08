import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { VideoPlayerFacadeService } from './video-player-facade.service';
import { initialState } from '../reducers/video-player.reducer';


describe('VideoPlayerFacadeService', () => {
  let service: VideoPlayerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
    });
    service = TestBed.inject(VideoPlayerFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
