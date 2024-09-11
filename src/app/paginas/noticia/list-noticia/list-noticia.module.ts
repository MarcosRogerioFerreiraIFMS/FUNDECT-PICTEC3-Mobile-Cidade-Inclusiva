import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNoticiaPageRoutingModule } from './list-noticia-routing.module';

import { ListNoticiaPage } from './list-noticia.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListNoticiaPageRoutingModule
  ],
  declarations: [ListNoticiaPage]
})
export class ListNoticiaPageModule {}
