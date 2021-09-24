import { Component } from '@angular/core';
import { VideoPlayerService } from './services/video-player.service';

@Component({
  selector: 'mauromattos00-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  get videoId(): string | undefined { return this._videoPlayerService.videoId; }
  get playerVars(): YT.PlayerVars | undefined { return this._videoPlayerService.playerVars; }

  constructor(private readonly _videoPlayerService: VideoPlayerService) {}

  public randomizeVideo() {
    this._videoPlayerService.randomizeVideo();
  }
}
