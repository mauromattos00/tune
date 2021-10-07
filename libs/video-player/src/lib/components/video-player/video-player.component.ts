import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VideoPlayerService } from '../../services/video-player.service';

@Component({
  selector: 'mauromattos00-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input()
  set playerVars(playerVars: YT.PlayerVars | undefined) { this._videoPlayerService.playerVars = playerVars; }
  get playerVars(): YT.PlayerVars | undefined { return this._videoPlayerService.playerVars; }

  @Input()
  set videoId(videoId: string | undefined) { this._videoId$.next(videoId); }
  get videoId(): string | undefined { return this._videoId$.value; }

  private readonly _videoId$ = new BehaviorSubject<string | undefined>(undefined);

  @Input()
  set height(height: number | undefined) { this._height$.next(height); }
  get height(): number | undefined { return this._height$.value; }

  private readonly _height$ = new BehaviorSubject<number | undefined>(undefined);

  @Input()
  get width(): number | undefined { return this._width$.value; }
  set width(width: number | undefined) { this._width$.next(width); }

  private readonly _width$ = new BehaviorSubject<number | undefined>(undefined);

  constructor(private readonly _videoPlayerService: VideoPlayerService) {}

  onReady(player: YT.PlayerEvent) {
    this._videoPlayerService.handleReadyState(player);
  }

  onStateChangeEvent(event: YT.OnStateChangeEvent) {
    this._videoPlayerService.handlePlayerStateChange(event);
  }
}
