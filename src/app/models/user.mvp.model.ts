import {SportUserModel} from './sport.user.model';

export interface UserMvpModel {
  'id': number;
  'name': string;
  'lastName': string;
  'nickname': string;
  'photo': string;
  'email': string;
  'iam': boolean;
  'value'?: number;
  'up'?: boolean;
  'ranking'?: number;
  'yearOld': number;
  'flagCountry': string;
  'sportUser': SportUserModel;
  'points': string;
}
