import { Component, OnInit, Input } from '@angular/core';
import {Note} from "./model/note";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})

export class CreateNoteComponent implements OnInit {

  @Input() navitem: string;
  notes: FirebaseListObservable<any>;
  myNote = new Note('', '');

  constructor(db: AngularFireDatabase) {
    this.notes = db.list('/notes');
  }

  ngOnInit() {
  }

  createNote(myNote) {
    console.log(myNote);
    var status = this.notes.push(myNote);
    console.log('STATUS OF INSERTION:' + status);
    this.myNote.title = "";
    this.myNote.note = "";
  }

}
