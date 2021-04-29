import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageRadiusComponent} from '../../components/image-radius/image-radius.component';
import {FixImageUrlPipe} from '../../pipes/fix-image-url.pipe';

import {HomeComponent} from '../../common/pages/home/home.component';
import {AboutusComponent} from '../../common/pages/aboutus/aboutus.component';
import {PolicyComponent} from '../../common/pages/policy/policy.component';
import {HomeChallerComponent} from '../../common/pages/home-challer/home-challer.component';
import {RecaptchatPipe} from '../../pipes/recaptchat.pipe';
import {ClickAngular, clickIOS, ModalDirective, ToChallers} from '../../directives/app-store.directive';
import {ButtonTypeTemplateComponent} from '../../component/button-type-template/button-type-template.component';
import {CloudComponent} from '../../component/cloud/cloud.component';
import {DownloadAppComponent} from '../../component/download-app/download-app.component';
import {FooterComponent} from '../../common/pages/footer/footer.component';
import {BusinessComponent} from '../../common/pages/business/business.component';
import {VisionComponent} from '../../common/pages/vision/vision.component';
import {ContactComponent} from '../../common/pages/contact/contact.component';
import {ChallerSlideListComponent} from '../../component/challer-slide-list/challer-slide-list.component';
import {ChallerSlideComponent} from '../../component/challer-slide/challer-slide.component';
import {VideoChallerComponent} from '../../components/video-challer/video-challer.component';
import {TagsWebComponent} from '../../component/tags-web/tags-web.component';
import {SelectorSiteComponent} from '../../component/selector-site/selector-site.component';
import {SlideBannersComponent} from '../../component/slide-banners/slide-banners.component';
import {ChallerVerticalSlideComponent} from '../../component/challer-vertical-slide/challer-vertical-slide.component';
import {MenuBottomComponent} from '../../component/menu-bottom/menu-bottom.component';
import {ContactCvComponent} from '../../component/contact-cv/contact-cv.component';
import {DonwloadButtomsComponent} from '../../donwload-buttoms/donwload-buttoms.component';
import {StoryComponent} from '../../common/pages/story/story.component';
import {MisionComponent} from '../../common/pages/mision/mision.component';
import {GlobalModalComponent} from '../../component/global-modal/global-modal.component';
import {ContactJoinComponent} from '../../common/pages/contact-join/contact-join.component';
import {ChronometerComponent} from './chronometer/chronometer.component';
import {EyeLoadingComponent} from '../../component/eye-loading/eye-loading.component';
import {TopRankingHeaderComponent} from '../../components/top-ranking-header/top-ranking-header.component';
import {ListRankingComponent} from '../../component/list-ranking/list-ranking.component';
import {PositionComponent} from '../../common/ranking/position/position.component';
import {DivSectionTwoComponent} from '../../component/div-section-two/div-section-two.component';
import {RowRankingComponent} from '../../component/row-ranking/row-ranking.component';
import {MvpComponent} from '../../common/ranking/mvp/mvp.component';
import {VideoLoaderComponent} from '../../component/media/video-loader/video-loader.component';
import {VoteResultComponent} from '../../component/vote-result/vote-result.component';
import {TourComponent} from '../../component/tour/tour.component';
import {Home2Component} from '../../common/pages/home2/home2.component';
import {VideoStreamingComponent} from '../../component/video-streaming/video-streaming.component';
import {ChronometerTimeVoteComponent} from '../../component/chronometer-time-vote/chronometer-time-vote.component';
import {LegalComponent} from '../../common/pages/legal/legal.component';
import {EulaComponent} from '../../common/eula/eula.component';
import {PrivacyPolicyComponent} from '../../common/pages/privacy-policy/privacy-policy.component';
import {DownloadComponent} from '../../common/pages/download/download.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {HttpClientModule} from '@angular/common/http';
import {ClickOutsideModule} from 'ng-click-outside';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ReactiveFormsModule} from '@angular/forms';
import {NgCircleProgressModule} from 'ng-circle-progress';

import {CloudNotificationComponent} from '../../component/cloud-notification/cloud-notification.component';
import {HeaderComponent} from '../../common/header/header.component';
import {TimerIconTypeComponent} from './timer-icon-type/timer-icon-type.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    PolicyComponent,
    HomeChallerComponent,

    // pipes
    FixImageUrlPipe,
    RecaptchatPipe,

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
    TagsWebComponent,
    SelectorSiteComponent,
    SlideBannersComponent,
    ClickAngular,
    clickIOS,
    ToChallers,
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
    VideoLoaderComponent,
    VoteResultComponent,
    TourComponent,
    Home2Component,
    VideoStreamingComponent,
    ChronometerTimeVoteComponent,
    LegalComponent,
    EulaComponent,
    PrivacyPolicyComponent,
    DownloadComponent,
    ImageRadiusComponent,
    CloudNotificationComponent,
    HeaderComponent,
    TimerIconTypeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    ClickOutsideModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxWebstorageModule.forRoot(),
    /* StoreModule.forRoot({
       modalLoginMessage: modalReducer,
       scrolling: scrollReducer,
       video: videoReducer,
       resize: resizeReducer,
       cloud: cloudReducer,
       background: bodyReducer,
       globalModal: modalGlobalReducer
     }),*/
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
  ],
  exports: [
    clickIOS,
    ClickAngular,
    FixImageUrlPipe,
    ImageRadiusComponent,
    HomeComponent,
    AboutusComponent,
    PolicyComponent,
    HomeChallerComponent,

    // pipes
    FixImageUrlPipe,
    RecaptchatPipe,

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
    TagsWebComponent,
    SelectorSiteComponent,
    SlideBannersComponent,
    ClickAngular,
    clickIOS,
    ToChallers,
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
    PrivacyPolicyComponent,
    DownloadComponent,
    ImageRadiusComponent,
    CloudNotificationComponent,
    HeaderComponent,
    TimerIconTypeComponent
  ]
})
export class SharedComponentsModule {
}
