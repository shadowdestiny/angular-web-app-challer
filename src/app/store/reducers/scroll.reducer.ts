import {Action} from '@ngrx/store';
import {ModalState} from '../interfaces/modal.state';
import {ReducerModalConstants} from "../constants/reducer.modal.constants";
import {ScrollState} from "../interfaces/scroll.state";
import {ScrollConstants} from "../constants/scroll.constants";
import {ScrollAction} from "../actions/scroll.actions";

export const SCROLLING = ScrollConstants.SCROLLING_DOWN;
export const NO_SCROLLING = ScrollConstants.NO_SCROLLING;
export const ALL_SCROLLING = ScrollConstants.ALL_SCROLLING;

export const initialState = {
  scrolling: NO_SCROLLING,
};

export function scrollReducer(state: ScrollState = initialState, action: ScrollAction) {
  switch ((action.type)) {
    case SCROLLING:
      return {
        status: SCROLLING,
        scroll: action.scroll
      };
    case NO_SCROLLING:
      return {
        status: NO_SCROLLING,
        scroll: action.scroll
      };
    case ALL_SCROLLING:
      return {
        status: ALL_SCROLLING,
        scroll: action.scroll
      };
    default:
      return state;
  }

}
