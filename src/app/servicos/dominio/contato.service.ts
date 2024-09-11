import { Injectable } from "@angular/core";
import { Contato } from "src/app/modelos/contato";

@Injectable()
export class ContatoService {

  contatos = [
    {
      id: 1,
      nome: "Helena dos Santos",
      foto: "assets/contato/user01.jpeg",
      telefone: "(67) 3461-1087",
      email: "casarao_oriental@gmail.com",
      habilitacao: "CUIDADOR",
      comentario: [
        {
          id: 1,
          like: 4,
          comentario: "Muito bom, profissional de confiança",
          usuario: {
            id: 1,
            nome: "Teste",
            foto: "assets/usuarios/usuario01.png"
          }
        }
      ]
    },
    {
      id: 2,
      nome: "Antonio da Silva",
      foto: "assets/contato/user02.jpeg",
      telefone: "(67) 3461-1087",
      email: "casarao_oriental@gmail.com",
      habilitacao: "CUIDADOR",
      comentario: [
        {
          id: 2,
          like: 4,
          comentario: "Muito bom, profissional de confiança",
          usuario: {
            id: 1,
            nome: "Teste",
            foto: "assets/usuarios/usuario01.png"
          }
        },
        {
          id: 2,
          like: 4,
          comentario: "Muito bom, profissional de confiança",
          usuario: {
            id: 2,
            nome: "Teste",
            foto: "assets/usuarios/usuario02.png"
          }
        },
      ]
    },
    {
      id: 3,
      nome: "Isabela Ferreira",
      foto: "assets/contato/user03.jpeg",
      telefone: "(67) 3461-1087",
      email: "casarao_oriental@gmail.com",
      habilitacao: "ENFERMEIRO",
      comentario: [
        {
          id: 1,
          like: 4,
          comentario: "Adorei o atendimento, muito atenciosa",
          usuario: {
            id: 1,
            nome: "Teste",
            foto: "assets/usuarios/usuario01.png"
          }
        }
      ]
    },
    {
      id: 4,
      nome: "Miguel Oliveira",
      foto: "assets/contato/user04.jpeg",
      telefone: "(67) 3461-1087",
      email: "casarao_oriental@gmail.com",
      habilitacao: "ENFERMEIRO",
      comentario: []
    },
  ]


  constructor() {

  }

  findAll() : any[] {
    return this.contatos;
  }

  findById(id: number) {
    return this.contatos.filter((contato) => contato.id == id);
  }

  listaContatos(){

  }
}
