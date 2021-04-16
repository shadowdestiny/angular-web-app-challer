import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../../service/profile.service';
import {BiographyModel} from '../../../../../models/biography.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: Observable<BiographyModel>;
  userId: string;

  constructor(
    private profileService: ProfileService,
    private activeRouter: ActivatedRoute
  ) {
    this.userId = activeRouter.snapshot.paramMap.get('user_id');
  }

  ngOnInit(): void {
    /*this.profileService.getProfile('1' ).subscribe((data) => {
      console.log(data);
    });*/

    this.data = this.profileService.getProfile(this.userId );
  }

}
