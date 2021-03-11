import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../service/profile.service';
import {BiographyModel} from '../../../../models/biography.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: Observable<BiographyModel>;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    /*this.profileService.getProfile('1' ).subscribe((data) => {
      console.log(data);
    });*/

    this.data = this.profileService.getProfile('1' );
  }

}
