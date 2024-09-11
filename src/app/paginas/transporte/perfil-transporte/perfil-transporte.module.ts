import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilTransportePageRoutingModule } from './perfil-transporte-routing.module';

import { PerfilTransportePage } from './perfil-transporte.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    PerfilTransportePageRoutingModule
  ],
  declarations: [PerfilTransportePage]
})
export class PerfilTransportePageModule {}
