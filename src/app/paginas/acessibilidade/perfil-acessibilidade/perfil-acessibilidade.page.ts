import { AcessibilidadeService } from './../../../servicos/dominio/acessibilidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-acessibilidade',
  templateUrl: './perfil-acessibilidade.page.html',
  styleUrls: ['./perfil-acessibilidade.page.scss'],
})
export class PerfilAcessibilidadePage implements OnInit {

  caminhoFoto: string = "/assets/acessibilidade/locais/";
  pathRecurso: string = "/assets/acessibilidade/simbolos/";

  local: any;

  constructor(
    private nav: NavController,
    private route: ActivatedRoute,
    private acessibilidadeService: AcessibilidadeService,
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.local = this.acessibilidadeService.findById(id)[0];
  }

  voltar(){
    this.nav.back();
  }

  comentar(){
    this.nav.navigateForward('add-edit-comentario');
  }

}
