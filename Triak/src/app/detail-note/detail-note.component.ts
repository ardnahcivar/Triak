import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../create-note/model/note';

@Component({
  selector: 'detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.css']
})

export class DetailNoteComponent implements OnInit {

  @Input() detail_note:Note;

  constructor() { }

  ngOnInit() {
  }

}
