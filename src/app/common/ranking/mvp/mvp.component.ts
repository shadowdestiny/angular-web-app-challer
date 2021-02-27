import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Paginator} from '../../../utils/paginator';
import {UserMvpModel} from '../../../models/user.mvp.model';
import {MvpModel} from '../../../models/mvp.model';
import {TypeHeadConstants} from '../../../constants/type.head.constants';
import {ListRankingComponent} from '../../../component/list-ranking/list-ranking.component';
import {RankingService} from '../../../service/ranking.service';
import {ConfigurationService} from '../../../service/configuration.service';

@Component({
  selector: 'app-mvp',
  templateUrl: './mvp.component.html',
  styleUrls: ['./mvp.component.scss']
})
export class MvpComponent implements OnInit {

  paginatorMVP: Paginator;
  paginatorPosition: Paginator;
  listUserMvp: Array<UserMvpModel> = [];
  mvpHead: MvpModel;
  typeSelectList = TypeHeadConstants.MVP.toString();
  scrollMe: any = null;
  isScrollUp = true;
  @ViewChild(ListRankingComponent, {static: false}) listRankingComponent: ListRankingComponent;
  @Input() isAll = true;
  @Input() isMobil = false;
  limitByPage = 10;


  constructor(
    private rankingService: RankingService,
    private activeRouter: ActivatedRoute,
    private configurationService: ConfigurationService,
  ) {
    this.paginatorMVP = new Paginator(0, this.limitByPage, 100);
    this.paginatorPosition = new Paginator(0, this.limitByPage, 100);
    if (!!activeRouter.snapshot.paramMap.get('all')) {
      this.isAll = true;
    }
  }

  ngOnInit() {
    this.loadHead();
    this.configurationService.refreshConfiguration(() => {
      this.loadListMvp(0, true);
    });
    if (this.typeSelectList === TypeHeadConstants.MVP) {

    } else {
      // this.loadListPosition();
    }
  }

  private loadHead() {
    /*this.rankingService.getHeadMvp().subscribe((data: MvpModel) => {
      this.mvpHead = data;
    });*/
  }

  private loadListMvp(page = 0, isUp = false) {
    this.rankingService
      .getLisPosition(this.limitByPage, page, this.isAll ? true : this.paginatorMVP.isPresentUser())
      .subscribe((data: any) => {

      let actualPage = 0;
      let totalPage = 0;

      let users: Array<UserMvpModel> = [];
      if (!!data.mvpList && !!data.mvpList.users){
        users = data.mvpList.users;
        this.mvpHead = data.head.userMvp;
        actualPage = data.mvpList.actualPage;
        totalPage = data.mvpList.cuantos;
      }
      if (isUp) {
        const listUserMvp: Array<UserMvpModel> = [];
        users.forEach((element: UserMvpModel) => {
          listUserMvp.push(element);
        });
        this.listUserMvp = [...listUserMvp, ...this.listUserMvp];
      } else {
        users.forEach((element: UserMvpModel) => {
          this.listUserMvp.push(element);
        });
      }
      this.paginatorMVP.setTotalRowFromService(Number(totalPage));
      this.paginatorMVP.setCurrentPageUp(actualPage);
    });
  }

  private loadListPosition(page = 0, isUp = false) {
    // tslint:disable-next-line:max-line-length
    this.rankingService.getLisPosition(this.limitByPage, page, this.isAll ? true : this.paginatorPosition.isPresentUser()).subscribe((data: any) => {
      const users: Array<UserMvpModel> = data.users;
      if (isUp) {
        const listUserPosition: Array<UserMvpModel> = [];
        users.forEach((element: UserMvpModel) => {
          listUserPosition.push(element);
        });
        this.listUserMvp = [...listUserPosition, ...this.listUserMvp];
      } else {
        users.forEach((element: UserMvpModel) => {
          this.listUserMvp.push(element);
        });
      }
      this.paginatorPosition.setTotalRowFromService(Number(data.total_items_users));
      this.paginatorPosition.setCurrentPageUp(data.actual_page);
    });
  }

  onScroll(scrollMe) {

    this.scrollMe = scrollMe;

    this.paginatorMVP.paginateDown(scrollMe, (page) => {
      console.log("hola2");
      if (this.typeSelectList === TypeHeadConstants.MVP) {
        this.loadListMvp(page);
      }
    });

    this.paginatorPosition.paginateDown(scrollMe, (page) => {
      console.log("hola");
      if (this.typeSelectList === TypeHeadConstants.POSITION) {
        this.loadListPosition(page);
      }
    });

    this.paginatorMVP.paginateUp(scrollMe, (page) => {
      if (this.typeSelectList === TypeHeadConstants.MVP) {
        this.loadListMvp(page, true);
      }
    });

    this.paginatorPosition.paginateUp(scrollMe, (page) => {
      if (this.typeSelectList === TypeHeadConstants.POSITION) {
        this.loadListPosition(page, true);
      }
    });
  }

  onSelectTypeList(type: string) {
    this.typeSelectList = type;
    this.listUserMvp = [];

    if (this.isAll) {
      this.listRankingComponent.scrollTop = 0;
    } else {
      this.listRankingComponent.focus();
    }
    if (type === TypeHeadConstants.MVP) {
      this.isScrollUp = true;
      this.paginatorMVP.resetPaginator(0, this.scrollMe);
      this.loadListMvp();
    } else {
      this.isScrollUp = true;
      this.paginatorPosition.resetPaginator(0, this.scrollMe);
      this.loadListPosition();
    }
  }

}
