import {Action} from '@ngrx/store';
import {ScrollConstants} from "../constants/scroll.constants";


export class Scroll{
  scroll: any;
  scrollHeight = 0;
  clientHeight = 0;
  scrollTop = 0;
}

export class ScrollAction implements Action {
    readonly type: string = ScrollConstants.SCROLLING_DOWN;
    scroll: Scroll = {
      scroll: null,
      scrollHeight: 0,
      clientHeight: 0,
      scrollTop: 0,
    };

    constructor(scroll: Scroll) {
        this.scroll = scroll ;
    }
}
