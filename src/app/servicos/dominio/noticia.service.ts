import { Injectable } from "@angular/core";

@Injectable()
export class NoticiaService {

  noticias = [
    {
      id: 1,
      titulo: "Conheça 9 modalidades de Esportes Adaptados",
      conteudo: "Cada vez mais os esportes adaptados vem ganhando espaço e se mostram importantes tanto fisicamente, quanto emocionalmente para a inclusão e também a reabilitação. Existem diversos campeonatos nacionais e internacionais que abrangem os esportes adaptados, como as paraolimpíadas, por exemplo.",
      data: "05/10/2023",
      tipoNoticia: "Esportes",
      url: "https://blog.conforpes.com.br/dr-responde/conheca-9-modalidades-de-esportes-adaptados/",
      foto: "noticia01.jpg",
    },
    {
      id: 2,
      titulo: "Copasul abre vagas no programa Aprendiz Cooperativo PcD",
      conteudo: "A Copasul abriu nesta semana em Naviraí o processo seletivo para preencher vagas do programa Aprendiz Cooperativo Pessoas com Deficiência (PcD), destinado ao público que tenha alguma deficiência e que esteja interessado em participar de um período de aprendizado e crescimento. O edital está disponível no site da cooperativa e contém as regras gerais. Podem participar PcD’s com idade a partir de 14 anos, sem limite de idade. Após o cadastro, elas participam de processo seletivo com entrevista e análise de perfil para encaixe na rodada de atividades nas unidades. O curso tem a modalidade educação presencial, com formação prevista para 2025 e o objetivo do programa é que o aprendiz conquiste desenvolvimento profissional com atividades teóricas e práticas.",
      data: "10/11/2023",
      tipoNoticia: "Trabalho",
      url: "https://ocbms.org.br/noticia/copasul-abre-vagas-no-programa-aprendiz-cooperativo-pcd/8582/",
      foto: "noticia02.png",
    },
    {
      id: 3,
      titulo: "Abertas 240 vagas em qualificação para pessoas com deficiência",
      conteudo: "O Instituto Federal de Mato Grosso do Sul (IFMS) está com inscrições abertas nos cursos de Assistente de Administração, Informática Básica e Operador de Caixa, voltados exclusivamente a pessoas com deficiência (PCD). No total, são 240 vagas, sendo 20 para cada curso em cada local, oferecidas em Campo Grande, Dourados, Ponta Porã e Três Lagoas. Os cursos são oferecidos por meio do Projeto de Extensão Qualifica Mais Inclusão.",
      data: "01/07/2023",
      tipoNoticia: "Cursos",
      url: "https://www.ifms.edu.br/noticias/2023/abertas-240-vagas-em-cursos-de-qualificacao-para-pessoas-com-deficiencia-1",
      foto: "noticia03.png",
    },
  ]


    findAll() : any[] {
      return this.noticias;
    }

    findById(id: number) {
      return this.noticias.filter((noticia) => noticia.id == id);
    }
}
