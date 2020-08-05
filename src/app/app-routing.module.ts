import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './common/home/home.component';
import {AboutusComponent} from './common/aboutus/aboutus.component';
import {PolicyComponent} from './common/policy/policy.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
