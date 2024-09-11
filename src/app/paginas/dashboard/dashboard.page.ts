import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  imgGrid!: any[];

  constructor(public nav: NavController) { }

  navegacao(rotas: any){
    this.nav.navigateForward(rotas);
  }

  ngOnInit() {
    this.imgGrid = [
      {
        img: 'assets/dashboard/icon-mapa.png',
        name: 'Registrar Ocorrências',
        rotas: 'maps'
      },
      {
        img: 'assets/dashboard/icon-cadeira.png',
        name: 'Acessibilidade Urbana',
        rotas: 'list-acessibilidade'
      },
      {
        img: 'assets/dashboard/icon-contatos.png',
        name: 'Lista de Contatos',
        rotas: 'list-contato'
      },
      {
        img: 'assets/dashboard/icon-onibus.png',
        name: 'Transporte',
        rotas: 'list-transporte'
      },
      {
        img: 'assets/dashboard/icon-jornal.png',
        name: 'Notícias',
        rotas: 'list-noticia'
      },
      {
        img: 'assets/dashboard/icon-ferramentas.png',
        name: 'Manutenção',
        rotas: 'list-manutencao'
      }
    ]
  }

}
