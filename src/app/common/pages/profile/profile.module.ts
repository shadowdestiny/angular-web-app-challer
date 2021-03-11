import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from './info/profile.component';
import {SharedComponentsModule} from '../../../modules/shared-components/shared-components.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentsModule
  ]
})
export class ProfileModule { }
