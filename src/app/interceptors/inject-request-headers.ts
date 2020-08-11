import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
// import {UserModel} from '../models/user.model';

@Injectable()
export class InjectRequestHeadersInterceptor implements HttpInterceptor {

  constructor(public sessionStoreService: SessionStorageService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = {
      'Content-Type': 'application/json',
    };

    const token = false /*this.getToken()*/;

    if (token) {
      request = request.clone({
        setHeaders: {...headers, Authorization: `Bearer ${token}`}
      });
    } else {
      request = request.clone({
        setHeaders: {...headers, Authorization: `Bearer free`}
      });
    }

    request = request.clone({
      setHeaders: headers
    });

    return next.handle(request);
  }

  /*getToken() {
    const user: UserModel = this.sessionStoreService.retrieve('user');
    if (!!user && !!user.access_token) {
      return user.access_token;
    }
  }*/

}
