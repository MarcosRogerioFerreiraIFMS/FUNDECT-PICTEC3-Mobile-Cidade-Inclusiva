import { ContatoService } from './../../../servicos/dominio/contato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contato } from 'src/app/modelos/contato';

@Component({
  selector: 'app-list-contato',
  templateUrl: './list-contato.page.html',
  styleUrls: ['./list-contato.page.scss'],
})
export class ListContatoPage implements OnInit {
  contatos: Contato[] = [];

  constructor(
    private nav: NavController,
    public contatoService: ContatoService,
    private route: ActivatedRoute
  ) { }

  ionViewDidEnter() {
    this.contatos = this.contatoService.findAll();
    console.log(this.contatos);
  }

  ngOnInit() {
    //console.log(this.contatoService.findById(1));
  }

  voltar(){
    this.nav.navigateBack('dashboard');
  }


}
