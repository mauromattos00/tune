import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player'

import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoPlayerService } from './services/video-player.service';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
  exports: [VideoPlayerComponent],
  providers: [VideoPlayerService]
})
export class VideoPlayerModule { }
