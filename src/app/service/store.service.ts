import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ScrollState} from '../store/interfaces/scroll.state';
import {VideoState} from '../store/interfaces/video.state';
import {Scroll, ScrollAction} from '../store/actions/scroll.actions';
import {Video, VideoAction} from '../store/actions/video.action';
import {ResizeState} from '../store/reducers/resize.reducer';
import {Resize} from '../store/actions/resize.action';
import {CloudState} from '../store/reducers/cloud.reducer';
import {Cloud} from '../store/actions/cloud.action';
import {Body} from '../store/actions/body.action';
import {BodyState} from '../store/reducers/body.reducer';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private scrollContent$: Observable<string>;
  private videoContent$: Observable<string>;
  private resizeContent$: Observable<string>;
  private cloudContent$: Observable<string>;
  private bodyContent$: Observable<string>;

  constructor(
    private scrollStateStore: Store<ScrollState>,
    private videoStateStore: Store<VideoState>,
    private resizeStateStore: Store<ResizeState>,
    private cloudStateStore: Store<CloudState>,
    private bodyStateStore: Store<BodyState>,
  ) {
    this.scrollContent$ = this.scrollStateStore.select('scrolling');
    this.videoContent$ = this.videoStateStore.select('video');
    this.resizeContent$ = this.resizeStateStore.select('resize');
    this.cloudContent$ = this.cloudStateStore.select('cloud');
    this.bodyContent$ = this.bodyStateStore.select('background');
  }

  setScrollStore(type: string, {scrollHeight, clientHeight, scrollTop}:
    { scrollHeight: number, clientHeight: number, scrollTop: number }
    =
    {clientHeight: 0, scrollHeight: 0, scrollTop: 0}) {
    // tslint:disable-next-line:no-shadowed-variable
    const scrollAction = ({scroll, type}: { scroll: Scroll, type: string }) => ({
      type,
      scroll: {
        scroll,
      }
    });
    this.scrollStateStore.dispatch(scrollAction({
      type,
      scroll: {
        scroll: null,
        clientHeight,
        scrollHeight,
        scrollTop,
      }
    }));
  }

  getScrollStore() {
    return this.scrollContent$;
  }

  setResizeStore(type: string, {width, height, isMobile, isIos, isAndroid}:
    { width: number, height: number, isMobile: boolean, isIos: boolean, isAndroid: boolean }
    =
    {width: 0, height: 0, isMobile: false, isIos: false, isAndroid: false}) {
    // tslint:disable-next-line:no-shadowed-variable
    const resizeAction = ({resize, type}: { resize: Resize, type: string }) => ({
      type,
      resize
    });
    this.scrollStateStore.dispatch(resizeAction({
      type,
      resize: {
        width,
        height,
        isMobile,
        isIos,
        isAndroid,
      }
    }));
  }

  getResizeStore() {
    return this.resizeContent$;
  }

  setVideoStore(type: string, param = null) {
    // tslint:disable-next-line:no-shadowed-variable
    const videoAction = ({video, type}: { video: Video, type: string }) => ({
      type,
      video: {
        video
      }
    });
    this.videoStateStore.dispatch(videoAction({
      type,
      video: {
        param
      }
    }));
  }

  getVideoStore() {
    return this.videoContent$;
  }

  setCloudStore(type: string) {
    // tslint:disable-next-line:no-shadowed-variable
    const cloudAction = ({cloud, type}: { cloud: Cloud, type: string }) => ({
      type,
      cloud
    });
    this.cloudStateStore.dispatch(cloudAction({
      type,
      cloud: null
    }));
  }

  getCloudStore() {
    return this.cloudContent$;
  }

  setBodyStore(type: string) {
    // tslint:disable-next-line:no-shadowed-variable
    const bodyAction = ({body, type}: { body: Body, type: string }) => ({
      type,
      body
    });
    this.bodyStateStore.dispatch(bodyAction({
      type,
      body: null
    }));
  }

  getBodyStore() {
    return this.bodyContent$;
  }

}
