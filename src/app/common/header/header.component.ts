import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from "../../service/store.service";
import {ResizeConstants} from "../../store/constants/resize.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  isOpen = false;
  isMobile = false;
  @Output() urlRouter = new EventEmitter<string>();
  @Input() isShowMobile = false;

  constructor(
    public router: Router,
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START){
        this.isMobile = data.resize.isMobile;
      }
    });
  }

  pushUrlRouter(){
    // setTimeout(() => {
      this.urlRouter.emit(this.router.url);
    // }, 1000)
  }

  onClickMenu() {
    this.isOpen = !this.isOpen;
  }

  onHome() {
    this.isOpen = false;
    this.router.navigate(['/']);
  }

  onAbout() {
    this.isOpen = false;
    this.router.navigate(['/about-us']);
  }
  onContact() {
    this.isOpen = false;
    this.router.navigate(['/contact']);
  }
  onVision() {
    this.isOpen = false;
    this.router.navigate(['/vision']);
  }
  onMission() {
    this.isOpen = false;
    this.router.navigate(['/mision']);
  }
  onViewChaller() {
    this.isOpen = false;
    this.router.navigate(['/home-challer']);
  }
  onPolicy() {
    this.isOpen = false;
    this.router.navigate(['/policy']);
  }
  onBusiness(){
    this.isOpen = false;
    this.router.navigate(['/business']);
  }

  onStory(){
    this.isOpen = false;
    this.router.navigate(['/story']);
  }

  ngAfterViewInit(): void {
    this.pushUrlRouter();
  }

}
