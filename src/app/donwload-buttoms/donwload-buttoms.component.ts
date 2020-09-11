import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-donwload-buttoms',
  templateUrl: './donwload-buttoms.component.html',
  styleUrls: ['./donwload-buttoms.component.scss']
})
export class DonwloadButtomsComponent implements OnInit {

  @Input() template = 'blue';

  constructor() {
  }

  ngOnInit(): void {
  }

}
