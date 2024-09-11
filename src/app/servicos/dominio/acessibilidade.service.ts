import { Injectable } from "@angular/core";
import { Contato } from "src/app/modelos/contato";

@Injectable()
export class AcessibilidadeService {
/*
  nome: "Casarão Orinental",
    foto: "assets/acessibilidade/locais/local_01_01.jpg",
    telefone: "(67) 3461-1087",
    email: "casarao-oriental@gmail.com",
    like: 15,
    categoria: "Restaurante",
    rua: "Av. Amélia Fukuda",
    numero: 328,
    bairro: "Centro",
    cidade: {
      nome: "Naviraí",
      estado: "MS"
    },
    recursos: [
      {
        acessibilidade: "CADEIRANTE",
        descricao: "Rampas de acesso em todos os ambientes"
      },
      {
        acessibilidade: "BRAILLE",
        descricao: "Todos as informações no local possui opção em Braille"
      },
    ],
    album: [
      {foto: "local_01_01.jpg"},
      {foto: "local_01_02.jpg"},
      {foto: "local_01_03.jpg"}
    ]
  }*/

  locais = [
    {
      id: 1,
      nome: "Casarão Orinental",
      foto: "assets/acessibilidade/locais/local_01_01.jpg",
      telefone: "(67) 3461-1087",
      email: "casarao_oriental@gmail.com",
      like: 15,
      categoria: "Restaurante",
      rua: "Av. Amélia Fukuda",
      numero: 328,
      bairro: "Centro",
      cidade: {
        nome: "Naviraí",
        estado: "MS"
      },
      recursos: [
        {
          acessibilidade: "CADEIRANTE",
          descricao: "Rampas de acesso em todos os ambientes"
        },
        {
          acessibilidade: "BRAILLE",
          descricao: "Todos as informações no local possui opção em Braille"
        },
        {
          acessibilidade: "ACESSIBILIDADE_LIBRAS",
          descricao: ""
        },
      ],
      album: [
        {foto: "local_01_01.jpg"},
        {foto: "local_01_02.jpg"},
        {foto: "local_01_03.jpg"}
      ]
    },
    {
      id: 2,
      nome: "Araken",
      foto: "assets/acessibilidade/locais/local_02_01.jpg",
      telefone: "(67) 99626-7564",
      email: "araken_pizzaria@yahoo.com.br",
      like: 15,
      categoria: "Pizzaria",
      rua: "Av. Dourados",
      numero: 356,
      bairro: "Centro",
      cidade: {
        nome: "Naviraí",
        estado: "MS"
      },
      recursos: [
        {
          acessibilidade: "CADEIRANTE",
          descricao: "Rampas de acesso em todos os ambientes"
        },
        {
          acessibilidade: "BRAILLE",
          descricao: "Todos as informações no local possui opção em Braille"
        },
        {
          acessibilidade: "AUDICAO_ASSISTIDA",
          descricao: ""
        },
        {
          acessibilidade: "ACESSIBILIDADE_LIBRAS",
          descricao: ""
        },
      ],
      album: [
        {foto: "local_02_01.jpg"},
        {foto: "local_02_02.jpg"},
        {foto: "local_02_03.jpg"}
      ]
    },
    {
      id: 3,
      nome: "The Best",
      foto: "assets/acessibilidade/locais/local_03_01.jpg",
      telefone: "(67) 98118-2624",
      email: "thebest@gmail.com",
      like: 15,
      categoria: "Sorveteria",
      rua: "Av. Campo Grande",
      numero: 77,
      bairro: "Centro",
      cidade: {
        nome: "Naviraí",
        estado: "MS"
      },
      recursos: [
        {
          acessibilidade: "CADEIRANTE",
          descricao: "Rampas de acesso em todos os ambientes"
        },
        {
          acessibilidade: "BRAILLE",
          descricao: "Todos as informações no local possui opção em Braille"
        },
        {
          acessibilidade: "ACESSIBILIDADE_LIBRAS",
          descricao: ""
        },
      ],
      album: [
        {foto: "local_03_01.jpg"},
        {foto: "local_03_02.jpg"},
        {foto: "local_03_03.jpg"}
      ]
    },
  ]


  constructor() {

  }

  findAll() : any[] {
    return this.locais;
  }

  findById(id: number) {
    return this.locais.filter((local) => local.id == id);
  }

  listaContatos(){

  }
}
