import {Action} from '@ngrx/store';
import {ResizeConstants} from "../constants/resize.constants";


export class Resize{
  width: number;
  height: number;
  isMobile: boolean;
  isIos: boolean;
  isAndroid: boolean;
}

export class ResizeAction implements Action {
    type: string = ResizeConstants.STOP;
    resize: Resize = {
      width: 0,
      height: 0,
      isMobile: false,
      isIos: false,
      isAndroid: false,
    };

    constructor(resize: Resize) {
        this.resize = resize;
    }
}
