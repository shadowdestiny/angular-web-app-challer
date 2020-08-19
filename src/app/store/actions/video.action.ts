import {Action} from '@ngrx/store';
import {ScrollConstants} from "../constants/scroll.constants";
import {VideoConstants} from "../constants/video.constants";


export class Video{
  param: any;
}

export class VideoAction implements Action {
    type: string = VideoConstants.PAUSE;
    video: Video = {
      param: null,
    };

    constructor(video: Video) {
        this.video = video;
    }
}
