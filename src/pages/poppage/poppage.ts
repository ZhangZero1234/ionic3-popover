import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the PoppagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poppage',
  templateUrl: 'poppage.html',
})

export class PoppagePage {
  items:Array<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.items = this.navParams.get("list");
  	// console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoppagePage');
  }

  close(event,i){
  	this.viewCtrl.dismiss(JSON.stringify({"content":event.target.innerText,
  						   "index":i}));
  	// console.log({"content":event.target.innerText,
  	// 					   "index":i});
  }
}
