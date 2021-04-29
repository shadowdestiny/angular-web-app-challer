import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChallengeStatus} from '../../../enum/challenge-status.enum';
import {ChallengeProfileModel} from '../../../model/challenge.profile.model';
import {ApiChallengeService} from '../../../service/api/api-challenge.service';
import {HttpStatus} from '../../../enum/http/http-status.enum';
import {SqliteModel} from '../../../model/sqlite.model';
import {fieldExistis} from '../../../library/functions';
import {ChallengeLibrary} from '../../../library/challenge.library';

@Component({
    selector: 'app-square-image',
    templateUrl: './square-image.component.html',
    styleUrls: ['./square-image.component.scss'],
})
export class SquareImageComponent implements OnInit, OnChanges {

    @Input() challenge: ChallengeProfileModel;
    @Input() isVideoEmpty = false;
    @Input() icon = 'default';
    @Input() type = 'default';
    @Input() isShowClose = false;
    @Output() selectChallenge = new EventEmitter<ChallengeProfileModel>();
    @Output() pushUpdate = new EventEmitter();
    public timeEnd;
    public isShowDate = true;
    public isHideChronometer = false;

    constructor(
        private apiChallange: ApiChallengeService,
        private challengeService: ChallengeLibrary,
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!!changes.challenges) {
            this.challenge = changes.challenge.currentValue;
        }
        if (!!changes.icon) {
            this.icon = changes.icon.currentValue;
        }
        if (!!changes.isVideoEmpty) {
            this.isVideoEmpty = changes.isVideoEmpty.currentValue;
        }
        this.init();
    }

    ngOnInit() {
        this.init();
    }

    init() {
        if (this.icon === 'cop') {
            this.isShowDate = false;
        } else if (!!this.challenge) {
            this.timeEnd = this.challenge.finalDate;
            switch (this.challenge.estatus.code) {
                case ChallengeStatus.IN_PROGRESS:
                    this.timeEnd = this.challenge.finalDate;
                    break;
                case ChallengeStatus.BOTH_USER_UPLOAD_VIDEO:
                    this.timeEnd = this.challenge.finalDate;
                    break;
                case ChallengeStatus.CLOSED:
                    this.timeEnd = this.challenge.votePublicFinalDate;
                    break;
                case ChallengeStatus.FINISHED:
                    this.isHideChronometer = true;
                    break;
                default:
                    this.isHideChronometer = true;
                    break;
            }
        }
    }

    OnSelectChallenge(challenge: ChallengeProfileModel) {
        this.selectChallenge.emit(challenge);
    }

    public refreshChallenge(target?: any) {
        this.pushUpdate.emit();
    }

    deleteChaller(event) {
        event.stopPropagation();
        const callback = () => {
            // this.pushUpdate.emit();
        };
        this.challengeService.removeCreatedChallenge({id: this.challenge.id, callback});
    }

}
