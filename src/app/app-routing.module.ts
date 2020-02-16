import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'login', component: UserProfileComponent, canActivate : [AuthGuard] }
]
@NgModule({
  imports: [
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

