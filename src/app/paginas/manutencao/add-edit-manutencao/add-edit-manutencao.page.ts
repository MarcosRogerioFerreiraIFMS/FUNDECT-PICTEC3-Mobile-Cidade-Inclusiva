import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-manutencao',
  templateUrl: './add-edit-manutencao.page.html',
  styleUrls: ['./add-edit-manutencao.page.scss'],
})
export class AddEditManutencaoPage implements OnInit {

  manutencaoForm: FormGroup;
  especialidade = undefined;

  constructor(
    private nav: NavController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    /**
   * id, nome, telefone, email, rua, numero, bairro, logo, foto, especialidade (id, descricao)
   */
    this.manutencaoForm = this.formBuilder.group({
      nome: ['', Validators.required]
    })
  }

  voltar(){
    this.nav.navigateBack('list-manutencao');
  }

  tabNavigate(rota: any){
    this.nav.navigateBack('dashboard');
  }

  especialidades = [
    {
      id: 1,
      descricao: 'Cadeiras de Rodas Manual',
    },
    {
      id: 2,
      descricao: 'Cadeiras de Rodas Elétrica',
    },
    {
      id: 3,
      descricao: 'Muleta Auxiliar',
    },
    {
      id: 4,
      descricao: 'Andador',
    },
  ];

  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.especialidade = ev.target.value;
  }





}
