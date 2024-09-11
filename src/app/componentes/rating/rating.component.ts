import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent  implements OnInit {
  @Input() numStars: number = 5;
  @Input() value: number = 4.5;
  @Input() leitura: boolean = false;

  //Quando a estrela for clicada
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];

  constructor(private nav: NavController) { }

  voltar(){
    this.nav.navigateBack('perfil-manutencao');
  }

  ngAfterViewInit(){
    this.calcStar();
  }

  calcStar(){
    this.stars = [];
    let tmp = this.value;
    for(let i=0; i < this.numStars; i++, tmp--){
      if(tmp >= 1){
        this.stars.push("star");
      } else if(tmp > 0 && tmp < 1) {
        this.stars.push("star-half");
      } else {
        this.stars.push("star-outline");
      }
    }
  }

  starCliked(index: any){
    if(!this.leitura){
      this.value = index + 1;
      this.ionClick.emit(this.value);
      this.calcStar();
    }
  }

  ngOnInit() {}

}
