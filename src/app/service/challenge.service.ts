import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';
import {UtilsService} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) {
  }

  public getOneChallenge(challengeId: number){
    let url = `${API.CHALLENGE_DETAIL}`;
    url = this.utils.settingParameter(url, 'id', '0');
    const params = `?challengeid=${challengeId}`;
    return this.http.get( url + params);
  }

  public getChallenges(page = 0, items = 50, isOne = false, challengeId = 0) {
    if (isOne){
      return this.getOneChallenge(challengeId);
    } else {
      let url = `${API.CHALLENGE}`;
      url = this.utils.settingParameter(url, 'id', '0');
      const chunk = `${'&page=' + page + '&items=' + items}`;
      return this.http.get(url + chunk);
    }

  }
}
