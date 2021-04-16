import {StatusChallengeModel} from './status.challenge.model';
import {UserChallengeModel} from './user.challenge.model';
import {CategoryModel} from './category.model';
import {ChallengeCreatedModel} from './user.opponent.model';
import {InvitationModel} from './invitation.model';
import {UserAbilitiesModel} from './user.abilities.model';

export interface ChallengeModel {

    'id': number;
    'challengeTypeCode': string;
    'modalityId': number;
    'sportId': number;
    'category'?: CategoryModel;
    userChallenger: UserChallengeModel;
    'userInvited'?: ChallengeCreatedModel;
    'userOpponent'?: ChallengeCreatedModel;
    'estatus': StatusChallengeModel;
    'name'?: string;
    'description'?: string;
    'urlVideo'?: string;
    'urlImage'?: string;
    'beginDate'?: string;
    'finalDate'?: string;
    votePartesBeginDate?: string;
    votePartesFinalDate?: string;
    votePublicBeginDate?: string;
    votePublicFinalDate?: string;
    'hall'?: boolean;
    'userWinnerId': number;
    'systemDate'?: string;
    'createDate'?: string;
    'updateDate'?: string;
    'votedByMe'?: boolean;
    'totalLikes'?: number;
    invitations: Array<InvitationModel>;
    videoCreator: string;
    videoInvited: string;
    'userAbilities'?: Array<UserAbilitiesModel>;
}
