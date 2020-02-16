import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'notes', component: AppComponent,  canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
