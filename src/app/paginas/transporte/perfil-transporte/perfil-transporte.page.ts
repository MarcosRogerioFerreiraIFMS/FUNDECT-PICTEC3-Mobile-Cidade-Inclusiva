import { TransporteService } from './../../../servicos/dominio/transporte.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-transporte',
  templateUrl: './perfil-transporte.page.html',
  styleUrls: ['./perfil-transporte.page.scss'],
})
export class PerfilTransportePage implements OnInit {

  caminhoFoto: string = "assets/transporte/";

  motorista: any;

  constructor(
    private nav: NavController,
    private route: ActivatedRoute,
    private transporteService: TransporteService,
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.motorista = this.transporteService.findById(id)[0];
  }

  voltar(){
    this.nav.back();
  }

  comentar() {
    this.nav.navigateForward('add-edit-comentario');
  }

}
