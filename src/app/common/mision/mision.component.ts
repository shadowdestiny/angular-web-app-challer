import {Component, OnDestroy, OnInit} from '@angular/core';
import {BodyConstants} from '../../store/constants/body.constants';
import {StoreService} from '../../service/store.service';
import {Router} from '@angular/router';
import {ResizeImage} from '../../../lib/resizeImage';
import {Subscription} from 'rxjs';
import {ResizeConstants} from '../../store/constants/resize.constants';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.scss']
})
export class MisionComponent implements OnInit, OnDestroy {

  subscribes: Subscription[] = [];
  resizeImage: ResizeImage;

  constructor(
    private router: Router,
    private store: StoreService,
  ) {
    this.resizeImage = new ResizeImage(744, 1440, [
      {
        width: 1200,
        outHeight: 500
      },
      {
        width: 800,
        outHeight: 500
      },
      {
        width: 767,
        outHeight: 1100
      },
      {
        width: 650,
        outHeight: 900
      },
      {
        width: 400,
        outHeight: 650
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
