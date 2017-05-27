import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdToolbarModule, MdSidenavModule, MdButtonModule,
  MdIconModule, MdMenuModule, MdInputModule, MdCardModule, MdProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ShowNotesComponent,
    DetailNoteComponent,
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
    MdProgressSpinnerModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
