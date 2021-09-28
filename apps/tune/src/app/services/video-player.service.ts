import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { filter, map, takeWhile } from 'rxjs/operators';

import { videoIdList } from 'video-ids';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  set player(player: YT.PlayerEvent) { this._player$.next(player); }
  private readonly _player$ = new BehaviorSubject<YT.PlayerEvent | undefined>(undefined);

  get playerVars(): YT.PlayerVars | undefined { return this._playerVars$.value };
  set playerVars(playerVars: YT.PlayerVars | undefined) { this._playerVars$.next(playerVars) }
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

  public handlePlayerStateChange(event: YT.OnStateChangeEvent) {
    /**
     * The UNSTARTED player state occurs when the user randomizes
     * the video. To autoplay the video, the `playVideo` method is called.
     */
    if (event?.data === YT.PlayerState.UNSTARTED) {
      event.target.playVideo();
    }

    this._player$.next(event);
  }

  public handleReadyState(player: YT.PlayerEvent) {
    this._player$.next(player);
  }
}
