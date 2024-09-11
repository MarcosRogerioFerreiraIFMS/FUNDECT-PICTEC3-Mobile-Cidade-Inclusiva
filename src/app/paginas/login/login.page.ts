import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController,
    public menu: MenuController) { }

  //Quando entrar na página de login
  ionViewWillEnter(){
    this.menu.enable(false);
  }

  //Quando sair da página de login
  ionViewDidLeave(){
    this.menu.enable(true);
  }

  acessar(){
    this.nav.navigateForward('dashboard');
  }

  ngOnInit() {
  }

}
