import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTransportePageRoutingModule } from './list-transporte-routing.module';

import { ListTransportePage } from './list-transporte.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ListTransportePageRoutingModule
  ],
  declarations: [ListTransportePage]
})
export class ListTransportePageModule {}
