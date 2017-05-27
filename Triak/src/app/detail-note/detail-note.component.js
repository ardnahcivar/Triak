"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DetailNoteComponent = (function () {
    function DetailNoteComponent() {
    }
    DetailNoteComponent.prototype.ngOnInit = function () {
    };
    return DetailNoteComponent;
}());
__decorate([
    core_1.Input()
], DetailNoteComponent.prototype, "detail_note");
DetailNoteComponent = __decorate([
    core_1.Component({
        selector: 'detail-note',
        templateUrl: './detail-note.component.html',
        styleUrls: ['./detail-note.component.css']
    })
], DetailNoteComponent);
exports.DetailNoteComponent = DetailNoteComponent;
