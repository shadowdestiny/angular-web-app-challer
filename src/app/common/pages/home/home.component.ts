import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from '../../../service/store.service';
import {ResizeConstants} from '../../../store/constants/resize.constants';
import {Subscription} from 'rxjs';
import {ResizeImage} from '../../../../lib/resizeImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscribes: Subscription[] = [];
  resizeImage: ResizeImage;

  constructor(
    private router: Router,
    private store: StoreService,
  ) {
    this.resizeImage = new ResizeImage(684, 1440, [
      {
        width: 1060,
        outHeight: 600
      },
      {
        width: 992,
        outHeight: 700
      },
      {
        width: 767,
        outHeight: 800
      },
      {
        width: 550,
        outHeight: 600
      },
      {
        width: 400,
        outHeight: 400
      }
    ]);
  }

  newHeight = 0;

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.store.getResizeStore().subscribe();

    /*Object.keys(window).forEach(key => {
            if (/^on/.test(key)) {
                window.addEventListener(key.slice(2), event => {
                    log(event);
                });
            }
        });*/


    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.newHeight = this.resizeImage.getResizeHeight(data.resize.width);
      }
    }));
  }

  toGoogle() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.challer';
  }

  onViewChaller() {
    this.router.navigate(['/home-challer']);
  }

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

}
