import { NoticiaService } from './../../../servicos/dominio/noticia.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Noticia } from 'src/app/modelos/noticia';

@Component({
  selector: 'app-list-noticia',
  templateUrl: './list-noticia.page.html',
  styleUrls: ['./list-noticia.page.scss'],
})
export class ListNoticiaPage implements OnInit {

  noticias: Noticia[] = []

  constructor(
    private nav: NavController,
    private noticiaService: NoticiaService
  ) { }

  ionViewDidEnter() {
    this.noticias = this.noticiaService.findAll();
    console.log(this.noticias);
  }

  ngOnInit() {
  }

  voltar(){
    this.nav.navigateBack('dashboard');
  }

  perfil(){
    this.nav.navigateForward('perfil-noticia');
  }

}
