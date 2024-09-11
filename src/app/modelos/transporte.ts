export interface Transporte {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  foto: string;
  veiculo: {
    id: number,
    placa: string;
    marca: string;
    modelo: string;
  },
  comentario: [
    {
      id: number;
      like: number;
      comentario: string;
    }
  ]
}
