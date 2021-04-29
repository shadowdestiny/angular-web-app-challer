import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {httpInterceptorProviders} from './interceptors';
import {StoreModule} from '@ngrx/store';
import {modalReducer} from './store/reducers/modal.reducer';
import {scrollReducer} from './store/reducers/scroll.reducer';
import {videoReducer} from './store/reducers/video.reducer';
import {resizeReducer} from './store/reducers/resize.reducer';
import {cloudReducer} from './store/reducers/cloud.reducer';
import {ClickOutsideModule} from 'ng-click-outside';
import {ReactiveFormsModule} from '@angular/forms';
import {bodyReducer} from './store/reducers/body.reducer';
import {modalGlobalReducer} from './store/reducers/modal.global.reducer';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {SharedComponentsModule} from './modules/shared-components/shared-components.module';
import {ProfileModule} from './common/pages/profile/profile.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScullyLibModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxWebstorageModule.forRoot(),
    StoreModule.forRoot({
      modalLoginMessage: modalReducer,
      scrolling: scrollReducer,
      video: videoReducer,
      resize: resizeReducer,
      cloud: cloudReducer,
      background: bodyReducer,
      globalModal: modalGlobalReducer
    }),
    SharedComponentsModule,
    // ProfileModule
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    httpInterceptorProviders,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
