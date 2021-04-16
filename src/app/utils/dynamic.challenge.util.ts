import * as moment from 'moment';
import {TimeFormat} from '../enum/time-format.enum';
import {ChallengeProfileModel} from '../models/challenge.profile.model';

export class DynamicChallengeUtil {

    constructor() {
    }

    private orderReference(challengeToRender: Array<ChallengeProfileModel>) {
        challengeToRender.sort((a, b) => {
            let result;
            if (!!a.dateOrder) {
                const timeA = moment(a.dateOrder, TimeFormat.STANDARD);
                const timeB = moment(b.dateOrder, TimeFormat.STANDARD);
                result = timeB.valueOf() - timeA.valueOf();
            } else {
                result = b.id - a.id;
            }
            return result;
        });
    }

    public changeState(challenges: Array<ChallengeProfileModel>,
                       challengeToRender: Array<ChallengeProfileModel>,
                       isReverse = false, isPushNotification = false): void {

        this.addRowOrRefresh(challenges, challengeToRender, isReverse);
        if (isPushNotification) {
            this.deleteRows(challenges, challengeToRender);
        }
        this.orderReference(challengeToRender);
    }

    private addRowOrRefresh(challenges: Array<ChallengeProfileModel>,
                            challengeToRender: Array<ChallengeProfileModel>,
                            isReverse = false) {
        challenges.forEach((challengeProfileModel: ChallengeProfileModel, i) => {
            const indexChallenge = challengeToRender.findIndex((chall: ChallengeProfileModel) => chall.id === challengeProfileModel.id);
            if (indexChallenge < 0) {
                if (isReverse) {
                    challengeToRender.unshift(challengeProfileModel);
                } else {
                    challengeToRender.push(challengeProfileModel);
                }
            } else {
                if (!!challengeToRender[indexChallenge].estatus && !!challengeProfileModel.estatus) {
                    if (challengeToRender[indexChallenge].estatus.code !== challengeProfileModel.estatus.code) {
                        challengeToRender[indexChallenge] = {...challengeProfileModel};
                    }
                }
                if (challengeToRender[indexChallenge].imagePreview !== undefined && challengeProfileModel.imagePreview !== undefined ) {
                    if (challengeToRender[indexChallenge].imagePreview !== challengeProfileModel.imagePreview) {
                        challengeToRender[indexChallenge] = {...challengeProfileModel};
                    }
                }
            }
        });
    }

    private deleteRows(challenges: Array<ChallengeProfileModel>,
                       challengeToRender: Array<ChallengeProfileModel>) {
        const toDeletedForIndex: Array<number> = [];
        challengeToRender.forEach((challToRender: ChallengeProfileModel, i) => {
            if (!challenges.find((chall: ChallengeProfileModel) => chall.id === challToRender.id)) {
                toDeletedForIndex.push(challengeToRender.map((o) => o.id).indexOf(challToRender.id));
            }
        });

        toDeletedForIndex.forEach((toDelChallenge: number, i) => {
            if (toDelChallenge > -1) {
                challengeToRender.splice(toDelChallenge, 1);
            }
        });
    }
}
