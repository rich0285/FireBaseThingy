import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import * as firebase from 'firebase';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './auth.guard';

// Your web app's Firebase configuration
const Config = {
  apiKey: 'AIzaSyAUb3TiVWfdnvfIr-4XURqWU8O9aHQ-teU',
  authDomain: 'chattt-f34f5.firebaseapp.com',
  databaseURL: 'https://chattt-f34f5.firebaseio.com',
  projectId: 'chattt-f34f5',
  storageBucket: 'chattt-f34f5.appspot.com',
  messagingSenderId: '963159541266',
  appId: '1:963159541266:web:d9bd3e7a711a6add707acb',
  measurementId: 'G-D4X7SC1J6C'
};
// Initialize Firebase
firebase.initializeApp(Config);
firebase.analytics();
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize
    AngularFireModule.initializeApp(Config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage

  ],
  declarations: [ AppComponent, UserProfileComponent ],
  bootstrap: [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule {}
