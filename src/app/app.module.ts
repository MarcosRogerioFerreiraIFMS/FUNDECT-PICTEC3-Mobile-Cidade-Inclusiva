import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoService } from './servicos/dominio/contato.service';
import { TransporteService } from './servicos/dominio/transporte.service';
import { NoticiaService } from './servicos/dominio/noticia.service';
import { AcessibilidadeService } from './servicos/dominio/acessibilidade.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ContatoService, TransporteService, NoticiaService, AcessibilidadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
