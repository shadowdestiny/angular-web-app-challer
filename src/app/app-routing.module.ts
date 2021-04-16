import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './common/pages/home/home.component';
import {PolicyComponent} from './common/pages/policy/policy.component';
import {BusinessComponent} from './common/pages/business/business.component';
import {VisionComponent} from './common/pages/vision/vision.component';
import {ContactComponent} from './common/pages/contact/contact.component';
import {HomeChallerComponent} from './common/pages/home-challer/home-challer.component';
import {ContactCvComponent} from './component/contact-cv/contact-cv.component';
import {StoryComponent} from './common/pages/story/story.component';
import {MisionComponent} from './common/pages/mision/mision.component';
import {Home2Component} from './common/pages/home2/home2.component';
import {LegalComponent} from './common/pages/legal/legal.component';
import {EulaComponent} from './common/eula/eula.component';
import {MvpComponent} from './common/ranking/mvp/mvp.component';
import {DownloadComponent} from './common/pages/download/download.component';
import {AboutusComponent} from './common/pages/aboutus/aboutus.component';
import {PrivacyPolicyComponent} from './common/pages/privacy-policy/privacy-policy.component';
import {ProfileModule} from './common/pages/profile/profile.module';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent,
  },
  // home
  {
    path: 'home2', pathMatch: 'full', component: Home2Component,
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent,
  },
  // home
  {
    path: 'about-us', pathMatch: 'full', component: AboutusComponent,
  },
  {
    path: 'policy', pathMatch: 'full', component: PolicyComponent,
  },
  {
    path: 'privacypolicy', pathMatch: 'full', component: PrivacyPolicyComponent,
  },
  //
  {
    path: 'legal', pathMatch: 'full', component: LegalComponent,
  },
  {
    path: 'eula', pathMatch: 'full', component: EulaComponent,
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
    path: 'challenge/:challenger_id', pathMatch: 'full', component: HomeChallerComponent,
  },
  {
    path: 'story', pathMatch: 'full', component: StoryComponent,
  },
  {
    path: 'mision', pathMatch: 'full', component: MisionComponent,
  },
  {
    path: 'ranking', pathMatch: 'full', component: HomeChallerComponent,
  },
  {
    path: 'download', pathMatch: 'full', component: DownloadComponent,
  },
  /*module profile*/
  {
    path: 'profile/:user_id',
    loadChildren: () => import('./common/pages/profile/profile.module').then( m => ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
