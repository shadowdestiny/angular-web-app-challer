import {VideoConstants} from '../constants/video.constants';
import {VideoAction} from '../actions/video.action';

export const PLAY = VideoConstants.PLAY;
export const PAUSE = VideoConstants.PAUSE;
export const PAUSE_ALL = VideoConstants.PAUSE_ALL;

export const initialState = {
  video: PAUSE,
};

export interface VideoState {
  video: string;
}


export function videoReducer(state: VideoState = initialState, action: VideoAction) {
  switch ((action.type)) {
    case PAUSE:
      return {
        status: PAUSE,
      };
    case PAUSE_ALL:
      return {
        status: PAUSE_ALL,
      };
    case PLAY:
      return {
        status: PLAY,
      };
    default:
      return state;
  }

}
