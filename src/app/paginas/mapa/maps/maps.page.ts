import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController) { }

  ionViewDidEnter(){
    /** Cria o mapa quando finalizar a renderização do tela */
    this.createMap();
  }

  ionViewWillLeave(){
    /** Finaliza o mapa quando sair da tela */
    this.map.destroy();
  }

  ngOnInit() {
  }

  /** Metodo para criar o mapa */
  async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: -23.06935,
          lng: -54.21221
        },
        zoom: 15,
      },
    });
    //await this.addMarkers();
    await this.clickMap();
  }

  /** Método que permite o clique sobre o mapa para
      inserir um comentário sobre algum problema na via */
  async clickMap(){
    await this.map.setOnMapClickListener(async (marker) => {

      /** Adiciona um marcador quando for invocado passando a posição lat e lng clicada */
      await this.newMarker(marker);

      /** Apresenta uma tela no formato modal para inserir o comentário */

      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.32],
        initialBreakpoint: 0.32,
      });
      modal.present();
      });
  }

  /** Resposável por criar um novo marcador na posição em que for clicado o mapa */
  async newMarker(position: any){
    /** Cria um marker com base na posição informada */
    const marker: Marker = {
      coordinate: {
        lat: position.latitude,
        lng: position.longitude,
      },
    };

    /** Exclui o marcador quando o marcador for clicado */
    this.map.setOnMarkerClickListener(async (marker) => {
      this.map.removeMarker(marker.markerId);
    });

    /** Adiciona o marcador no mapa */
    await this.map.addMarker(marker);
  }

  voltar(){
    this.nav.navigateBack('dashboard');
  }

}
