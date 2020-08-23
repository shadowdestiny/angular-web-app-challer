import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ScrollState} from "../store/interfaces/scroll.state";
import {VideoState} from "../store/interfaces/video.state";
import {Scroll, ScrollAction} from "../store/actions/scroll.actions";
import {Video, VideoAction} from "../store/actions/video.action";
import {ResizeState} from "../store/reducers/resize.reducer";
import {Resize} from "../store/actions/resize.action";
import {CloudState} from "../store/reducers/cloud.reducer";
import {Cloud} from "../store/actions/cloud.action";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private scrollContent$: Observable<string>;
  private videoContent$: Observable<string>;
  private resizeContent$: Observable<string>;
  private cloudContent$: Observable<string>;
  constructor(
    private scrollStateStore: Store<ScrollState>,
    private videoStateStore: Store<VideoState>,
    private resizeStateStore: Store<ResizeState>,
    private cloudStateStore: Store<CloudState>,
  ) {
    this.scrollContent$ = this.scrollStateStore.select('scrolling');
    this.videoContent$ = this.videoStateStore.select('video');
    this.resizeContent$ = this.resizeStateStore.select('resize');
    this.cloudContent$ = this.cloudStateStore.select('cloud');
  }

  setScrollStore(type: string, {scrollHeight, clientHeight, scrollTop}:
    {scrollHeight: number, clientHeight: number, scrollTop: number}
    =
    {clientHeight : 0, scrollHeight: 0, scrollTop: 0}) {
    const scrollAction = ({scroll, type}: {scroll: Scroll,  type: string}) => ({
      type: type,
      scroll: {
        scroll,
      }
    });
    this.scrollStateStore.dispatch(scrollAction({
      type: type,
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
    {width: number, height: number, isMobile: boolean, isIos: boolean, isAndroid: boolean}
    =
    {width : 0, height: 0, isMobile: false, isIos: false, isAndroid: false}) {
    const resizeAction = ({resize, type}: {resize: Resize,  type: string}) => ({
      type: type,
      resize: resize
    });
    this.scrollStateStore.dispatch(resizeAction({
      type: type,
      resize: {
        width: width,
        height: height,
        isMobile: isMobile,
        isIos: isIos,
        isAndroid: isAndroid,
      }
    }));
  }

  getResizeStore(){
    return this.resizeContent$;
  }

  setVideoStore(type: string, param = null) {
    const videoAction = ({video, type}: {video: Video,  type: string}) => ({
      type: type,
      video: {
        video
      }
    });
    this.videoStateStore.dispatch(videoAction({
      type: type,
      video: {
        param
      }
    }));
  }

  getVideoStore(){
    return this.videoContent$;
  }

  setCloudStore(type: string) {
    const cloudAction = ({cloud, type}: {cloud: Cloud,  type: string}) => ({
      type: type,
      cloud: cloud
    });
    this.cloudStateStore.dispatch(cloudAction({
      type: type,
      cloud: null
    }));
  }

  getCloudStore(){
    return this.cloudContent$;
  }

}
