import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChallengeStatus} from '../../../../../enum/challenge-status.enum';
import {ChallengeProfileModel} from '../../../../../models/challenge.profile.model';

@Component({
  selector: 'app-square-image-responsive',
  templateUrl: './square-image-responsive.component.html',
  styleUrls: ['./square-image-responsive.component.scss']
})
export class SquareImageResponsiveComponent implements OnInit, OnChanges {

  @Input() challenge: ChallengeProfileModel;
  @Input() isVideoEmpty = false;
  @Input() icon = 'default';
  @Input() type = 'default'; // empty or default, in background
  @Input() from = 'mosaic'; // mosaic or carrousel (carrousel-active, carrousel-created), vote_mosaic
  @Input() isShowClose = false;
  @Input() userId: number;
  @Output() selectChallenge = new EventEmitter<ChallengeProfileModel>();
  @Output() pushUpdate = new EventEmitter();

  @Input() width = 0;
  @Input() height = 0;

  public timeEnd;
  public isShowDate = true;
  public isHideChronometer = false;
  typeTemplateTimer = 'votes';

  constructor(
    // private challengeService: ChallengeLibrary,
    // private store: StoreLibrary,
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
    if (!!changes.from) {
      this.from = changes.from.currentValue;
      if (this.from === 'mosaic' || this.from === 'vote_mosaic') {
        this.typeTemplateTimer = 'votes';
      } else if (this.from === 'carrousel-active') {
        if (this.isVideoEmpty) {
          this.typeTemplateTimer = 'time';
        } else {
          this.typeTemplateTimer = 'reload';
        }
      } else if (this.from === 'carrousel-created') {
      }
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
      this.timeEnd = this.challenge.finalDateServer;
      switch (this.challenge.estatus.code) {
        case ChallengeStatus.IN_PROGRESS:
          this.timeEnd = this.challenge.finalDateServer;
          break;
        case ChallengeStatus.BOTH_USER_UPLOAD_VIDEO:
          this.timeEnd = this.challenge.finalDateServer;
          break;
        case ChallengeStatus.CLOSED:
          this.timeEnd = this.challenge.votePublicFinalDateServer;
          break;
        case ChallengeStatus.FINISHED:
        case ChallengeStatus.FINISH_INCOMPLETE:
          if (this.challenge.votePublicFinalDate !== null) {
            this.timeEnd = this.challenge.votePublicFinalDateServer;
          }
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
      // this.store.setStoreChallenger(ReducerStatusChallengeConstants.DELETED);
    };
    // this.challengeService.removeCreatedChallenge({id: this.challenge.id, callback});
  }

}
