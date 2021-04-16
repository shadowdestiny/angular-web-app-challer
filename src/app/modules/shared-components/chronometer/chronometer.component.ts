import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Format} from '../../../constants/format';
import {ConfigurationService} from '../../../service/configuration.service';
import {ConfigConstants} from '../../../constants/config.constants';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {
  @Input() startTime = '2020-01-21 13:10:01';
  @Input() expiration = '2020-01-22 13:10:01';
  @Input() type = 'default';
  @Input() iClass = '';
  nowTime;
  hours = '00';
  minutes = '00';
  seconds = '00';
  timeEndRed = 0;

  isAlmostThere = false;

  constructor(
    private conf: ConfigurationService,
  ) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.timeEndRed = Number(this.conf.getConfiguration(ConfigConstants.TIMEFOR_CHRONO_RED));
    this.nowTime = moment(this.startTime, Format.TimeChronometerIn);
    this.time();
    const time = moment.duration('00:00:01');
    setInterval(() => {
      this.time();
      this.nowTime = this.nowTime.add(time);
    }, 1000);
  }

  private time() {
    const now = this.now();
    const expirationTime = this.expirationTime();
    const diff = expirationTime.diff(now);
    const diffDuration = moment.duration(diff);
    const expirationHours = expirationTime.diff(now, 'hours');
    const expirationMinutes = diffDuration.minutes();
    const expirationSeconds = diffDuration.seconds();

    this.almostThere(diffDuration.asMilliseconds());

    this.hours = this.format(expirationHours);
    this.minutes = this.format(expirationMinutes);
    this.seconds = this.format(expirationSeconds);
  }

  private almostThere(milliseconds: number) {
    const hourToMilliseconds = this.timeEndRed * (3.6 * 1000000);
    if (milliseconds <= hourToMilliseconds) {
      this.isAlmostThere = true;
    }
  }

  private format(time: number): string {
    if (time < 0) {
      return '00';
    }
    return time < 10 ? '0' + time : time.toString();
  }

  private subtractTime() {
    const time = moment('2020-01-17 13:10:01');
    return time;
  }

  private expirationTime() {
    const time = moment(this.expiration, Format.TimeChronometerIn);
    return time;
  }

  private now() {
    const time = this.nowTime;
    return time;
  }

}
