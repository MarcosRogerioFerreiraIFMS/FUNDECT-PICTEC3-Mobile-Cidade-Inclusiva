import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAcessibilidadePage } from './perfil-acessibilidade.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAcessibilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAcessibilidadePageRoutingModule {}
