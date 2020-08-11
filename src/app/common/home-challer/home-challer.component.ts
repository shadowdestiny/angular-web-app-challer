import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../service/challenge.service";
import {HomeChallerModel} from "../../models/home.challer.model";
import {ConfigurationService} from "../../service/configuration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-challer',
  templateUrl: './home-challer.component.html',
  styleUrls: ['./home-challer.component.scss']
})
export class HomeChallerComponent implements OnInit {

  challenges: Array<HomeChallerModel> = [];
  constructor(
    private challengeService: ChallengeService,
    private configurationService: ConfigurationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.configurationService.refreshConfiguration(() => {
      this.challengeService.getChallenges().subscribe((data: any) => {
        this.challenges = data.challerHome;
      })
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
