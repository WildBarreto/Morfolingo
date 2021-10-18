import idosa from '../assets/idosa.svg'
export function loadLists() {
    return [
      { 
        title: 'Estrutura das palavras', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Radical',
            labels: ['#7159c1'],
            user: idosa
          },
          {
            id: 2,
            content: 'Sufixo',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 3,
            content: 'Préfixo',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          
        ]
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
      { 
        title: 'Classificação das palavras', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Substantivo',
            labels: [],
          },
          {
            id: 12,
            content: 'Adjetivo',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Pronome',
            labels: ['#7159c1'],
          },
          {
            id: 14,
            content: 'Artigo',
            labels: ['#7159c1'],
          },
          {
            id: 15,
            content: 'Numeral',
            labels: ['#7159c1'],
          },
         
        ]
      },
    ];
  }