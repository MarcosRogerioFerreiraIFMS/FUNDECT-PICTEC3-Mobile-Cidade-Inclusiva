import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContatoPage } from './list-contato.page';

const routes: Routes = [
  {
    path: '',
    component: ListContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListContatoPageRoutingModule {}
