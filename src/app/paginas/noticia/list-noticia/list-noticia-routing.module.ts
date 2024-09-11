import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNoticiaPage } from './list-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: ListNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNoticiaPageRoutingModule {}
