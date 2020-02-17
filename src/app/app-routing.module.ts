import { NgModule } from '@angular/core';
import {AuthGuard} from './auth.guard';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent},
  {path: 'login', component: UserProfileComponent }
];
@NgModule({imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

