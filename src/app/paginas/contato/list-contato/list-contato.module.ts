import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListContatoPageRoutingModule } from './list-contato-routing.module';

import { ListContatoPage } from './list-contato.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListContatoPageRoutingModule
  ],
  declarations: [ListContatoPage]
})
export class ListContatoPageModule {}
