import { createAction, props } from '@ngrx/store';
import { VideoData } from '@tune/video-player';
export const randomizeVideo = createAction(
  '[VideoPlayer] Randomize Video'
);

export const setVideoData = createAction(
  '[Video Player] Set Video Data',
  props<{ data: VideoData }>(),
);

export const setPlayerVars = createAction(
  '[Video Player] Set Player Vars',
  props<{ playerVars: YT.PlayerVars }>(),
);

export const setPlayerVideoId = createAction(
  '[Video Player] Set Video Id',
  props<{ id: string }>(),
);
