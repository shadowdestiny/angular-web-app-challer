import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {get} from 'lodash';
import {ChallengeProfileModel} from '../../../../../models/challenge.profile.model';
import {ChallengeStatus} from '../../../../../enum/challenge-status.enum';

@Component({
  selector: 'app-icon-status',
  templateUrl: './icon-status.component.html',
  styleUrls: ['./icon-status.component.scss'],
})
export class IconStatusComponent implements OnInit, OnChanges {

  @Input() challenge: ChallengeProfileModel;
  @Input() iconType = 'default';

  @Input() userId;
  /*get userId() {
    throw new Error('Attribute "userId" is required');
  }*/

  src = '';
  typeIconTime = '';

  constructor(
    // private store: StoreLibrary
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.challenges) {
      this.challenge = changes.challenge.currentValue;
    }
    if (!!changes.iconType) {
      this.iconType = changes.iconType.currentValue;
    }
    this.init();
  }

  init() {
    // alert(this.userId);
    const currentUserId = this.userId;
    const src = 'assets/imgs/components/square-image/';
    switch (this.iconType) {
      case 'default':
        this.mosaicDefault(src, currentUserId);
        break;
      case 'cop' :
        this.src = src + 'type/' + 'icono_reto.svg';
        break;
      case 'vote_mosaic' :
        this.mosaicVote(src, currentUserId);
        break;
    }
  }

  mosaicVote(src: string, currentUserId: any) {
    switch (this.challenge.estatus.code) {
      case ChallengeStatus.IN_PROGRESS:
        if (this.challenge.imagePreview !== '' && this.challenge.imagePreview !== null) {
          this.src = src + 'status/CAM_CHALL.svg';
        }
        break;
      case ChallengeStatus.BOTH_USER_UPLOAD_VIDEO:
        this.src = src + 'status/UPLOAD_VIDEO.svg';
        this.typeIconTime = 'reload';
        break;
      case ChallengeStatus.CLOSED:
        break;
      case ChallengeStatus.FINISH_INCOMPLETE:
      case ChallengeStatus.FINISHED:
        if (this.challenge?.isWinner) {
          this.src = src + 'status/WINNER_VOTED.svg';
        } else {
          this.src = '';
        }
        break;
    }
  }

  mosaicDefault(src: string, currentUserId: any) {
    switch (this.challenge.estatus.code) {
      case ChallengeStatus.IN_PROGRESS:
        if (this.challenge.imagePreview !== '' && this.challenge.imagePreview !== null) {
          this.src = src + 'status/CAM_CHALL.svg';
        }
        break;
      case ChallengeStatus.BOTH_USER_UPLOAD_VIDEO:
        this.src = src + 'status/UPLOAD_VIDEO.svg';
        this.typeIconTime = 'reload';
        break;
      case ChallengeStatus.CLOSED:
        /* chal-721 se quita logica de votos en los iconos */
        /*this.src = src + 'status/VOTE_CHALL.svg';
        this.typeIconTime = 'vote';*/
        break;
      case ChallengeStatus.FINISH_INCOMPLETE:
      case ChallengeStatus.FINISHED:
        if (typeof this.challenge.userWinnerId === 'number') {
          if (`${this.challenge.userWinnerId}` === `${currentUserId}`) {
            this.src = src + 'status/CHECK_CHALL.svg';
          }
          /*  else {
               this.src = src + 'status/X_CHALL.svg';
           } */
        } else {
          this.src = '';
          /* chal-721 se quita logica de votos en los iconos */
          // this.src = src + 'status/X_CHALL.svg';
        }
        break;
    }
  }

  ngOnInit() {
    this.init();
  }

}
