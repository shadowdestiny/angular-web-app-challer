import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';
import {GeolocationModel} from '../models/geolocation.model';
import {ConfigurationService} from './configuration.service';


@Injectable({
  providedIn: 'root'
})
export class ApiGeolocationService {

  constructor(
      private http: HttpClient,
      private configuration: ConfigurationService
  ) {
  }

  private getGeolocation() {
    const url = API.GOOGLEAPIS_GEOLOCATION;
    const key = API.google_api_map_key;
    return this.http.post(`${url}?key=${key}`, {});
  }

  public locationByGoogle(callback: (data: GeolocationModel) => void) {
    let geo: GeolocationModel = this.configuration.getGeoLocation();
    if (geo?.isLocalStore){
      callback(geo);
    } else {
      const obs = this.getGeolocation().subscribe((data: any) => {
        obs.unsubscribe();
        geo = {
          isLocalStore: true,
          lng: data.location.lng,
          lat: data.location.lat,
        };
        this.configuration.setGeoLocation(geo);
        callback(data.location);
      });
    }
  }

}
