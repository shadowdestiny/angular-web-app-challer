import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAdvertising() {
    const url = `${API.ADVERTISING}`;
    return this.http.get(url);
  }
}
