import { ComponentsModule } from './../../../componentes/components.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilManutencaoPageRoutingModule } from './perfil-manutencao-routing.module';

import { PerfilManutencaoPage } from './perfil-manutencao.page';

import { register } from 'swiper/element/bundle';

register();

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilManutencaoPageRoutingModule
  ],
  declarations: [PerfilManutencaoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilManutencaoPageModule {}
