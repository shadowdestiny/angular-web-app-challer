import {CloudConstants} from "../constants/cloud.constants";
import {CloudAction} from "../actions/cloud.action";

export const OPEN = CloudConstants.OPEN;
export const CLOSE = CloudConstants.CLOSE;

export const initialState = {
  cloud: CLOSE,
};

export interface CloudState {
  cloud : string;
}


export function cloudReducer(state: CloudState = initialState, action: CloudAction) {
  switch ((action.type)) {
    case OPEN:
      return {
        status: OPEN,
      };
    case CLOSE:
      return {
        status: CLOSE,
      };
    default:
      return state;
  }

}
