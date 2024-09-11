import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilContatoPage } from './perfil-contato.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilContatoPageRoutingModule {}
