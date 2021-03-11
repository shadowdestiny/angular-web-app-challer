import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {RouterModule} from '@angular/router';
import {ProfileSectionComponent} from './profile-section/profile-section.component';
import {ImageRadiusComponent} from './image-radius/image-radius.component';

@NgModule({
  declarations: [
    ProfileHeaderComponent,
    ProfileSectionComponent,
    ImageRadiusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProfileSectionComponent,
    ProfileHeaderComponent,
    ImageRadiusComponent
  ]
})
export class SharedComponentsModule { }
