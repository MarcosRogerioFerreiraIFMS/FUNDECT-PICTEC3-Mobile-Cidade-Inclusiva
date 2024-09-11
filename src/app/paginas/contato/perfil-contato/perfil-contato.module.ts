import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilContatoPageRoutingModule } from './perfil-contato-routing.module';

import { PerfilContatoPage } from './perfil-contato.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    PerfilContatoPageRoutingModule
  ],
  declarations: [PerfilContatoPage]
})
export class PerfilContatoPageModule {}
