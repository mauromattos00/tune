import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mauromattos00-video-player',
  template: `
  <youtube-player
    #player
    [videoId]="videoId"
    [width]="height"
    [height]="width"
    [playerVars]="playerVars"
  ></youtube-player>
  `,
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input()
  get playerVars(): YT.PlayerVars | undefined { return this._playerVars$.value; }
  set playerVars(playerVars: YT.PlayerVars | undefined) { this._playerVars$.next(playerVars); }

  private readonly _playerVars$ = new BehaviorSubject<YT.PlayerVars | undefined>(undefined);

  @Input()
  get videoId(): string | undefined { return this._videoId$.value; }
  set videoId(videoId: string | undefined) { this._videoId$.next(videoId); }

  private readonly _videoId$ = new BehaviorSubject<string | undefined>(undefined);

  @Input()
  get height(): number | undefined { return this._height$.value; }
  set height(height: number | undefined) { this._height$.next(height); }

  private readonly _height$ = new BehaviorSubject<number | undefined>(undefined);

  @Input()
  get width(): number | undefined { return this._width$.value; }
  set width(width: number | undefined) { this._width$.next(width); }

  private readonly _width$ = new BehaviorSubject<number | undefined>(undefined);
}
