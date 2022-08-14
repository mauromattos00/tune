import * as videoPlayerActions from './../actions/video-player.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { VideoPlayerService } from '@tune/video-player';


@Injectable()
export class VideoPlayerEffects {

  randomizeVideo$ = createEffect(() => { return this.actions$.pipe(
    ofType(videoPlayerActions.randomizeVideo),
    map(() => this.videoPlayerService.randomizeVideo()),
  )}, { dispatch: false });

  constructor(
    private actions$: Actions,
    private videoPlayerService: VideoPlayerService,
  ) { }

}
