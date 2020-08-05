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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
