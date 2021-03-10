import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResizeImage} from '../../../../lib/resizeImage';
import {Router} from '@angular/router';
import {StoreService} from '../../../service/store.service';
import {ResizeConstants} from '../../../store/constants/resize.constants';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit, OnDestroy {

  subscribes: Subscription[] = [];
  resizeImage: ResizeImage;

  constructor(
    private router: Router,
    private store: StoreService,
  ) {
    this.resizeImage = new ResizeImage(574, 1440, [
      {
        width: 1200,
        outHeight: 600
      },
      {
        width: 1000,
        outHeight: 800
      },
      {
        width: 800,
        outHeight: 900
      },
      {
        width: 767,
        outHeight: 1200
      },
      {
        width: 650,
        outHeight: 1000
      },
      {
        width: 400,
        outHeight: 950
      },
    ]);
  }

  newHeight = 0;

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.store.getResizeStore().subscribe();

    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.newHeight = this.resizeImage.getResizeHeight(data.resize.width);
      }
    }));
  }

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

}
