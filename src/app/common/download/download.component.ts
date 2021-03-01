import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.onRedirect();
  }

  private onRedirect() {
    if (this.isMobile() === true) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.challer';
    } else if (this.isIOS() === true) {
      window.location.href = 'https://apps.apple.com/us/app/challer-challenge-the-world/id1507245154';
    } else {
      window.location.href = '/';
    }
  }

  private isMobile() {
    const ua = navigator.userAgent;
    return /Android/i.test(ua);
  }

  private isIOS() {
    const ua = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(ua);
  }

}
