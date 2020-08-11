import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { PolicyComponent } from './common/policy/policy.component';
import {ButtonTypeTemplateComponent} from "./component/button-type-template/button-type-template.component";
import {CloudComponent} from "./component/cloud/cloud.component";
import {DownloadAppComponent} from "./component/download-app/download-app.component";
import { FooterComponent } from './common/footer/footer.component';
import { BusinessComponent } from './common/business/business.component';
import { VisionComponent } from './common/vision/vision.component';
import { ContactComponent } from './common/contact/contact.component';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { HomeChallerComponent } from './common/home-challer/home-challer.component';
import {ChallerSlideListComponent} from "./component/challer-slide-list/challer-slide-list.component";
import {ChallerSlideComponent} from "./component/challer-slide/challer-slide.component";
import {VideoChallerComponent} from "./component/video-challer/video-challer.component";
import {FixImageUrlPipe} from "./pipes/fix-image-url.pipe";
import {HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";
import {httpInterceptorProviders} from "./interceptors";
import {ImageRadiusComponent} from "./component/modal-sections/image-radius/image-radius.component";
import {TagsWebComponent} from "./component/tags-web/tags-web.component";
import {SelectorSiteComponent} from "./component/selector-site/selector-site.component";
import {SlideBannersComponent} from "./component/slide-banners/slide-banners.component";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
