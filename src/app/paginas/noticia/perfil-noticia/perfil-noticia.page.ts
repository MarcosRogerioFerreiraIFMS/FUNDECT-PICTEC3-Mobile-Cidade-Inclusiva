import { NoticiaService } from './../../../servicos/dominio/noticia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-noticia',
  templateUrl: './perfil-noticia.page.html',
  styleUrls: ['./perfil-noticia.page.scss'],
})
export class PerfilNoticiaPage implements OnInit {

  noticia: any;

  constructor(
    private nav: NavController,
    private noticiaService: NoticiaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.noticia = this.noticiaService.findById(id)[0];
  }

  voltar(){
    this.nav.back();
  }

}
