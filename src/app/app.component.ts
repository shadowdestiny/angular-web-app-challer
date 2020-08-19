import {Component, OnInit} from '@angular/core';
import {StoreService} from "./service/store.service";
import {ScrollConstants} from "./store/constants/scroll.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challer';
  isShowCloud = true;

  constructor(
    private store: StoreService
  ) {

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

  ngOnInit(): void {

  }

}
