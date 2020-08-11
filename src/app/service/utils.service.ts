import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  public settingParameter(url: string, key: string, value: string): string {
    return url.replace(':' + key, value);
  }
}
