import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './utils.service';
import {API} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    // private authentication: AuthenticationService,
  ) {
  }

  public getListMvp(items: number = null, page: number = null, isAll = false) {
    let url = `${API.AUTH_RANKING_MVP}`;
    url = this.utils.settingParameter(url, 'userId', '1' );
    url = this.utils.settingParameter(url, 'all', isAll.toString());
    if (page !== null) {
      url += '&page=' + Number(page);
    }
    if (items !== null) {
      url += '&items=' + Number(items);
    }
    url += '&language=EN';
    return this.http.get(url);
  }

  public getLisPosition(items: number = null, page: number = null, isAll = false) {
    let url = `${API.AUTH_RANKING_MVP_POSITION}`;
    url = this.utils.settingParameter(url, 'userId', '1');
    url = this.utils.settingParameter(url, 'all', isAll.toString());
    if (page !== null) {
      url += '&page=' + Number(page);
    }
    if (items !== null) {
      url += '&items=' + Number(items);
    }
    return this.http.get(url);
  }

  public getHeadMvp() {
    let url = `${API.AUTH_RANKING_MVP_HEAD}`;
    url = this.utils.settingParameter(url, 'userId', '1');
    return this.http.get(url);
  }
}
