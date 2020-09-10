import {Action} from '@ngrx/store';
import {BodyConstants} from '../constants/body.constants';


export class Body{
  param: any;
}

export class BodyAction implements Action {
    type: string = BodyConstants.DEFAULT;
    body: Body = {
      param: null,
    };

    constructor(body: Body) {
        this.body = body;
    }
}
