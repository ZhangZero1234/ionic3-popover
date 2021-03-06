var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PoppagePage } from '../poppage/poppage';
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(PoppagePage);
        popover.present({
            ev: myEvent
        });
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-popover',
        templateUrl: 'popover.html',
    }),
    __metadata("design:paramtypes", [PopoverController])
], PopoverPage);
export { PopoverPage };
//# sourceMappingURL=popover.js.map