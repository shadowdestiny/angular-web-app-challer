import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {ChallengeService} from '../../../service/challenge.service';
import {AbilitiesModel, HomeChallerModel, VideoOption} from '../../../models/home.challer.model';
import {ConfigurationService} from '../../../service/configuration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Paginator} from '../../../../lib/paginator';
import {StoreService} from '../../../service/store.service';
import {ScrollConstants} from '../../../store/constants/scroll.constants';
import {ResizeConstants} from '../../../store/constants/resize.constants';
import {VideoConstants} from '../../../store/constants/video.constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-challer',
  templateUrl: './home-challer.component.html',
  styleUrls: ['./home-challer.component.scss']
})
  export class HomeChallerComponent implements OnInit, OnDestroy {

  challenges: Array<HomeChallerModel> = [];
  paginator: Paginator;
  limit = 5;

  innerWidth;
  innerHeight;
  isMobile = false;
  isFirst = true;
  top = 0;
  isScrollDownload = false;
  isTable = false;
  isAndroid = false;

  subscribes: Subscription[] = [];

  @ViewChild('vc', {read: ViewContainerRef, static: true}) vc: ViewContainerRef;
  @ViewChild('tpl', {read: TemplateRef, static: true}) tpl: TemplateRef<any>;
  childViewRef: ViewRef;

  challengerId: number;
  isRating = false;

  constructor(
    private challengeService: ChallengeService,
    private configurationService: ConfigurationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: StoreService
  ) {
    this.paginator = new Paginator(0, this.limit);
    this.challengerId = Number(activatedRoute.snapshot.paramMap.get('challenger_id'));
    this.isRating = this.router.url.search('/ranking') >= 0;
  }

  ngOnInit(): void {
    this.configurationService.refreshConfiguration(() => {
      this.getChallenges(0, this.limit);
    });
    this.getResize();
    this.getScroll();

  }

  insertChildView() {
    this.vc.insert(this.childViewRef);
  }

  removeChildView() {
    this.vc.remove();
  }

  resetView() {
    this.childViewRef = this.tpl.createEmbeddedView(null);
    this.removeChildView();
    this.insertChildView();
  }

  getScroll() {
    this.subscribes.push(this.store.getScrollStore().subscribe((data: any) => {
      if (data.status === ScrollConstants.ALL_SCROLLING) {
        setTimeout(() => {
          this.top = data.scroll.scroll.scrollTop;
        }, 600);
      }
      if (data.status === ScrollConstants.SCROLLING_DOWN) {
        this.nextPagination();
      }
    }));
  }

  nextPagination() {
    this.paginator.paginateDownFromLibrary((page, items) => {
      this.getChallenges(page, items);
    });
  }

  getResize() {
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.isScrollDownload = data.resize.height < 590;
        this.isTable = data.resize.width < 992;
        this.innerHeight = data.resize.height - 0;
        this.innerWidth = data.resize.width;
        if (!this.isFirst && this.isMobile !== data.resize.isMobile) {
          this.store.setVideoStore(VideoConstants.PAUSE_ALL);
          window.location.href = window.location.href;
        }
        this.isFirst = false;
        this.isMobile = data.resize.isMobile;
        this.isAndroid = data.resize.isAndroid;
      }
    }));
    this.resetView();
  }

  getMapChaller(challengeId: number,
                nameChallenge: string,
                nameVideo: string,
                imageCategoryUrl: string,
                tutorialVideo: string,
                invitedVideo: string,
                imagePreviewUrl: string,
                imagePreviewTutorial: string,
                imagePreviewInvited: string,
                imageUserCreator: string,
                imageUserInvited: string,
                timeSystem: string,
                timeEnd: string,
                qtyvotesOwnerChallenge: number,
                qtyvotesInvitedChallenge: number,
  ): HomeChallerModel{
    return {
      idSeq: 0,
      challengeId,
      nameChallenge,
      nameVideo,
      statusChallenge : '',
      userprofileOwnerChallengeId: 0,
      userprofileInvitedChallengeId: 0,
      nameOwnerChallenge: '',
      lastNameOwnerChallenge: 'string',
      qtyLikes: 0,
      qtyComments: 0,
      userchallengeshowId: 0,
      showLikesComments: false,
      imageCategoryUrl,
      imageSelectedUrl: 'string',
      imagePreviewUrl: 'string',
      tutorialVideo,
      invitedVideo, // null
      imagePreviewTutorial,
      imagePreviewInvited,
      likedByMe: false,
      imageUserCreator,
      imageUserInvited,
      timer: {
        timeSystem,
        timeEnd
      },
      finalDate: 'string',
      votePublicFinalDate: 'string',
      statusCode: 'string',
      userNameInvited: 'string',
      nicknameInvited: 'string',
      nicknameOwner: 'string',
      votedByMe: false,
      qtyvotesOwnerChallenge,
      qtyvotesInvitedChallenge,
      showVotes: false,
      videoOptions: {
        isPlay: true,
        isMuted: false,
      },
      abilities: []
    };
  }

  getChallenges(page: number, items: number) {
    const isOne = !!this.challengerId;

    this.challengeService.getChallenges(page, items, isOne, this.challengerId).subscribe((data: any) => {

      if (isOne){
        const detailChaller = data.challenges[0];
        this.challenges = [{...this.getMapChaller(
            this.challengerId,
            detailChaller.name,
            detailChaller.videoCreator,
            detailChaller.category.sportImageSelected,
            detailChaller.urlVideo,
            detailChaller.videoInvited,
            detailChaller.videoPreviewCreator,
            detailChaller.urlImage,
            detailChaller.videoPreviewInvited,
            detailChaller.userChallenger.photo,
            detailChaller.userInvited.photo,
            detailChaller.systemDate,
            detailChaller.finalDate,
            detailChaller.votesCreator,
            detailChaller.votesInvited,
          )}];
      } else {
        const challenges = [...data.challerHome.map((x: HomeChallerModel) => {
          return x.videoOptions = {
            ...x,
            isPlay: false,
            isMuted: false,
          };
        })];
        this.challenges = [...this.challenges, ...challenges];
        this.paginator.setTotalRowFromService(Number(data.total_items_challerhome));
      }

    });
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
}
