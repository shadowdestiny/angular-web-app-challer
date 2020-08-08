import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './common/home/home.component';
import {AboutusComponent} from './common/aboutus/aboutus.component';
import {PolicyComponent} from './common/policy/policy.component';
import {BusinessComponent} from "./common/business/business.component";
import {VisionComponent} from "./common/vision/vision.component";
import {ContactComponent} from "./common/contact/contact.component";


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
