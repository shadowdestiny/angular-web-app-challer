import {Action} from '@ngrx/store';
import {ModalConstants} from '../constants/modal.constants';


export class Modal {
  param: any;
}

export class ModalAction implements Action {
  type: string = ModalConstants.CLOSE;
  modal: Modal = {
    param: null,
  };

  constructor(modal: Modal) {
    this.modal = modal;
  }
}
