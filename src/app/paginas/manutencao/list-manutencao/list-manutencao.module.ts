import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListManutencaoPageRoutingModule } from './list-manutencao-routing.module';

import { ListManutencaoPage } from './list-manutencao.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListManutencaoPageRoutingModule
  ],
  declarations: [ListManutencaoPage]
})
export class ListManutencaoPageModule {}
