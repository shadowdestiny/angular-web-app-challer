import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './common/home/home.component';
import {AboutusComponent} from './common/aboutus/aboutus.component';
import {PolicyComponent} from './common/policy/policy.component';
import {BusinessComponent} from './common/business/business.component';
import {VisionComponent} from './common/vision/vision.component';
import {ContactComponent} from './common/contact/contact.component';
import {HomeChallerComponent} from './common/home-challer/home-challer.component';
import {ContactCvComponent} from './component/contact-cv/contact-cv.component';
import {StoryComponent} from './common/story/story.component';
import {MisionComponent} from './common/mision/mision.component';
import {Home2Component} from './common/home2/home2.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: Home2Component,
  },
  {
    path: 'home2', pathMatch: 'full', component: Home2Component,
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent,
  },
  {
    path: 'about-us', pathMatch: 'full', component: AboutusComponent,
  },
  {
    path: 'policy', pathMatch: 'full', component: PolicyComponent,
  },
  {
    path: 'business', pathMatch: 'full', component: BusinessComponent,
  },
  {
    path: 'vision', pathMatch: 'full', component: VisionComponent,
  },
  {
    path: 'contact', pathMatch: 'full', component: ContactComponent,
  },
  {
    path: 'contact-cv', pathMatch: 'full', component: ContactCvComponent,
  },
  {
    path: 'home-challer', pathMatch: 'full', component: HomeChallerComponent,
  },
  {
    path: 'story', pathMatch: 'full', component: StoryComponent,
  },
  {
    path: 'mision', pathMatch: 'full', component: MisionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
