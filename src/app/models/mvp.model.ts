import {MvpHeadModel} from './mvp.head.model';

export interface MvpModel {
  'id'?: number;
  'name'?: string;
  'lastName'?: string;
  'nickname'?: string;
  'photo'?: string;
  'email'?: string;
  'head'?: MvpHeadModel;
}
