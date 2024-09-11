import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.scss'],
})
export class MenuTabsComponent  implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  tabNavigate(rota: any){
    this.nav.navigateForward(rota);
  }

}
