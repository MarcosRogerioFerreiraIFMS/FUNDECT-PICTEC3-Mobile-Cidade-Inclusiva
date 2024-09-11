import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-manutencao',
  templateUrl: './perfil-manutencao.page.html',
  styleUrls: ['./perfil-manutencao.page.scss'],
})
export class PerfilManutencaoPage implements OnInit {

  caminhoFoto: string = "/assets/manutencao/";

  oficina = {
      nome: "Bicycle - Manutenção de Bicicletas e Motos",
      telefone: "(67) 99888-1234",
      email: "bicycle@gmail.com",
      rua: "Av. Campo Grande",
      numero: 123,
      bairro: "Centro",
      cidade: "Naviraí",
      estado: "MS",
      like: "20",
      logo: "assets/manutencao/manutencao03.jpg",
      album: [
        {foto: "manutencao-01.jpg"},
        {foto: "manutencao-02.jpg"},
        {foto: "manutencao-03.jpg"}
      ],
      especialidade: [
        {descricao: "Cadeira de Rodas Manual"},
        {descricao: "Cadeira de Rodas Elétrica"},
        {descricao: "Andador"}
      ]
  }

  constructor(private nav: NavController) { }

  voltar(){
    this.nav.navigateBack('list-manutencao');
  }

  comentar(){
    this.nav.navigateForward('add-edit-comentario');
  }

  ngOnInit() {
  }


}
