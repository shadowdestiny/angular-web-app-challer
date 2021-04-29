import {UserInvitedModel} from './user.invited.model';
import {EstatusModel} from './estatus.model';

export interface InvitationModel {
  id: number;
  estatus: EstatusModel;
  challengeId: number;
  userInvited: UserInvitedModel;
  createDate: string;
  updateDate: string;
}
