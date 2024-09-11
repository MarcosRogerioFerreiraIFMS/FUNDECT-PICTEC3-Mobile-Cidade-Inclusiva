import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-comentario',
  templateUrl: './add-edit-comentario.page.html',
  styleUrls: ['./add-edit-comentario.page.scss'],
})
export class AddEditComentarioPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {

  }

  voltar(){
    this.nav.back();
  }

  comentar(){
    this.nav.back();
  }

}
