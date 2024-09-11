import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAcessibilidadePage } from './list-acessibilidade.page';

const routes: Routes = [
  {
    path: '',
    component: ListAcessibilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAcessibilidadePageRoutingModule {}
