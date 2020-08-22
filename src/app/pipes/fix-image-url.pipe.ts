import {Pipe, PipeTransform} from '@angular/core';
import {ConfigurationService} from "../service/configuration.service";
import {API} from "../config/api";
// import {API} from '../../config/api';

@Pipe({
  name: 'fixImageUrl'
})
export class FixImageUrlPipe implements PipeTransform {

  constructor(private config: ConfigurationService) {

  }

  transform(value: any, ...args: any[]): any {
    // console.log(`${this.config.getConfiguration('HTTP_CDN_GOOGLE')}${value}`);
    return `${this.config.getConfiguration('HTTP_CDN_GOOGLE')}${value}`;
    // return `${API.CDN_BUCKET}`;
  }

}
