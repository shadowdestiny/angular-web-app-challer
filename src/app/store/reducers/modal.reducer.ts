import {Action} from '@ngrx/store';
import {ModalState} from '../interfaces/modal.state';
import {ReducerModalConstants} from "../constants/reducer.modal.constants";

export const OPEN = ReducerModalConstants.OPEN;
export const CLOSE = ReducerModalConstants.CLOSE;
export const RESET = ReducerModalConstants.RESET;

export const initialState = {
    modalLoginMessage: CLOSE
};

export function modalReducer(state: ModalState = initialState, action: Action) {

    switch ((action.type)) {
        case OPEN:
            return {
                status: OPEN
            };
        case CLOSE:
            return {
                status: CLOSE
            };
        case RESET:
            return {
                status: RESET
            };
        default:
            return state;
    }

}
