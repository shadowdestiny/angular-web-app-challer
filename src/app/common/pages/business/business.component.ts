import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../service/store.service';
import {BodyConstants} from '../../../store/constants/body.constants';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.store.setBodyStore(BodyConstants.DEFAULT);
  }

}
