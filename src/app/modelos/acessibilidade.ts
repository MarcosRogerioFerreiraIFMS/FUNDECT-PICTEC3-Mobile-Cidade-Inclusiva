export interface Acessibilidade {
  id: number;
  nome: string;
  foto: string;
  telefone: string;
  email: string;
  like: number,
  categoria: string;
  rua: string;
  numero: number,
  bairro: string;
  cidade: {
    id: number;
    nome: string;
    estado: string;
  },
  recursos: [
    {
      acessibilidade: string;
      descricao: string;
    }
  ],
  album: [
    {foto: string;},
  ]
}
