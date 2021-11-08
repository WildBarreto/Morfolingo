import idosa from "../assets/idosa.svg";
import boy from "../assets/boy.svg";
import boy2 from "../assets/boy 2.svg";
import Canario from "../assets/Canario.svg";
import Stars from "../assets/Stars.svg";
import Stars1 from "../assets/Stars1.svg";
import Stars3 from "../assets/Stars3.svg";
import Stars0 from "../assets/Stars0.svg";


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
          stars: Stars3,
          teoria: "/Radical"
        },
        {
          id: 2,
          content: "Prefixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: boy,
          stars: Stars,
          teoria: "/Prefixo"
        },
        {
          id: 3,
          content: "Sufixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: boy2,
          stars: Stars1,
          teoria: "/Sufixo"
        },
      ],

      
    },

    {
      title: "Classificação das palavras",
      creatable: false,
      done: true,
      cards: [
        {
          id: 4,
          content: "Substantivo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Canario,
          stars: Stars0,
          teoria: "/Substantivo"
        },
        {
          id: 5,
          content: "Verbo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Canario,
          stars: Stars0,
          teoria: "/Verbo"
        },
        {
          id: 6,
          content: "Adjetivo",
          labels: ["#54e1f7"],
          perfil: ["#8DD8FB"],
          user: girl1,
          stars: Stars0,
          teoria: "/Adjetivo"
        },
        {
          id: 7,
          content: "Pronome",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: girl2,
          stars: Stars0,
          teoria: "/Pronome"
        },
        {
          id: 8,
          content: "Artigo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: idosa,
          stars: Stars0,
          teoria: "/Artigo"
        },
        {
          id: 9,
          content: "Numeral",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Canario,
          stars: Stars0,
          teoria: "/Numeral"
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
