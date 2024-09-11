import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilTransportePage } from './perfil-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilTransportePageRoutingModule {}
