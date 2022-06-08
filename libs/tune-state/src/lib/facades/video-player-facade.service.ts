import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { randomizeVideo } from '../actions/video-player.actions';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerFacadeService {

  constructor(private store: Store) { }

  playVideo(): void {
    this.store.dispatch(randomizeVideo());
  }
}
