import { TransporteService } from './../../../servicos/dominio/transporte.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Transporte } from 'src/app/modelos/transporte';

@Component({
  selector: 'app-list-transporte',
  templateUrl: './list-transporte.page.html',
  styleUrls: ['./list-transporte.page.scss'],
})
export class ListTransportePage implements OnInit {
  caminhoFoto: string = "assets/transporte/";
  motoristas: Transporte[] = [];

  constructor(
    private nav: NavController,
    public transporteService: TransporteService,
    private route: ActivatedRoute
  ) { }

  ionViewDidEnter() {
    this.motoristas = this.transporteService.findAll();
    console.log(this.motoristas);
  }

  ngOnInit() {

  }

  voltar(){
    this.nav.navigateBack('dashboard');
  }

}
