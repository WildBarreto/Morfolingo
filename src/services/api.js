//import idosa from "../assets/idosa.svg";
//import boy from "../assets/boy.svg";
//import boy2 from "../assets/boy 2.svg";
//import Canario from "../assets/Canario.svg";
import Stars from "../assets/Stars.svg";
import Stars1 from "../assets/Stars1.svg";
import Stars3 from "../assets/Stars3.svg";
import Stars0 from "../assets/Stars0.svg";

import Radical from '../assets/Radical.svg'
import Prefixo from '../assets/Prefixo.svg'
import sufixo from '../assets/Sufixo.svg'

import Subs from '../assets/substantivos.svg'
import Verbo from '../assets/Bike.svg' 
import Adjetivo from '../assets/Irma.svg'
import Artigo from '../assets/Artigo.svg'
import Numeral from '../assets/Numeral.svg'


//import girl1 from "../assets/girl1.svg"
import girl2 from "../assets/girl2.svg"

export function loadLists() {
  return [
    {
      title: "Estrutura das palavras",
      creatable: true,
      cards: [
        {
          id: 1,
          ident: "radi",
          content: "Radical",
          labels: [" #5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: Radical,
          stars: Stars3,
          teoria: "/Radical"
        },
        {
          id: 2,
          ident: "radi",
          content: "Prefixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: Prefixo,
          stars: Stars,
          teoria: "/Prefixo"
        },
        {
          id: 3,
          ident: "radi",
          content: "Sufixo",
          labels: ["#5acc05"],
          perfil: ["rgba(152, 247, 82, 0.85)"],
          user: sufixo,
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
          ident: "sub",
          content: "Substantivo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Subs,
          stars: Stars0,
          teoria: "/Substantivo"
        },
        {
          id: 5,
          ident: "radi",
          content: "Verbo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Verbo,
          stars: Stars0,
          teoria: "/Verbo"
        },
        {
          id: 6,
          ident: "radi",
          content: "Adjetivo",
          labels: ["#54e1f7"],
          perfil: ["#8DD8FB"],
          user: Adjetivo,
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
          ident: "radi",
          content: "Artigo",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Artigo,
          stars: Stars0,
          teoria: "/Artigo"
        },
        {
          id: 9,
          ident: "numeral",
          content: "Numeral",
          labels: ["#1CB0F6"],
          perfil: ["#8DD8FB"],
          user: Numeral,
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
