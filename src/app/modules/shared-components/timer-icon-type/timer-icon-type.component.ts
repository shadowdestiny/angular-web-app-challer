import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-timer-icon-type',
  templateUrl: './timer-icon-type.component.html',
  styleUrls: ['./timer-icon-type.component.scss'],
})
export class TimerIconTypeComponent implements OnInit, OnChanges {

  @Input() template = 'time'; // votes, time, reload

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.template) {
      this.template = changes.template.currentValue;
    }
  }

}
