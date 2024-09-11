import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contato } from 'src/app/modelos/contato';
import { ContatoService } from 'src/app/servicos/dominio/contato.service';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.page.html',
  styleUrls: ['./perfil-contato.page.scss'],
})
export class PerfilContatoPage implements OnInit {

  contato: any;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private nav: NavController,
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.contato = this.contatoService.findById(id)[0];
  }

  comentar() {
    this.nav.navigateForward('add-edit-comentario');
  }

  voltar(){
    this.nav.navigateBack('list-contato');
  }


}
