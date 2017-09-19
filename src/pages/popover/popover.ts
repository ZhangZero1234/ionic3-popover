import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PoppagePage } from '../poppage/poppage';
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-popover',
  	templateUrl: 'popover.html',
})
export class PopoverPage {
  temp:Array<any>=[null,null,null,null];
  list:Array<String>=['Learn Ionic','Documentation','Showcase','GitHub Repo'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PoppagePage,{
    	list:this.list
    });
    popover.onDidDismiss(val=>{
    	console.log("dismiss : "+ val);
    	this.temp[parseInt(JSON.parse(val).index)] = JSON.parse(val).content;
    	console.log(this.temp);
    });
    popover.present({
      ev: myEvent
    });
  }
}
