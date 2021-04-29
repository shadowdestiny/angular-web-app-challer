import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Router} from '@angular/router';
import {TypeHeadConstants} from '../../constants/type.head.constants';
import {HeadInterface} from '../../models/head.interface';
import {UserMvpModel} from '../../models/user.mvp.model';

@Component({
  selector: 'app-top-ranking-header',
  templateUrl: './top-ranking-header.component.html',
  styleUrls: ['./top-ranking-header.component.scss']
})
export class TopRankingHeaderComponent implements OnInit, OnChanges {

  @Input() type = TypeHeadConstants.MVP;
  @Input() title = 'RANKING';
  @Input() mvpHead: UserMvpModel;
  @Output() typeSelected = new EventEmitter<string>();
  isFront = false;
  typeRadius = 'mark-7';
  typeRadiusMin = 'mark-0';

  head: HeadInterface;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  private selectHead() {
    if (this.type === TypeHeadConstants.MVP) {
      console.log(this.mvpHead);
      this.head = {
        id: this.mvpHead.id,
        userImg: this.mvpHead.photo,
        yearOld: this.mvpHead.yearOld,
        sportName: this.mvpHead.sportUser.name,
        sportImage: this.mvpHead.sportUser.image_url_selected,
        // otherViewImage: this.mvpHead.head.userPosition.photo,
        name: this.mvpHead.name,
        lastName: this.mvpHead.lastName,
        up: this.mvpHead.up,
        flagCountry: this.mvpHead.flagCountry
      };
      this.isFront = false;
    }
    this.isFront = true;
  }

  onClickPosition() {
    this.type = TypeHeadConstants.POSITION;
    this.title = 'POSITION';
    this.typeRadius = 'mark-7-2';
    this.typeRadiusMin = 'mark-0-2';
    this.selectHead();
    this.typeSelected.emit(this.type);
  }

  onClickMVP() {
    this.type = TypeHeadConstants.MVP;
    this.title = 'MVP LIST';
    this.typeRadius = 'mark-7';
    this.typeRadiusMin = 'mark-0';
    this.selectHead();
    this.typeSelected.emit(this.type);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.mvpHead) {
      this.mvpHead = changes.mvpHead.currentValue;
      this.selectHead();
    }
  }

  toProfile(userId: number) {
    this.router.navigate(['/other-profile', userId]);
  }

}
