import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerModule } from '@tune/video-player';
import { TuneUiModule } from '@tune/tune-ui';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, VideoPlayerModule, TuneUiModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
