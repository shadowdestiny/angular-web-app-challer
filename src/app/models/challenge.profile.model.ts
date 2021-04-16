import {EstatusModel} from './estatus.model';
import {CategoryChallerModel} from './category.challer.model';


interface ChallengeProfileModel {
    'id': number;
    'imagePreview': string;
    'finalDate'?: string;
    'votePublicFinalDate'?: string;
    'systemDate'?: string;
    'estatus'?: EstatusModel;
    'userWinnerId'?: number;
    'category'?: CategoryChallerModel;
    'requestedUserId'?: number | string;
    'dateOrder'?: string;
    'acceptDate'?: string;
    'finalDateServer'?: string;
    'votePublicFinalDateServer'?: string;
    'isWinner'?: boolean;
}

interface ChallengeArchivedModel extends ChallengeProfileModel {
    selected: boolean;
}

export {ChallengeProfileModel, ChallengeArchivedModel};
