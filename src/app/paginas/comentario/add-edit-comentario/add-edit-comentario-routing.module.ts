import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditComentarioPage } from './add-edit-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditComentarioPageRoutingModule {}
