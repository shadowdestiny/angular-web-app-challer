import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API} from "../config/api";
import {UtilsService} from "./utils.service";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) {
  }

  public getChallenges(page=0, items=50) {
    let url = `${API.CHALLENGE}`;
    url = this.utils.settingParameter(url, 'id', '0');
    const chunk = `${'&page='+page+'&items='+page}`;
    console.log(url + chunk);
    return this.http.get(url + chunk);
  }
}
