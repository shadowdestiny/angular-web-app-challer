import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
// import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {HomeComponent} from './common/home/home.component';
import {AboutusComponent} from './common/aboutus/aboutus.component';
import {PolicyComponent} from './common/policy/policy.component';
import {ButtonTypeTemplateComponent} from './component/button-type-template/button-type-template.component';
import {CloudComponent} from './component/cloud/cloud.component';
import {DownloadAppComponent} from './component/download-app/download-app.component';
import {FooterComponent} from './common/footer/footer.component';
import {BusinessComponent} from './common/business/business.component';
import {VisionComponent} from './common/vision/vision.component';
import {ContactJoinComponent} from './common/contact-join/contact-join.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {HomeChallerComponent} from './common/home-challer/home-challer.component';
import {ChallerSlideListComponent} from './component/challer-slide-list/challer-slide-list.component';
import {ChallerSlideComponent} from './component/challer-slide/challer-slide.component';
import {VideoChallerComponent} from './component/video-challer/video-challer.component';
import {FixImageUrlPipe} from './pipes/fix-image-url.pipe';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {httpInterceptorProviders} from './interceptors';
import {ImageRadiusComponent} from './component/modal-sections/image-radius/image-radius.component';
import {TagsWebComponent} from './component/tags-web/tags-web.component';
import {SelectorSiteComponent} from './component/selector-site/selector-site.component';
import {SlideBannersComponent} from './component/slide-banners/slide-banners.component';
import {ClickAngular, clickIOS, ModalDirective, ToChallers} from './directives/app-store.directive';
import {StoreModule} from '@ngrx/store';
import {modalReducer} from './store/reducers/modal.reducer';
import {scrollReducer} from './store/reducers/scroll.reducer';
import {videoReducer} from './store/reducers/video.reducer';
import {CloudNotificationComponent} from './component/cloud-notification/cloud-notification.component';
import {resizeReducer} from './store/reducers/resize.reducer';
import {ChallerVerticalSlideComponent} from './component/challer-vertical-slide/challer-vertical-slide.component';
import {MenuBottomComponent} from './component/menu-bottom/menu-bottom.component';
import {cloudReducer} from './store/reducers/cloud.reducer';
import {ClickOutsideModule} from 'ng-click-outside';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactCvComponent} from './component/contact-cv/contact-cv.component';
import {DonwloadButtomsComponent} from './donwload-buttoms/donwload-buttoms.component';
import {bodyReducer} from './store/reducers/body.reducer';
import {StoryComponent} from './common/story/story.component';
import {MisionComponent} from './common/mision/mision.component';
import {GlobalModalComponent} from './component/global-modal/global-modal.component';
import {modalGlobalReducer} from './store/reducers/modal.global.reducer';
import {ChronometerComponent} from './component/chronometer/chronometer.component';
import {VideoLoaderComponent} from './component/media/video-loader/video-loader.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {EyeLoadingComponent} from './component/eye-loading/eye-loading.component';
import {VoteResultComponent} from './component/vote-result/vote-result.component';
import {TourComponent} from './component/tour/tour.component';
import { Home2Component } from './common/home2/home2.component';
import {VideoStreamingComponent} from './component/video-streaming/video-streaming.component';
import { ChronometerTimeVoteComponent } from './component/chronometer-time-vote/chronometer-time-vote.component';
import { LegalComponent } from './common/legal/legal.component';
import { EulaComponent } from './common/eula/eula.component';
import { PrivacyPolicyComponent } from './common/privacy-policy/privacy-policy.component';
import {ContactComponent} from './common/contact/contact.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {TopRankingHeaderComponent} from './component/top-ranking-header/top-ranking-header.component';
import {ListRankingComponent} from './component/list-ranking/list-ranking.component';
import {PositionComponent} from './common/ranking/position/position.component';
import {DivSectionTwoComponent} from './component/div-section-two/div-section-two.component';
import {RowRankingComponent} from './component/row-ranking/row-ranking.component';
import {MvpComponent} from './common/ranking/mvp/mvp.component';

@NgModule({
  declarations: [
    // sections
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    PolicyComponent,
    HomeChallerComponent,

    // pipes
    FixImageUrlPipe,

    // directives
    ModalDirective,

    // components
    ButtonTypeTemplateComponent,
    CloudComponent,
    DownloadAppComponent,
    FooterComponent,
    BusinessComponent,
    VisionComponent,
    ContactComponent,
    ChallerSlideListComponent,
    ChallerSlideComponent,
    VideoChallerComponent,
    ImageRadiusComponent,
    TagsWebComponent,
    SelectorSiteComponent,
    SlideBannersComponent,
    ClickAngular,
    clickIOS,
    ToChallers,
    CloudNotificationComponent,
    ChallerVerticalSlideComponent,
    MenuBottomComponent,
    ContactCvComponent,
    DonwloadButtomsComponent,
    StoryComponent,
    MisionComponent,
    GlobalModalComponent,
    ContactJoinComponent,
    ChronometerComponent,
    EyeLoadingComponent,
    TopRankingHeaderComponent,
    ListRankingComponent,
    PositionComponent,
    DivSectionTwoComponent,
    RowRankingComponent,
    MvpComponent,

    // shared componente
    VideoLoaderComponent,
    VoteResultComponent,
    TourComponent,
    Home2Component,
    VideoStreamingComponent,
    ChronometerTimeVoteComponent,
    LegalComponent,
    EulaComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    ClickOutsideModule,
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
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    ScullyLibModule,
    /*GoogleTagManagerModule.forRoot({
      id: environment.KEY_TAG_MANAGER,
    })*/
  ],
  providers: [
    httpInterceptorProviders,
    // {provide: 'googleTagManagerId', useValue: environment.KEY_TAG_MANAGER}
  ],
  exports: [
    clickIOS,
    ClickAngular
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
