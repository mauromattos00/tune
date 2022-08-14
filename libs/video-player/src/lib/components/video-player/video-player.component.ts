import { Component, Input } from '@angular/core';
import { VideoPlayerService } from '../../services/video-player.service';

@Component({
  selector: 'tune-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input() playerVars!: YT.PlayerVars;
  @Input() videoId!: string;
  @Input() height!: number;
  @Input() width!: number;

  constructor(private videoPlayerService: VideoPlayerService) {}

  onStateChangeEvent(event: YT.OnStateChangeEvent) {
    this.videoPlayerService.handlePlayerStateChange(event);
  }
}
