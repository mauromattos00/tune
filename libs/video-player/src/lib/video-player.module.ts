import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoPlayerService } from './services/video-player.service';
import { RandomizeVideoDirective } from './directives/randomize-video.directive';
import { VideoPlayerFacadeService } from '@tune/tune-state';

@NgModule({
  declarations: [
    VideoPlayerComponent,
    RandomizeVideoDirective,
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
  ],
  exports: [
    VideoPlayerComponent,
    RandomizeVideoDirective,
  ],
  providers: [
    VideoPlayerService,
    VideoPlayerFacadeService
  ],
})
export class VideoPlayerModule {}
