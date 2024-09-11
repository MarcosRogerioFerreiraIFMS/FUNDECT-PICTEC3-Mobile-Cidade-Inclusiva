import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditComentarioPageRoutingModule } from './add-edit-comentario-routing.module';

import { AddEditComentarioPage } from './add-edit-comentario.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditComentarioPageRoutingModule
  ],
  declarations: [AddEditComentarioPage]
})
export class AddEditComentarioPageModule {}
