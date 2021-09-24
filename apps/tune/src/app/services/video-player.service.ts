import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { videoIdList } from 'video-ids';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  get playerVars(): YT.PlayerVars | undefined { return this._playerVars$.value };
  private readonly _playerVars$ = new BehaviorSubject<YT.PlayerVars | undefined>(undefined);

  get videoId(): string | undefined { return this._videoId$.value; }
  private readonly _videoId$ = new BehaviorSubject<string | undefined>(undefined);

  get videoList(): string[] | undefined { return this._videoList$.value; }
  private readonly _videoList$ = new BehaviorSubject<string[]>(videoIdList);

  constructor() {
    this._playerVars$.next({
      autoplay: 1,
      color: 'white',
      autohide: 1,
      controls: 1
    });

    this.randomizeVideo();
  }

  public randomizeVideo() {
    let newVideoId: string;
    do {
      newVideoId = this._videoList$.value[Math.floor(Math.random() * this._videoList$.value.length)];
    } while (newVideoId === this._videoId$.value);

    this._videoId$.next(newVideoId);
  }
}
