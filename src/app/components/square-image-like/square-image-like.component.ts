import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChallengeProfileModel} from '../../../model/challenge.profile.model';

@Component({
  selector: 'app-square-image-like',
  templateUrl: './square-image-like.component.html',
  styleUrls: ['./square-image-like.component.scss'],
})
export class SquareImageLikeComponent implements OnInit, OnChanges {

  @Input() challenge: ChallengeProfileModel;
  @Input() isVideoEmpty = false;
  @Output() selectChallenge = new EventEmitter<ChallengeProfileModel>();
  timeEnd;
  isHideChronometer = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.challenges) {
      this.challenge = changes.challenge.currentValue;
    }
    this.init();
  }

  ngOnInit() {
    this.init();

  }

  init() {
  }

  OnSelectChallenge(challenge: ChallengeProfileModel) {
    this.selectChallenge.emit(challenge);
  }

}
