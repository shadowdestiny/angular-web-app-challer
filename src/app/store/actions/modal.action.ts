import {Action} from '@ngrx/store';
import {ModalConstants} from '../constants/modal.constants';


export class Modal {
  typeForm: number;
}

export class ModalAction implements Action {
  type: string = ModalConstants.CLOSE;
  modal: Modal = {
    typeForm: null,
  };

  constructor(modal: Modal) {
    this.modal = modal;
  }
}
