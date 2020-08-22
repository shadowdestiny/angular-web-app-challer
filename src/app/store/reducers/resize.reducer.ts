import {ResizeConstants} from "../constants/resize.constants";
import {ResizeAction} from "../actions/resize.action";

export const START = ResizeConstants.START;
export const STOP = ResizeConstants.STOP;

export const initialState = {
  resize: STOP,
};

export interface ResizeState {
  resize : string;
}


export function resizeReducer(state: ResizeState = initialState, action: ResizeAction) {
  switch ((action.type)) {
    case STOP:
      return {
        status: STOP,
        resize: action.resize,
      };
    case START:
      return {
        status: START,
        resize: action.resize,
      };
    default:
      return state;
  }

}
