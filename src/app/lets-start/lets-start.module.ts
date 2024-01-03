import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetsStartPageRoutingModule } from './lets-start-routing.module';

import { LetsStartPage } from './lets-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetsStartPageRoutingModule
  ],
  declarations: [LetsStartPage]
})
export class LetsStartPageModule {}
