import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }


  sidebar_list_items = ['HOME', 'CREATE', 'SHOW', 'ABOUT'];
  selected_nav_item: string;

  onSelect(nav_item: string): void {
    this.selected_nav_item = nav_item;
  }

  swipe(action, sidenav) {
    console.log("CALLED LEFT");
    sidenav.close();
  }

}
