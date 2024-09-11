import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditManutencaoPageRoutingModule } from './add-edit-manutencao-routing.module';

import { AddEditManutencaoPage } from './add-edit-manutencao.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditManutencaoPageRoutingModule
  ],
  declarations: [AddEditManutencaoPage]
})
export class AddEditManutencaoPageModule {}
