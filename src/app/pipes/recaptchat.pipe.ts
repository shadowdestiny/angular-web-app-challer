import {Pipe, PipeTransform} from '@angular/core';

import {environment} from '../../environments/environment';

@Pipe({
  name: 'recaptchatKey'
})
export class RecaptchatPipe implements PipeTransform {

  constructor() {

  }

  transform(value: any, ...args: any[]): any {
    return `${environment.RE_CAPTCHA_KEY}`;
  }

}
