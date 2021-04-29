import {Component, Input, OnInit} from '@angular/core';
import {BiographyDataModel} from '../../../../../models/biography.data.model';
import {StadisticModel} from '../../../../../models/stadistic.model';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() biography: BiographyDataModel;
  @Input() stadistic: StadisticModel;
  constructor() { }

  ngOnInit(): void {
  }

}
