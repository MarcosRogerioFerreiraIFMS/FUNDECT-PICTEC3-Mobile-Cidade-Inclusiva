import { Injectable } from "@angular/core";

@Injectable()
export class TransporteService {
  motoristas = [
      {
        id: 1,
        nome: "José Silva",
        telefone: "(11) 99999-8888",
        email: "jose.silva@email.com",
        foto: "motorista01.png",
        veiculo: {
          id: 101,
          placa: "ABC-1234",
          marca: "Chevrolet",
          modelo: "Prisma",
          fotos: [
            {foto: "motorista01.png" },
            {foto: "motorista01-carro01.jpg" },
            {foto: "motorista01-carro02.jpg" },
          ]
        },
        comentario: [
          {
            id: 1001,
            like: 15,
            comentario: "Excelente motorista!",
            usuario: {
              id: 201,
              nome: "Maria Santos",
              foto: "usuario01.png"
            }
          },
          {
            id: 1002,
            like: 8,
            comentario: "Muito educado e pontual.",
            usuario: {
              id: 202,
              nome: "João Oliveira",
              foto: "usuario02.png"
            }
          }
        ]
      },
      {
        id: 2,
        nome: "Ana Souza",
        telefone: "(21) 88888-7777",
        email: "ana.souza@email.com",
        foto: "motorista02.png",
        veiculo: {
          id: 102,
          placa: "DEF-5678",
          marca: "FIAT",
          modelo: "Argo",
          fotos: [
            {foto: "motorista02.png" },
            {foto: "motorista02-carro01.jpg" },
            {foto: "motorista02-carro02.jpg" },
          ]
        },
        comentario: [
          {
            id: 1003,
            like: 20,
            comentario: "Super recomendo! Ótima motorista.",
            usuario: {
              id: 203,
              nome: "Carlos Pereira",
              foto: "usuario03.png"
            }
          },
          {
            id: 1004,
            like: 12,
            comentario: "Dirige com segurança e atenção.",
            usuario: {
              id: 204,
              nome: "Aline Castro",
              foto: "usuario04.png"
            }
          },
          {
            id: 1005,
            like: 5,
            comentario: "Sempre disponível e prestativa.",
            usuario: {
              id: 205,
              nome: "Bruno Cardoso",
              foto: "usuario02.png"
            }
          }
        ]
      },
      {
        id: 3,
        nome: "Paulo Rodrigues",
        telefone: "(31) 77777-6666",
        email: "paulo.rodrigues@email.com",
        foto: "motorista03.png",
        veiculo: {
          id: 103,
          placa: "GHI-9012",
          marca: "Chevrolet",
          modelo: "Onix",
          fotos: [
            {foto: "motorista03.png" },
            {foto: "motorista03-carro01.jpg" },
            {foto: "motorista03-carro02.jpg" },
          ]
        },
        comentario: [
          {
            id: 1006,
            like: 25,
            comentario: "Melhor motorista que já conheci!",
            usuario: {
              id: 206,
              nome: "Fernanda Almeida",
              foto: "usuario04.png"
            }
          },
          {
            id: 1007,
            like: 18,
            comentario: "Pontual, educado e dirige muito bem.",
            usuario: {
              id: 207,
              nome: "Rafael Barros",
              foto: "usuario02.png"
            }
          }
        ]
      }
  ]

    findAll() : any[] {
      return this.motoristas;
    }

    findById(id: number) {
      return this.motoristas.filter((motorista) => motorista.id == id);
    }
}
