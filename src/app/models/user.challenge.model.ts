export interface UserChallengeModel {
  'id': number;
  'name': string;
  'lastName'?: string;
  'nickname'?: string;
  'photo': string;
  'email'?: string;
  'iam'?: boolean;
  'yearOld'?: number;
  'flagCountry'?: any;
  vote?: number;
  isblocked?: boolean;
}
