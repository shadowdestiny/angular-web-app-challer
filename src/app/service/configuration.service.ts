import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';
import {SessionStorageService} from 'ngx-webstorage';
import {GeolocationModel} from '../models/geolocation.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    // private comboService: ComboxService
  ) {
  }


  public configuration() {
    const url = `${API.CONFIGURATION}`;
    return this.http.get(url);
  }

  public refreshConfiguration(callback = () => {
  }) {
    this.configuration().subscribe((configuration: any) => {
      this.setConfiguration(configuration);
      callback();
    });
  }

  public setConfiguration(configuration: any) {

    const model: any = {};
    for (const attribute in configuration.system_config) {
      const row: any = configuration.system_config[attribute];
      model[row.key] = row.value;
    }

    this.sessionStorageService.store('configuration', model);
  }

  public setGeoLocation(latitude: GeolocationModel) {
    this.sessionStorageService.store('geolocation', latitude);
  }

  public getGeoLocation(): GeolocationModel {
    return this.sessionStorageService.retrieve('geolocation');
  }

  public getConfiguration(key): string {
    const configuration: Array<string> = this.sessionStorageService.retrieve('configuration');
    return configuration[key];
  }

  /*private loadCombox() {
    this.comboService.getCombox('academic').subscribe((data: any) => {
      this.sessionStorageService.store('combox', data);
    });
  }*/

  /*public getComboxStore() {

    return this.sessionStorageService.retrieve('combox');

  }*/

}
