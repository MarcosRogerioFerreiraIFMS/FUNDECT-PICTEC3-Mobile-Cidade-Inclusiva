import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-manutencao',
  templateUrl: './list-manutencao.page.html',
  styleUrls: ['./list-manutencao.page.scss'],
})
export class ListManutencaoPage implements OnInit {

  oficinas = [
    {
      nome: "Bicycle - Manutenção de Bicicletas e Motos",
      telefone: "(67) 99888-1234",
      email: "bicycle@gmail.com",
      rua: "Av. Campo Grande",
      numero: 123,
      bairro: "Centro",
      cidade: "Naviraí",
      estado: "MS",
      like: "20",
      foto: "assets/manutencao/manutencao03.jpg"
    },
    {
      nome: "Dom Eduardo Bicicletaria",
      telefone: "(67) 98765-4321",
      email: "dom_eduardo@gmail.com",
      rua: "Av. Dourados",
      numero: 123,
      bairro: "Centro",
      cidade: "Naviraí",
      estado: "MS",
      like: "18",
      foto: "assets/manutencao/manutencao01.png"
    }
  ]

  constructor(private nav: NavController) { }

  voltar(){
    this.nav.navigateBack('dashboard');
    console.log('Clicou para voltar');
  }

  perfil(){
    this.nav.navigateForward('perfil-manutencao');
  }

  addOficinas(){
    this.nav.navigateForward('add-edit-manutencao');
  }

  tabNavigate(rota: any){
    this.nav.navigateForward(rota);
  }

  ngOnInit() {
  }

}
