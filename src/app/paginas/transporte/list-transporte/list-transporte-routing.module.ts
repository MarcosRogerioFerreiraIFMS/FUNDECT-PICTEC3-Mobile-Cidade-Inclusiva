import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTransportePage } from './list-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: ListTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTransportePageRoutingModule {}
