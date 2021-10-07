import { NgModule } from '@angular/core';

import { VideoPlayerModule } from '@tune/video-player';
import { TuneUiModule } from '@tune/tune-ui';

import { HeadingsComponent } from './components/headings/headings.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [VideoPlayerModule, TuneUiModule],
  declarations: [HomeComponent, HeadingsComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
