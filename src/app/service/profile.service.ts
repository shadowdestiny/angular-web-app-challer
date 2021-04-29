import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../config/api';
import {UtilsService} from './utils.service';
import {map} from 'rxjs/operators';
import {BiographyModel} from '../models/biography.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {
  }

  getProfile(userId: string): Observable<BiographyModel> {
    let url = `${API.PROFILE}`;
    url = this.utils.settingParameter(url, 'userId', userId);
    return this.http.get(url).pipe(map((biography: BiographyModel) => biography));
    /*
     mapToAddress(): Observable<Address[]> {
      this.getClients.pipe(
      map((clients: Client[]) => clients.map(client => client.address))
    )
    }*/
  }
}
