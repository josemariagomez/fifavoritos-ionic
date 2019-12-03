import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeosPageRoutingModule } from './tradeos-routing.module';

import { TradeosPage } from './tradeos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeosPageRoutingModule
  ],
  declarations: [TradeosPage]
})
export class TradeosPageModule {}
