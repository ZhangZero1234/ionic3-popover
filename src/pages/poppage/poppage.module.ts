import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoppagePage } from './poppage';

@NgModule({
  declarations: [
    PoppagePage,
  ],
  imports: [
    IonicPageModule.forChild(PoppagePage),
  ],
})
export class PoppagePageModule {}
