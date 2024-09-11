import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListManutencaoPage } from './list-manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: ListManutencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListManutencaoPageRoutingModule {}
