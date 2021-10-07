import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VideoPlayerModule } from '@tune/video-player';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VideoPlayerModule,
    PoModule,
    AppRoutingModule,
    HomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
