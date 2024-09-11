import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilNoticiaPageRoutingModule } from './perfil-noticia-routing.module';

import { PerfilNoticiaPage } from './perfil-noticia.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilNoticiaPageRoutingModule
  ],
  declarations: [PerfilNoticiaPage]
})
export class PerfilNoticiaPageModule {}
