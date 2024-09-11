export interface Contato {
  id: number;
  nome: string;
  foto: string;
  telefone: string;
  email: string;
  habilitacao: string;
  comentario: [
    {
      id: number;
      like: number;
      comentario: string;
    }
  ];
}
