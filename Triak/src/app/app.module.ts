import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdToolbarModule, MdSidenavModule, MdButtonModule,
  MdIconModule, MdMenuModule, MdInputModule, MdCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ShowNotesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdInputModule,
    MdCardModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
