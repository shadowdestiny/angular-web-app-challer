import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BaseModule } from '../../base.module';
import { VideoLoaderButtonComponent } from './video-loader-button.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [VideoLoaderButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseModule,
    NgCircleProgressModule.forRoot({ showSubtitle: true }),
  ],
  exports: [BaseModule, VideoLoaderButtonComponent]
})
export class VideoLoaderButtonComponentModule { }
