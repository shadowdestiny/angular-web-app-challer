import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChallengeProfileModel} from '../../../../../models/challenge.profile.model';
import {ChallengeModel} from '../../../../../models/challenge.model';
import {Paginator} from '../../../../../../lib/paginator';
import {ChallengeService} from '../../../../../service/challenge.service';
import {ApiGeolocationService} from '../../../../../service/api-geolocation.service';
import {GeolocationModel} from '../../../../../models/geolocation.model';
import {ConfigurationService} from '../../../../../service/configuration.service';
import {ChallengeStatus} from '../../../../../enum/challenge-status.enum';
import {get} from 'lodash';
import {BiographyDataModel} from '../../../../../models/biography.data.model';
import {StadisticModel} from '../../../../../models/stadistic.model';
import {ScrollConstants} from '../../../../../store/constants/scroll.constants';
import {Subscription} from 'rxjs';
import {StoreService} from '../../../../../service/store.service';
import {Router} from '@angular/router';
import {ResizeConstants} from '../../../../../store/constants/resize.constants';
import {VideoConstants} from '../../../../../store/constants/video.constants';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnInit, OnDestroy{

  @Input() biography: BiographyDataModel;
  @Input() userid: any;

  index = 0;
  slideIsVisible = [true, false, true];
  isReverse = false;
  isResetData = false;
  isReady = true;
  typeView = 'myChallenge';
  isScrollDownload = false;

  challenges: Array<ChallengeProfileModel> = [];
  challengesLike: Array<ChallengeProfileModel> = [];
  myChallenges: Array<ChallengeProfileModel> = [];
  myChallengesActive: Array<ChallengeProfileModel> = [];
  challengesInvitation: Array<ChallengeModel> = [];
  myVotesChallers: Array<ChallengeProfileModel> = [];
  subscribes: Subscription[] = [];

  /* push firebase */
  isPushChallenges = false;
  isPushChallengesLike = false;
  isPushMyCreatedChallenges = false;
  isPushMyChallengesActive = false;
  isMyVotesChaller = false;

  paginator: Paginator;
  paginatorMyLike: Paginator;
  paginatorInvitation: Paginator;
  paginatorMyChallenge: Paginator;
  paginatorMyChallengeActive: Paginator;
  myVotesChallerPaginator: Paginator;
  limit = 18;
  limitInvitation = 10;
  limitMyChallenge = 10;
  limitMyChallengeActive = 10;
  limitMyVotesChallerPaginator = 18;
  isReverseMyChallenge = false;
  isReverseMyChallengeActive = false;
  itsMe = false;
  isTable = false;
  top = 0;

  innerWidth;
  innerHeight;
  isMobile = false;
  isFirst = true;
  isAndroid = false;

  public optionsScore: StadisticModel = {porcentaje: '0', mvp: 0, points: 0, inRanking: false};

  public loading = {
    myChallenge: true,
    mosaicMyLikeChallenge: true,
    myChallenges: true,
    myChallengesActive: true,
    myVotesChaller: true,
  };

  constructor(
    private challengeService: ChallengeService,
    private geoLocation: ApiGeolocationService,
    private configuration: ConfigurationService,
    private store: StoreService,
    private router: Router,
  ) {
    this.paginator = new Paginator(0, this.limit);
    this.userid = this.biography?.user_id;
  }

  ngOnInit(): void {
    this.configuration.refreshConfiguration(() => {
      this.getProfile();
      this.currentSlide();
      this.getResize();
    });
    this.getScroll();
  }

  getProfile() {
    const stadistic = this.challengeService.getStadistic(this.biography.user_id.toString()).subscribe((data: any) => {
      stadistic.unsubscribe();
      this.optionsScore = {
        porcentaje: get(data.score, 'porcentaje', ''),
        mvp: get(data.score, 'porcentaje', ''),
        points: get(data.score, 'universo', ''),
        inRanking: get(data.user, 'inRanking', '')
      };
    });
  }

  pushUpdate(isPush: boolean = true) {
    this.currentSlide(isPush, false);
  }

  currentSlide(isPush = false, isReset = false, isLocal = false, isFromSlide = false) {
    if (isReset) {
      this.resetData();
    }
    this.isResetData = true;
    switch (this.index) {
      case 0:
        this.typeView = 'myChallenge';
        this.getMosaic(0, this.limit, isPush, isLocal);
        break;
      case 1:
        this.typeView = 'mosaicMyLikeChallenge';
        this.getMosaicLike(0, this.limit, isPush);
        break;
      case 2:
        this.typeView = 'carouselChallenge';
        this.myChallengesCreated(0, this.limitMyChallenge, isPush && !isFromSlide);
        this.getMyChallengeActive(0, this.limitMyChallengeActive, isPush && !isFromSlide);
        break;
      case 3:
        this.typeView = 'myVotesChaller';
        this.getMyVotesChaller(0, this.limitMyVotesChallerPaginator, isPush);
        break;
    }
  }

  private setTimeOrder(challenges: Array<ChallengeProfileModel> = []): Array<ChallengeProfileModel> {
    challenges.forEach((challenge: ChallengeProfileModel) => {
      switch (challenge.estatus.code) {
        case ChallengeStatus.FINISHED:
          challenge.dateOrder = challenge.acceptDate;
          break;
        case ChallengeStatus.FINISH_INCOMPLETE:
          challenge.dateOrder = challenge.finalDate;
          break;
        case ChallengeStatus.CLOSED:
          challenge.dateOrder = challenge.votePublicFinalDate;
          break;
      }
    });
    return challenges;
  }

  private saveTimer(challenges: any = []) {
    const systemDate = get(challenges, '[0].systemDateServer', get(challenges, '[0].timer.timeSystem'));
    if (systemDate) {
      // this.timerServer.setTime(systemDate);
    }
  }

  getMosaic(page = null, items: number = this.limit, isPush = false, fromChallerDetail = false) {
    this.loading.myChallenge = true;
    // const url = this.repositoryService.ROUTE.CHALLENGE_MOSAIC;
    let pageDefault = page;
    let itemsDefault = items;

    if (isPush) {
      pageDefault = 0;
      itemsDefault = this.paginator.getItemsCount();
    }

    this.geoLocation.locationByGoogle((geo: GeolocationModel) => {
      const mosaic = this.challengeService.getChallengeMosaic(this.biography.user_id.toString(), pageDefault, itemsDefault, 0, geo.lat, geo.lng).subscribe((data: any) => {
        mosaic.unsubscribe();

        const total_items_challenges = data.total_items_challenges;
        let challenges = data.challenges;

        if (!!challenges) {
          challenges = this.setTimeOrder(challenges);
          this.isPushChallenges = this.isReverse = isPush;
          this.challenges = [...challenges];
          console.log(total_items_challenges);
          this.paginator.setTotalRowFromService(Number(total_items_challenges));
          this.saveTimer(challenges);

          /*if (fromChallerDetail && this.myChallenge) {
            this.myChallenge.init(this.challenges);
          }*/
        }
        this.loading.myChallenge = false;
        console.log(data);
      });
    });


    /*this.locate.getCurrentPosition().then((data: Location) => {
      this.repositoryService.get({
        url,
        no_token: false,
        urlParams: [{user: this.userid}],
        urlSearchParams: [{page: pageDefault}, {items: itemsDefault}, {type: 0},
          {lat: data.lat}, {lng: data.lng}],
      }, ({challenges, total_items_challenges}) => {

        if (!!challenges) {
          challenges = this.setTimeOrder(challenges);
          this.isPushChallenges = this.isReverse = isPush;
          this.challenges = [...challenges];
          this.paginator.setTotalRowFromService(Number(total_items_challenges));
          this.saveTimer(challenges);

          if (fromChallerDetail && this.myChallenge) {
            this.myChallenge.init(this.challenges);
          }
        }
        this.loading.myChallenge = false;
      });
    });*/
  }

  getMosaicLike(page = 0, items: number = this.limit, isPush = false, fromChallerDetail = false) {
    this.loading.mosaicMyLikeChallenge = true;
    let pageDefault = page;
    let itemsDefault = items;

    if (isPush) {
      pageDefault = 0;
      itemsDefault = this.paginator.getItemsCount();
    }
    this.geoLocation.locationByGoogle((geo: GeolocationModel) => {
      const mosaic = this.challengeService.getChallengeLike(this.biography.user_id.toString(), pageDefault, itemsDefault, 0, geo.lat, geo.lng).subscribe((data: any) => {
        mosaic.unsubscribe();

        const total_items_challengelike = data.total_items_challengelike;
        const challenge_likes = data.challenge_likes;

        const challengeLikes: Array<any> = challenge_likes;
        const challenges: Array<ChallengeProfileModel> = [];
        if (!!challenge_likes) {
          challengeLikes.forEach((challengeLike, i) => {
            challenges.push({
              id: challengeLike.challengeId,
              imagePreview: challengeLike.imagePreviewUrl
            });
          });
          this.isPushChallengesLike = this.isReverse = isPush;
          this.challengesLike = [...challenges];
          this.paginatorMyLike.setTotalRowFromService(Number(total_items_challengelike));
          this.saveTimer(challenges);

          /*if (fromChallerDetail && this.mosaicMyLikeChallenge) {
            this.mosaicMyLikeChallenge.init(this.challengesLike);
          }*/
        }
        this.loading.mosaicMyLikeChallenge = false;
      });
    });

    /* this.locate.getCurrentPosition().then((data: Location) => {
       this.repositoryService.get({
         url: this.repositoryService.ROUTE.CHALLENGE_MOSAIC_LIKE,
         no_token: false,
         urlParams: [{user: this.userid, user2: this.userid}],
         urlSearchParams: [{page: pageDefault}, {items: itemsDefault},
           {lat: data.lat}, {lng: data.lng},
         ],
       }, ({challenge_likes, total_items_challengelike}) => {

         const challengeLikes: Array<any> = challenge_likes;
         const challenges: Array<ChallengeProfileModel> = [];
         if (!!challenge_likes) {
           challengeLikes.forEach((challengeLike, i) => {
             challenges.push({
               id: challengeLike.challengeId,
               imagePreview: challengeLike.imagePreviewUrl
             });
           });
           this.isPushChallengesLike = this.isReverse = isPush;
           this.challengesLike = [...challenges];
           this.paginatorMyLike.setTotalRowFromService(Number(total_items_challengelike));
           this.saveTimer(challenges);

           if (fromChallerDetail && this.mosaicMyLikeChallenge) {
             this.mosaicMyLikeChallenge.init(this.challengesLike);
           }
         }
         this.loading.mosaicMyLikeChallenge = false;
       });
     });*/
  }

  myChallengesCreated(page = 0, items: number = this.limitMyChallenge, isPush = false) {
    this.loading.myChallenges = true;
    /*const url = this.repositoryService.ROUTE.CHALLENGE_MOSAIC;
    let pageDefault = page;
    let itemsDefault = items;

    if (isPush) {
      pageDefault = 0;
      itemsDefault = this.paginatorMyChallenge.getItemsCount();
    }

    this.locate.getCurrentPosition().then((data: Location) => {
      this.repositoryService.get({
        url,
        no_token: false,
        urlParams: [{user: this.userid}],
        urlSearchParams: [{page: pageDefault}, {items: itemsDefault}, {type: 2},
          {lat: data.lat}, {lng: data.lng}],
      }, ({challenges, total_items_challenges}) => {
        if (!!challenges) {
          this.isPushMyCreatedChallenges = this.isReverseMyChallenge = isPush;
          // this.isAnimationCreated = !isPush;
          challenges = this.setTimeOrder3(challenges);
          this.myChallenges = [...challenges];
          this.paginatorMyChallenge.setTotalRowFromService(Number(total_items_challenges));
          this.saveTimer(challenges);
        }
        this.loading.myChallenges = false;
      });
    });*/
  }

  getMyVotesChaller(page = null, items: number = this.limit, isPush = false, fromChallerDetail = false) {
    this.loading.myVotesChaller = true;
    // const url = this.repositoryService.ROUTE.CHALLENGE_MOSAIC;
    let pageDefault = page;
    let itemsDefault = items;

    if (isPush) {
      pageDefault = 0;
      itemsDefault = this.myVotesChallerPaginator.getItemsCount();
    }

    /*this.locate.getCurrentPosition().then((data: Location) => {
      this.repositoryService.get({
        url,
        no_token: false,
        urlParams: [{user: this.userid}],
        urlSearchParams: [{page: pageDefault}, {items: itemsDefault}, {type: 3},
          {lat: data.lat}, {lng: data.lng}],
      }, ({challenges, total_items_challenges}) => {
        if (!!challenges) {
          challenges = this.setTimeOrder2(challenges);
          this.isMyVotesChaller = this.isReverse = isPush;
          this.myVotesChallers = [...challenges];
          this.myVotesChallerPaginator.setTotalRowFromService(Number(total_items_challenges));

          this.saveTimer(challenges);

          if (fromChallerDetail && this.myVotesChaller) {
            this.myVotesChaller.init(this.myVotesChallers);
          }
        }
        this.loading.myVotesChaller = false;
      });
    });*/
  }

  private getMyChallengeActive(page = 0, items: number = this.limitMyChallengeActive, isPush = false) {
    this.loading.myChallengesActive = true;
    /*const url = this.repositoryService.ROUTE.CHALLENGE_MOSAIC;

    let pageDefault = page;
    let itemsDefault = items;

    if (isPush) {
      pageDefault = 0;
      itemsDefault = this.paginatorMyChallengeActive.getItemsCount();
    }

    this.locate.getCurrentPosition().then((data: Location) => {
      this.repositoryService.get({
        url,
        no_token: false,
        urlParams: [{user: this.userid}],
        urlSearchParams: [{page: pageDefault}, {items: itemsDefault}, {type: 1},
          {lat: data.lat}, {lng: data.lng}
        ],
      }, ({challenges, total_items_challenges}) => {
        if (!!challenges) {
          this.isPushMyChallengesActive = this.isReverseMyChallengeActive = isPush;
          // this.isAnimationActive = !isPush;
          this.myChallengesActive = [...challenges];
          this.paginatorMyChallengeActive.setTotalRowFromService(Number(total_items_challenges));

          this.saveTimer(challenges);
        }
        this.loading.myChallengesActive = false;
      });
    });*/
  }

  resetData() {
    this.challenges = [];
    this.myChallenges = [];
    this.myChallengesActive = [];
    this.challengesLike = [];
    this.myVotesChallers = [];
    this.paginator.resetPaginator();
    this.paginatorMyLike.resetPaginator();
    this.paginatorMyChallenge.resetPaginator();
    this.paginatorMyChallengeActive.resetPaginator();
    this.myVotesChallerPaginator.resetPaginator();
  }

  onSelectSlide(index: number) {
    if (this.index === index) {
      return;
    }
    let indexAux: number = index;
    switch (index) {
      case 1:
        indexAux = this.slideIsVisible[index] ? 2 : 1;
        break;
      case 2:
        indexAux = this.slideIsVisible[index] ? 1 : 2;
        break;
    }
    this.index = indexAux;
    this.currentSlide();
  }

  onReady(isReady: boolean) {
    this.isReady = isReady;
  }

  public onScroll(event = null, fromChallerDetail = false) {
    if (this.typeView === 'myChallenge') {
      this.paginator.paginateDownFromLibrary((page, limit) => {
        this.getMosaic(page, limit, false, fromChallerDetail);
      });
    } else if (this.typeView === 'mosaicMyLikeChallenge') {
      this.paginatorMyLike.paginateDownFromLibrary((page, limit) => {
        this.getMosaicLike(page, limit, false, fromChallerDetail);
      });
    } else if (this.typeView === 'myVotesChaller') {
      this.myVotesChallerPaginator.paginateDownFromLibrary((page, limit) => {
        this.getMyVotesChaller(page, limit, false, fromChallerDetail);
      });
    }
  }

  getScroll() {
    this.subscribes.push(this.store.getScrollStore().subscribe((data: any) => {
      if (data.status === ScrollConstants.ALL_SCROLLING) {
        //
      }
      if (data.status === ScrollConstants.SCROLLING_DOWN) {
        this.onScroll();
      }
    }));
  }

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

  onAbout() {
    this.router.navigate(['/about-us']);
  }

  onMision() {
    this.router.navigate(['/mision']);
  }

  onStory() {
    this.router.navigate(['/story']);
  }

  onBusiness() {
    this.router.navigate(['/business']);
  }

  onCondition() {
    this.router.navigate(['/policy']);
  }

  getResize() {
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.isScrollDownload = data.resize.height < 590;
        this.isTable = data.resize.width < 992;
        this.innerHeight = data.resize.height - 0;
        this.innerWidth = data.resize.width;
        this.isFirst = false;
        this.isMobile = data.resize.isMobile;
        this.isAndroid = data.resize.isAndroid;
      }
    }));
  }


}
