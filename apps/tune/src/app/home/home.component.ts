import { Component } from '@angular/core';
import { VideoPlayerService } from '@tune/video-player';

@Component({
  selector: 'mauromattos00-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  get videoId(): string | undefined { return this._videoPlayerService.videoId; }
  get playerVars(): YT.PlayerVars | undefined { return this._videoPlayerService.playerVars; }

  constructor(private _videoPlayerService: VideoPlayerService) {}

  public randomizeVideo() {
    this._videoPlayerService.randomizeVideo();
  }

}
