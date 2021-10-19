import idosa from "../assets/idosa.svg";
import boy from "../assets/boy.svg";
import boy2 from "../assets/boy 2.svg";
import Canario from "../assets/Canario.svg";
import Stars from "../assets/Stars.svg";
import girl1 from "../assets/girl1.svg"
import girl2 from "../assets/girl2.svg"

export function loadLists() {
  return [
    {
      title: "Estrutura das palavras",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Radical",
          labels: [" #5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: idosa,
          stars: Stars,
        },
        {
          id: 2,
          content: "Sufixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: boy,
          stars: Stars,
        },
        {
          id: 3,
          content: "Préfixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: boy2,
          stars: Stars,
        },
      ],
    },

    {
      title: "Classificação das palavras",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Substantivo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Canario,
          stars: Stars,
        },
        {
          id: 12,
          content: "Adjetivo",
          labels: ["#54e1f7"],
          perfil: ["#8DD8FB"],
          user: girl1,
          stars: Stars,
        },
        {
          id: 13,
          content: "Pronome",
          labels: ["#1CB0F6"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          perfil: ["#8DD8FB"],
          user: girl2,
          stars: Stars,
        },
        {
          id: 14,
          content: "Artigo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: idosa,
          stars: Stars,
        },
        {
          id: 15,
          content: "Numeral",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Canario,
          stars: Stars,
        },
      ],
    },

    /*  { 
        title: 'Classificação', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },*/
  ];
}
