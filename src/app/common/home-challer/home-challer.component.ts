import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../service/challenge.service";
import {HomeChallerModel} from "../../models/home.challer.model";
import {ConfigurationService} from "../../service/configuration.service";
import {Router} from "@angular/router";
import {Paginator} from "../../../lib/paginator";
import {StoreService} from "../../service/store.service";
import {ScrollConstants} from "../../store/constants/scroll.constants";

@Component({
  selector: 'app-home-challer',
  templateUrl: './home-challer.component.html',
  styleUrls: ['./home-challer.component.scss']
})
export class HomeChallerComponent implements OnInit {

  challenges: Array<HomeChallerModel> = [];
  paginator: Paginator;
  limit = 5;
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
    this.onDownScroll();
  }

  getChallenges(page: number, items: number){
    this.challengeService.getChallenges(page, items).subscribe((data: any) => {
      this.challenges = [...this.challenges, ...data.challerHome];
      this.paginator.setTotalRowFromService(Number(data.total_items_challerhome));
    })
  }

  onDownScroll(){
    this.store.getScrollStore().subscribe((data: any) => {
      if (data.status === ScrollConstants.SCROLLING_DOWN){
        this.paginator.paginateDownFromLibrary((page, items) => {
          this.getChallenges(page, items)
        })
      }
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
