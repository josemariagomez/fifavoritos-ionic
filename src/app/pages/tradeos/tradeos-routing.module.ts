import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeosPage } from './tradeos.page';

const routes: Routes = [
  {
    path: '',
    component: TradeosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeosPageRoutingModule {}
