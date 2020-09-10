import { Directive, HostListener } from '@angular/core';
import {Router} from '@angular/router';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[clickAndroid]'})
// tslint:disable-next-line:directive-class-suffix
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

// tslint:disable-next-line:directive-selector
@Directive({selector: '[clickIOS]'})
// tslint:disable-next-line:class-name directive-class-suffix
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

// tslint:disable-next-line:directive-selector
@Directive({selector: '[clickChallers]'})
// tslint:disable-next-line:directive-class-suffix
export class ToChallers {
  constructor(
    private router: Router
  ) { }
  @HostListener('click', ['$event.target']) onClick(id: any) {
    this.toChaller();
  }

  toChaller(){
    this.router.navigate(['/home-challer']);
  }

}
