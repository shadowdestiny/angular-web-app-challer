import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from './info/profile.component';
import {SharedComponentsModule} from '../../../modules/shared-components/shared-components.module';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {ProfileSectionComponent} from './profile-section/profile-section.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ImageRadiusComponent} from '../../../components/image-radius/image-radius.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileSectionComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
