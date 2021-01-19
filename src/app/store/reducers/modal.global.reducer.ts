import {ModalConstants} from '../constants/modal.constants';
import {ModalAction} from '../actions/modal.action';

export const OPEN = ModalConstants.OPEN;
export const CLOSE = ModalConstants.CLOSE;

export const initialState = {
  globalModal: CLOSE,
};

export interface ModalState {
  globalModal: string;
}

export function modalGlobalReducer(state: ModalState = initialState, action: ModalAction) {
  switch ((action.type)) {
    case OPEN:
      return {
        status: OPEN,
        typeForm: action.modal.typeForm
      };
    case CLOSE:
      return {
        status: CLOSE,
      };
    default:
      return state;
  }

}
