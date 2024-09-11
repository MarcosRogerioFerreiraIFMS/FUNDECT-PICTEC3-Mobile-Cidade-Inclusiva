import { AcessibilidadeService } from './../../../servicos/dominio/acessibilidade.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Acessibilidade } from 'src/app/modelos/acessibilidade';

@Component({
  selector: 'app-list-acessibilidade',
  templateUrl: './list-acessibilidade.page.html',
  styleUrls: ['./list-acessibilidade.page.scss'],
})
export class ListAcessibilidadePage implements OnInit {

  locais: Acessibilidade[] = [];

  constructor(
    private nav: NavController,
    private acessibilidadeService: AcessibilidadeService,
  ) { }

  ionViewDidEnter() {
    this.locais = this.acessibilidadeService.findAll();
    console.log(this.locais);
  }

  ngOnInit() {
  }

  voltar(){
    this.nav.navigateBack('dashboard');
  }

  perfil(){
    this.nav.navigateForward('perfil-acessibilidade');
  }

}
