import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  randomizeVideo,
  setVideoData,
  setPlayerVars,
  setPlayerVideoId,
} from '../actions/video-player.actions';
import * as fromVideoPlayerSelectors from '../selectors/video-player.selectors';
import { VideoData } from '@tune/video-player';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerFacadeService {

  constructor(private store: Store) { }

  // SELECTORS

  selectCurrentVideoId(): Observable<string> {
    return this.store.select(fromVideoPlayerSelectors.selectCurrentVideoId);
  }

  selectPlayerVars(): Observable<YT.PlayerVars> {
    return this.store.select(fromVideoPlayerSelectors.selectVideoPlayerVars);
  }

  selectVideoData(): Observable<VideoData | null> {
    return this.store.select(fromVideoPlayerSelectors.selectVideoData);
  }

  // ACTIONS

  randomizeVideo(): void {
    this.store.dispatch(randomizeVideo());
  }

  setVideoData(data: VideoData): void {
    this.store.dispatch(setVideoData({ data }));
  }

  setVideoId(id: string): void {
    this.store.dispatch(setPlayerVideoId({ id }));
  }

  setPlayerVars(playerVars: YT.PlayerVars): void {
    this.store.dispatch(setPlayerVars({ playerVars }));
  }
}
