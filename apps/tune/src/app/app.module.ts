import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VideoPlayerModule } from '@tune/video-player';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VideoPlayerModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
