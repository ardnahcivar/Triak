"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var auth_1 = require("angularfire2/auth");
var environment_1 = require("../environments/environment");
var app_component_1 = require("./app.component");
var create_note_component_1 = require("./create-note/create-note.component");
var show_notes_component_1 = require("./show-notes/show-notes.component");
var detail_note_component_1 = require("./detail-note/detail-note.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            create_note_component_1.CreateNoteComponent,
            show_notes_component_1.ShowNotesComponent,
            detail_note_component_1.DetailNoteComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdToolbarModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdSidenavModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdMenuModule,
            material_1.MdInputModule,
            material_1.MdCardModule,
            material_1.MdProgressSpinnerModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            database_1.AngularFireDatabaseModule,
            auth_1.AngularFireAuthModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
