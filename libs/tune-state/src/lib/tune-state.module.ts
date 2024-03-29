import { environment } from './../../../../apps/tune/src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './reducers';
import { VideoPlayerFacadeService } from './facades/video-player-facade.service';
import { VideoPlayerEffects } from './effects/video-player.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([VideoPlayerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    VideoPlayerFacadeService,
  ]
})
export class TuneStateModule {}
