import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API} from "../config/api";
import {UtilsService} from "./utils.service";

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAdvertising() {
    let url = `${API.ADVERTISING}`;
    return this.http.get( url );
  }
}
