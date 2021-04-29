import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResizeImage} from '../../../../lib/resizeImage';
import {Router} from '@angular/router';
import {StoreService} from '../../../service/store.service';
import {ResizeConstants} from '../../../store/constants/resize.constants';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit, OnDestroy {

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
        outHeight: 1300
      },
      {
        width: 650,
        outHeight: 1100
      },
      {
        width: 650,
        outHeight: 800
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
