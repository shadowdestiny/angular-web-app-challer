import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {ChallengeService} from "../../service/challenge.service";
import {HomeChallerModel} from "../../models/home.challer.model";
import {ConfigurationService} from "../../service/configuration.service";
import {Router} from "@angular/router";
import {Paginator} from "../../../lib/paginator";
import {StoreService} from "../../service/store.service";
import {ScrollConstants} from "../../store/constants/scroll.constants";
import {ResizeConstants} from "../../store/constants/resize.constants";
import {VideoConstants} from "../../store/constants/video.constants";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-challer',
  templateUrl: './home-challer.component.html',
  styleUrls: ['./home-challer.component.scss']
})
export class HomeChallerComponent implements OnInit, OnDestroy {

  challenges: Array<HomeChallerModel> = [];
  paginator: Paginator;
  limit = 3;

  innerWidth;
  innerHeight;
  isMobile = false;
  isFirst = true;
  top = 0;

  subscribes: Subscription[] = [];

  @ViewChild('vc', {read: ViewContainerRef, static: true}) vc: ViewContainerRef;
  @ViewChild('tpl', {read: TemplateRef, static: true}) tpl: TemplateRef<any>;
  childViewRef: ViewRef;

  constructor(
    private challengeService: ChallengeService,
    private configurationService: ConfigurationService,
    private router: Router,
    private store: StoreService
  ) {
    this.paginator = new Paginator(0, this.limit);
  }

  ngOnInit(): void {
    this.configurationService.refreshConfiguration(() => {
      this.getChallenges(0, this.limit);
    })
    this.getResize();
    this.getScroll();

  }

  insertChildView() {
    this.vc.insert(this.childViewRef);
  }

  removeChildView() {
    this.vc.detach();
  }

  resetView() {
    this.childViewRef = this.tpl.createEmbeddedView(null);
    this.removeChildView();
    this.insertChildView();
  }

  getScroll(){
    this.subscribes.push(this.store.getScrollStore().subscribe((data: any) => {
      if (data.status === ScrollConstants.ALL_SCROLLING){
        setTimeout(() => {
          this.top = data.scroll.scroll.scrollTop;
        }, 600);
      }
      if (data.status === ScrollConstants.SCROLLING_DOWN){
        this.nextPagination();
      }
    }));
  }

  nextPagination(){
    this.paginator.paginateDownFromLibrary((page, items) => {
      this.getChallenges(page, items)
    })
  }

  getResize(){
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any)=> {
      if (data.status === ResizeConstants.START){
        this.innerHeight = data.resize.height - 60;
        this.innerWidth = data.resize.width;
        if (!this.isFirst && this.isMobile !== data.resize.isMobile){
          this.store.setVideoStore(VideoConstants.PAUSE_ALL);
          window.location.href = window.location.href;
        }
        this.isFirst = false;
        this.isMobile = data.resize.isMobile;
      }
    }));
    this.resetView();
  }

  getChallenges(page: number, items: number){
    this.challengeService.getChallenges(page, items).subscribe((data: any) => {
      const challenges = [...data.challerHome.map((x: HomeChallerModel) => {
        return x.videoOptions = {
          ...x,
          isPlay : false
        }
      })];
      this.challenges = [...this.challenges, ...challenges];
      this.paginator.setTotalRowFromService(Number(data.total_items_challerhome));
    })
  }

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    })
  }

  onAbout(){
    this.router.navigate(['/about-us']);
  }
  onVision(){
    this.router.navigate(['/vision']);
  }
  onBusiness(){
    this.router.navigate(['/business']);
  }
  onCondition(){
    this.router.navigate(['/policy']);
  }
}
