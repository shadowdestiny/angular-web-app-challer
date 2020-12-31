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

  @ViewChild('scrollMe', {static: true}) scrollMe: ElementRef;

  constructor(
    private store: StoreService,
    public route: Router
  ) {

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
      if (this.route.url === '/business' || this.route.url === '/mision' || this.route.url === '/policy' || this.route.url.indexOf("/policy") >= 0) {
        this.colorBackground = 'default';
      } else if (this.route.url === '/home-challer' || this.route.url.search('challenge') >= 0) {
        this.isHomeChaller = true;
        this.colorBackground = 'gris';
      } else {
        this.colorBackground = 'blue';
        this.isHomeChaller = false;
      }
      this.resetScroll();
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
