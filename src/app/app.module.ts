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

@NgModule({
  declarations: [
    // sections
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    PolicyComponent,

    // components
    ButtonTypeTemplateComponent,
    CloudComponent,
    DownloadAppComponent,
    FooterComponent,
    BusinessComponent,
    VisionComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
