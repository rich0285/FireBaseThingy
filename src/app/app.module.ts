import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AngularFireStorageModule} from '@angular/fire/storage';
import * as firebase from 'firebase';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';




// Your web app's Firebase configuration
// tslint:disable-next-line:prefer-const
let Config = {
  apiKey: 'AIzaSyAUb3TiVWfdnvfIr-4XURqWU8O9aHQ-teU',
  authDomain: 'chattt-f34f5.firebaseapp.com',
  databaseURL: 'https://chattt-f34f5.firebaseio.com',
  projectId: 'chattt-f34f5',
  storageBucket: 'chattt-f34f5.appspot.com',
  messagingSenderId: '963159541266',
  appId: '1:963159541266:web:0e92591dcf9eb00e707acb',
  measurementId: 'G-7848YYK5P8'
};
// Initialize Firebase
firebase.initializeApp(Config);
firebase.analytics();
// tslint:disable-next-line:no-unused-expression


@NgModule({
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(Config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RouterModule
  ],
  declarations: [ AppComponent, UserProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
