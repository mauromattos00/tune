import { Action, createReducer, on } from '@ngrx/store';


export const videoPlayerFeatureKey = 'videoPlayer';

export interface VideoPlayerState {
  videoId: string;
  playerVars: YT.PlayerVars | null;
}

export const initialState: VideoPlayerState = {
  videoId: '',
  playerVars: null,
};

export const reducer = createReducer(
  initialState,

);
