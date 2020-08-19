import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ScrollState} from "../store/interfaces/scroll.state";
import {VideoState} from "../store/interfaces/video.state";
import {Scroll, ScrollAction} from "../store/actions/scroll.actions";
import {ScrollConstants} from "../store/constants/scroll.constants";
import {Video, VideoAction} from "../store/actions/video.action";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private scrollContent$: Observable<string>;
  private videoContent$: Observable<string>;
  constructor(
    private scrollStateStore: Store<ScrollState>,
    private videoStateStore: Store<VideoState>,
  ) {
    this.scrollContent$ = this.scrollStateStore.select('scrolling');
    this.videoContent$ = this.videoStateStore.select('video');
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

  setVideoStore(type: string, param = null) {
    const videoAction = ({video, type}: {video: Video,  type: string}) => ({
      type: type,
      video: {
        video
      }
    });
    this.videoStateStore.dispatch(videoAction({
      video: {
        param
      },
      type: type,
    }));
  }

  getVideoStore(){
    return this.videoContent$;
  }

}
