import {Component, HostListener, OnInit} from '@angular/core';
import {StoreService} from "./service/store.service";
import {ScrollConstants} from "./store/constants/scroll.constants";
import {ResizeConstants} from "./store/constants/resize.constants";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challer';
  isShowCloud = true;
  isMobileValue = false;
  urlActive = '';

  constructor(
    private store: StoreService,
    public route: Router
  ) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setResizeEvent();
  }

  isMobile(): boolean{
    const ua = navigator.userAgent;
    return this.isMobileValue = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua));
  }

  isIOS(): boolean{
    const ua = navigator.userAgent;
    return  /iPhone|iPad|iPod/i.test(ua);
  }

  isAndroid(): boolean{
    const ua = navigator.userAgent;
    return  /Android/i.test(ua);
  }

  ngOnInit(): void {
    this.setResizeEvent();
  }

  setResizeEvent(){
    this.store.setResizeStore(ResizeConstants.START,
      { width: window.innerWidth,
        height: window.innerHeight,
        isMobile: this.isMobile(),
        isIos: this.isIOS(),
        isAndroid: this.isAndroid(),
      });
  }

  onVisual(isShow = true){
    this.isShowCloud = isShow;
  }

  onScroll(event, scrollMe: any) {
    const maxScrollPosition = scrollMe.scrollHeight - scrollMe.clientHeight;
    if (scrollMe.scrollTop >= maxScrollPosition) {
      this.store.setScrollStore(ScrollConstants.SCROLLING_DOWN);
    }
    this.store.setScrollStore(ScrollConstants.ALL_SCROLLING,
      {scrollHeight: scrollMe.scrollHeight, clientHeight: scrollMe.clientHeight, scrollTop: scrollMe.scrollTop});
  }

}
