import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';
import {UtilsService} from './utils.service';
import {ConfigurationService} from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {
  }

  public getOneChallenge(challengeId: number) {
    let url = `${API.CHALLENGE_DETAIL}`;
    url = this.utils.settingParameter(url, 'id', '0');
    const params = `?challengeid=${challengeId}`;
    return this.http.get(url + params);
  }

  public getChallenges(page = 0, items = 50, isOne = false, challengeId = 0) {
    if (isOne) {
      return this.getOneChallenge(challengeId);
    } else {
      let url = `${API.CHALLENGE}`;
      url = this.utils.settingParameter(url, 'id', '0');
      const chunk = `${'&page=' + page + '&items=' + items}`;
      return this.http.get(url + chunk);
    }
  }

  public getChallengeMosaic(userId = '1', page = 0, items = 10, type = 0, lat = 0, lng = 0) {
    let url = `${API.CHALLENGE_MOSAIC}`;
    url = this.utils.settingParameter(url, 'userId', userId);
    const chunk = `${'?page=' + page + '&items=' + items}&type=${type}&lat=${lat}&lng=${lng}&language=EN`;
    return this.http.get(url + chunk);
  }

  public getChallengeLike(userId = '1', page = 0, items = 10, type = 0, lat = 0, lng = 0) {
    let url = `${API.CHALLENGE_LIKE}`;
    url = this.utils.settingParameter(url, 'userId', userId);
    url = this.utils.settingParameter(url, 'userId2', userId);
    const chunk = `${'&page=' + page + '&items=' + items}&type=${type}&lat=${lat}&lng=${lng}&language=EN`;
    return this.http.get(url + chunk);
  }

  public getStadistic(userId = '1') {
    let url = `${API.CHALLENGE_HOME}`;
    url = this.utils.settingParameter(url, 'userId', userId);
    return this.http.get(url );
  }
}
