import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {StoreService} from './service/store.service';
import {ScrollConstants} from './store/constants/scroll.constants';
import {ResizeConstants} from './store/constants/resize.constants';
import {Router} from '@angular/router';
import {BodyConstants} from './store/constants/body.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'challer';
  isShowCloud = true;
  isMobileValue = false;
  colorBackground = 'blue';
  isHomeChaller = false;
  isHorizaontal = false;

  @ViewChild('scrollMe', {static: true}) scrollMe: ElementRef;

  constructor(
    private store: StoreService,
    public route: Router
  ) {
    try {
      screen.orientation.addEventListener('change', () => {
        this.show();
      });
    } catch (e) {
      console.log(e);
      this.detectEventIosHorizontal();
    }
    try {
      window.addEventListener('load', () => {
        this.show();
      });
    } catch (e) {
      console.log(e);
    }
  }

  private detectEventIosHorizontal() {
    if (this.isMobile()) {
      this.isHorizaontal = window.innerWidth > window.innerHeight;
    }
  }

  private loadResize() {
    this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        if (data.resize.isMobile && this.isHomeChaller) {
          this.isHorizaontal = true;
          setTimeout(() => {
            this.detectEventIosHorizontal();
            window.location.reload();
          }, 0);
        }
      }
    });
  }

  show() {
    const {type, angle} = screen.orientation;
    // console.log(`Orientation type is ${type} & angle is ${angle}.`);
    this.isHorizaontal = type === 'landscape-primary';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setResizeEvent();
  }

  isMobile(): boolean {
    const ua = navigator.userAgent;
    return this.isMobileValue = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua));
  }

  isIOS(): boolean {
    const ua = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(ua);
  }

  isAndroid(): boolean {
    const ua = navigator.userAgent;
    return /Android/i.test(ua);
  }

  ngOnInit(): void {
    this.setResizeEvent();
    this.getBodyStatus();
    // screen.orientation.lock();
    this.loadResize();
  }

  setResizeEvent() {
    this.store.setResizeStore(ResizeConstants.START,
      {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: this.isMobile(),
        isIos: this.isIOS(),
        isAndroid: this.isAndroid(),
      });
  }

  getBodyStatus() {
    this.store.getBodyStore().subscribe((data: any) => {
      setTimeout(() => {
        if (data.status === BodyConstants.DEFAULT) {
          this.colorBackground = 'default';
        } else if (data.status === 'blue') {
          this.colorBackground = 'blue';
        }
      }, 0);
    });
    this.route.events.subscribe((data: any) => {
      if (this.route.url === '/business'
        || this.route.url === '/mision'
        || this.route.url === '/ranking'
        || this.route.url === '/policy'
        || this.route.url.indexOf('/policy') >= 0
        || this.route.url.indexOf('/privacypolicy') >= 0
        || this.route.url.indexOf('/legal') >= 0
        || this.route.url.indexOf('/eula') >= 0
      ) {
        this.colorBackground = 'default';
      } else if (this.route.url === '/home-challer' || this.route.url === '/ranking' || this.route.url.search('challenge') >= 0 || this.route.url.search('profile') >= 0) {
        this.isHomeChaller = true;
        this.colorBackground = 'gris';
      } else {
        this.colorBackground = 'blue';
        this.isHomeChaller = false;
      }
      if (
        !(this.route.url.search('/privacypolicy') >= 0)
        && !(this.route.url.search('/legal') >= 0)
        && !(this.route.url.search('/eula') >= 0)
      ) {
        this.resetScroll();
      }
    });
  }

  private resetScroll() {
    this.scrollMe.nativeElement.scrollTop = 0;
  }

  onVisual(isShow = true) {
    this.isShowCloud = isShow;
  }

  onScroll(event, scrollMe: any) {
    const maxScrollPosition = scrollMe.scrollHeight - scrollMe.clientHeight;
    if (scrollMe.scrollTop >= maxScrollPosition - 10) {
      this.store.setScrollStore(ScrollConstants.SCROLLING_DOWN);
    }
    this.store.setScrollStore(ScrollConstants.ALL_SCROLLING,
      {scrollHeight: scrollMe.scrollHeight, clientHeight: scrollMe.clientHeight, scrollTop: scrollMe.scrollTop});
  }

}
