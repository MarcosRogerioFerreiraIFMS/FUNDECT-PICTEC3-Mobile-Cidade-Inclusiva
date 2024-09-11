import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAcessibilidadePageRoutingModule } from './list-acessibilidade-routing.module';

import { ListAcessibilidadePage } from './list-acessibilidade.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListAcessibilidadePageRoutingModule
  ],
  declarations: [ListAcessibilidadePage]
})
export class ListAcessibilidadePageModule {}
