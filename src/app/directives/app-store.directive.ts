import { Directive, HostListener } from '@angular/core';
import {Router} from "@angular/router";

@Directive({selector: '[clickAngular]'})
export class ClickAngular {

  constructor(
    private router: Router
  ) { }
  @HostListener('click', ['$event.target']) onClick(id: any) {
    // alert(`You clicked on ${id}`);
    this.toGoogle();
  }

  toGoogle(){
    window.location.href = 'https://play.google.com/store/apps/details?id=com.challer';
  }

}

@Directive({selector: '[clickIOS]'})
export class clickIOS {
  constructor(
    private router: Router
  ) { }
  @HostListener('click', ['$event.target']) onClick(id: any) {
    this.toGoogle();
  }

  toGoogle(){
    window.location.href = 'https://play.google.com/store/apps/details?id=com.challer';
  }

}
