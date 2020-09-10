import {BodyConstants} from '../constants/body.constants';
import {BodyAction} from '../actions/body.action';

export const DEFAULT = BodyConstants.DEFAULT;
export const BLUE = BodyConstants.BLUE;

export const initialState = {
  background: DEFAULT,
};

export interface BodyState {
  background: string;
}

export function bodyReducer(state: BodyState = initialState, action: BodyAction) {
  switch ((action.type)) {
    case DEFAULT:
      return {
        status: DEFAULT,
      };
    case BLUE:
      return {
        status: BLUE,
      };
    default:
      return state;
  }

}
