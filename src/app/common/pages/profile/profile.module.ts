import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from './sites/info/profile.component';
import {SharedComponentsModule} from '../../../modules/shared-components/shared-components.module';
import {ProfileHeaderComponent} from './components/profile-header/profile-header.component';
import {ProfileSectionComponent} from './components/profile-section/profile-section.component';
import {HttpClientModule} from '@angular/common/http';
import {SlideSelectorComponent} from './components/slide-selector/slide-selector.component';
import { MosaicComponent } from './components/mosaic/mosaic.component';
import { SquareImageResponsiveComponent } from './components/square-image-responsive/square-image-responsive.component';
import {IconStatusComponent} from './components/icon-status/icon-status.component';
import {SquareImageLikeComponent} from './components/square-image-like/square-image-like.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileSectionComponent,
    SlideSelectorComponent,
    MosaicComponent,
    SquareImageResponsiveComponent,
    IconStatusComponent,
    SquareImageLikeComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
