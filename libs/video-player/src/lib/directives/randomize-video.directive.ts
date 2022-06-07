import { VideoPlayerService } from '@tune/video-player';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[tuneRandomizeVideo]'
})
export class RandomizeVideoDirective {
  @HostListener('click')
  randomizeVideo() {
    this.videoPlayerService.randomizeVideo();
  }

  constructor(private videoPlayerService: VideoPlayerService) { }
}
