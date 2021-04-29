import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges, TemplateRef,
  ViewChild, ViewContainerRef, ViewRef
} from '@angular/core';
import {StoreService} from '../../service/store.service';
import {ScrollConstants} from '../../store/constants/scroll.constants';
import {VideoConstants} from '../../store/constants/video.constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-video-challer',
  templateUrl: './video-challer.component.html',
  styleUrls: ['./video-challer.component.scss']
})
export class VideoChallerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() video: string;
  @Input() isAutoPlay = true;
  @Input() isAutoplayScreen = true;
  @Input() eventType = 'play';
  @Input() imagePreview: string;
  @Input() type: 'template';
  @Input() height: number = null;
  @Input() width: number = null;
  @Input() isRadius = false;
  @Input() template = 'desktop';
  @Input() isMuted = false;
  @Output() currentTimeVideoPercentage = new EventEmitter<number>();

  @ViewChild('videoSectionElement', {static: true}) videoSectionElement: ElementRef;
  @ViewChild('vc', {read: ViewContainerRef, static: true}) vc: ViewContainerRef;
  @ViewChild('tpl', {read: TemplateRef, static: true}) tpl: TemplateRef<any>;

  childViewRef: ViewRef;
  isPlayed = false;
  videoSectionHtml;
  isViewInit = false;
  currentTimeValue = 0;

  options = {
    top: null,
    bottom: null
  };

  constructor(
    private store: StoreService,
  ) {
  }

  subscribeScroll: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isViewInit = true;
    this.videoSectionHtml = this.videoSectionElement.nativeElement;
  }

  init() {
    this.muted(this.isMuted);
    this.autoPlay();
    this.listenerAutoPlay();

    if (this.template === 'desktop') {
      this.store.getVideoStore().subscribe((data: any) => {
        if (data.status === VideoConstants.PAUSE_ALL) {
          if (this.subscribeScroll !== undefined) {
            this.subscribeScroll.unsubscribe();
            this.listenerAutoPlay();
          }
          this.pause();
        } else if (data.status === VideoConstants.PAUSE) {
          this.pause();
        }
      });
    }
  }

  listenerAutoPlay() {
    if (this.template === 'desktop') {
      this.subscribeScroll = this.store.getScrollStore().subscribe((data: any) => {
        if (data.status === ScrollConstants.ALL_SCROLLING) {
          this.autoPlay();
        }
      });
    }
  }

  private play() {
    if (!this.isPlayed) {
      this.resetView();
      // this.videoHtml.play();
      this.isPlayed = true;
    }
  }

  private pause() {
    this.removeChildView();
    this.isPlayed = false;
  }

  private muted(isMuted: boolean) {
    this.isMuted = isMuted;
  }

  autoPlay() {
    if (this.isAutoplayScreen) {
      this.autoPlayScreen();
    } else {
      if (this.isAutoPlay) {
        this.play();
      } else {
        this.pause();
      }
    }
  }

  autoPlayScreen() {

    // const rect = this.videoHtml.getBoundingClientRect();
    const rect = this.videoSectionHtml.getBoundingClientRect();
    const top = rect.top /*+ window.pageYOffset + 100*/;
    const bottom = rect.bottom /*+ window.pageYOffset - 100*/;

    const min = window.pageYOffset;
    const max = min + (window.innerHeight - (window.innerHeight - 700));

    if (top >= min && top < max && this.isAutoPlay
      && bottom <= max && bottom > min
    ) {
      this.play();
    } else {
      this.pause();
    }

    if (!this.isAutoPlay) {
      this.pause();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.isMuted) {
      this.muted(changes.isMuted.currentValue);
    }
    if (!!changes.isAutoPlay && this.isViewInit) {
      // this.isMuted = changes.isMuted.currentValue;
      this.isAutoPlay = changes.isAutoPlay.currentValue;
      if (this.subscribeScroll !== undefined) {
        this.subscribeScroll.unsubscribe();
      }
      this.resetView();
      this.init();
    }
  }

  ngOnDestroy() {
    if (!!this.subscribeScroll) {
      this.subscribeScroll.unsubscribe();
    }
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

  currentTime(event: number) {
    this.currentTimeVideoPercentage.emit(event);
    this.currentTimeValue = event;
  }

}
