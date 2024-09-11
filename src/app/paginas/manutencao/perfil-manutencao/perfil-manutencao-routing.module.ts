import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilManutencaoPage } from './perfil-manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilManutencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilManutencaoPageRoutingModule {}
