import { Component } from '@angular/core';

import { VideoPlayerService } from '@tune/video-player';

@Component({
  selector: 'mauromattos00-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get videoId(): string | undefined { return this._videoPlayerService.videoId; }
  get playerVars(): YT.PlayerVars | undefined { return this._videoPlayerService.playerVars; }

  constructor(private _videoPlayerService: VideoPlayerService) {}

  public randomizeVideo() {
    this._videoPlayerService.randomizeVideo();
  }
}
