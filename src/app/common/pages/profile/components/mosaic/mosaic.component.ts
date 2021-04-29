import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChallengeProfileModel} from '../../../../../models/challenge.profile.model';
import {DynamicChallengeUtil} from '../../../../../utils/dynamic.challenge.util';
import {ResizeConstants} from '../../../../../store/constants/resize.constants';
import {Subscription} from 'rxjs';
import {StoreService} from '../../../../../service/store.service';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss']
})
export class MosaicComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() challenges: Array<ChallengeProfileModel>;
  @Input() challengesToUpdate: Array<ChallengeProfileModel> = [];
  @Input() type = 'myChallenge';
  @Input() isReset = false;
  @Input() isDaley = false;
  @Input() isAnimation = true;
  @Input() isReverse = true;
  @Input() isPushNotification = false;
  @Input() requestedUserId: number | string;
  @Input() isMe = false;
  @Input() userId: number;
  @Input() isRequesting = true;
  @Input() allowSlides = false;
  @Output() isReadyDelay = new EventEmitter<boolean>();
  @Output() pushUpdate = new EventEmitter();
  @Output() needMore = new EventEmitter();
  challengeToRender: Array<ChallengeProfileModel> = [];
  challengeDelay: Array<ChallengeProfileModel> = [];
  timeOut = null;
  dynamicChallengeUtil = new DynamicChallengeUtil();
  private challerFunction: (challengeDelay: Array<ChallengeProfileModel>) => {};

  @ViewChild('sectionMosaic')
  sectionMosaic: ElementRef;
  subscribes: Subscription[] = [];

  widthDiv;
  height = 0;
  width = 0;
  setTime;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private store: StoreService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.isReverse) {
      this.isReverse = changes.isReverse.currentValue;
    }
    if (!!changes.type) {
      this.type = changes.type.currentValue;
    }
    if (!!changes.isAnimation) {
      this.isAnimation = changes.isAnimation.currentValue;
    }
    if (!!changes.isPushNotification) {
      this.isPushNotification = changes.isPushNotification.currentValue;
    }
    if (!!changes.challenges) {
      if (changes.challenges.currentValue.length === 0) {
        // this.challengeToRender = [];
      }
      this.init(changes.challenges.currentValue);
    }
    if (!!changes.isReset) {
      if (this.isReset !== changes.isReset.currentValue) {
        this.isReset = changes.isReset.currentValue;
        this.challengeToRender = [];
        this.challenges = [];
        this.challengeDelay = [];
      }
    }
  }

  init(challenges: Array<ChallengeProfileModel>) {
    this.isReadyDelay.emit(false);
    this.dynamicChallengeUtil.changeState(challenges, this.challengeToRender, this.isReverse, this.isPushNotification);


    this.challengeToRender.forEach((challenge: ChallengeProfileModel, i: number) => {
      setTimeout(() => {
        if (!this.challengeDelay.includes(challenge)){
          this.challengeDelay.push(challenge);
          this.getSizeLayout();
        }
      }, 120 * i);
    });

    if (this.challerFunction) {
      this.challerFunction(this.challengeToRender);
    }
    this.getSizeLayout();
  }

  onSelectedChallenge(challenge: ChallengeProfileModel) {
    /*let challersIds = [];
    let challerIndex = 0;
    if (this.allowSlides) {
      challerIndex = this.challengeToRender.findIndex(({id}) => challenge.id === id);
      challersIds = this.challengeToRender.map((challer) => challer.id);
    }
    this.navigation.goto(['challenge-detail', challenge.id], {
      scrollChaller: this.allowSlides,
      challersIds,
      challerIndex,
      initSlide: this.initSlide.bind(this),
      onFocus: this.onFocusSelement.bind(this),
      needMoreItems: this.needMoreItems.bind(this),
    });*/
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeOut);
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

  onPushUpdate() {
    this.pushUpdate.emit();
  }

  private initSlide(challerFunction: () => {}) {
    this.challerFunction = challerFunction;
  }

  private onFocusSelement({challerId}) {
    /*setTimeout(() => {
      const el =  document.getElementById(`${this.type}-challer-${challerId}`);
      if (el) {
        let yOffset = el.offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
      }
    }, 300);*/
  }

  private needMoreItems() {
    this.needMore.emit();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSizeLayout();
  }

  getSizeLayout() {
    setTimeout(() => {
      this.widthDiv = this.sectionMosaic.nativeElement.offsetWidth;
      this.resizeSquare(this.widthDiv);
    }, 800);
  }

  private resizeSquare(globalWidth) {
    let widthTemplate = 0;
    let widthColumn = globalWidth / 3;
    const squares = this.el.nativeElement.querySelectorAll('.col-mosaic');
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        widthColumn = (this.widthDiv = this.sectionMosaic.nativeElement.offsetWidth) / 3;
        widthTemplate = data.resize.width;
        squares.forEach((element) => {
          const newWidth = widthColumn - 2;
          element.style.width = `${this.width = newWidth}px`;
          element.style.height = `${this.height = newWidth + (newWidth / 12)}px`;
        });
      }
    }));
  }

}
