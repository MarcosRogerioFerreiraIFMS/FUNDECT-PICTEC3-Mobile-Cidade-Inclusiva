import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAcessibilidadePageRoutingModule } from './perfil-acessibilidade-routing.module';

import { PerfilAcessibilidadePage } from './perfil-acessibilidade.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAcessibilidadePageRoutingModule
  ],
  declarations: [PerfilAcessibilidadePage]
})
export class PerfilAcessibilidadePageModule {}
