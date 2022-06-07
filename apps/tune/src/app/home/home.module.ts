import { NgModule } from '@angular/core';

import { VideoPlayerModule } from '@tune/video-player';
import { TuneUiModule } from '@tune/tune-ui';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [VideoPlayerModule, TuneUiModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
