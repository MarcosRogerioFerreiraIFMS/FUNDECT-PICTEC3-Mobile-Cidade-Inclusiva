import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditManutencaoPage } from './add-edit-manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditManutencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditManutencaoPageRoutingModule {}
