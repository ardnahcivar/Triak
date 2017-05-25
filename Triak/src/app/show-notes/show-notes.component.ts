import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})

export class ShowNotesComponent implements OnInit {

  @Input() navitem: string;
  allnotes: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.allnotes = db.list('/notes');
    console.log(this.allnotes);
  }

  ngOnInit() {
  }


  removeNote(selected_key: string) {
    this.allnotes.remove(selected_key);
  }

}
