import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromVideoPlayer from './video-player.reducer';


export interface AppState {
  videoPlayer: fromVideoPlayer.VideoPlayerState,
}

export const reducers: ActionReducerMap<AppState> = {
  videoPlayer: fromVideoPlayer.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
