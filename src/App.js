import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

import Modal from "./components/Modal";

//Import dos components de teoria de estrutura das palavras
import Prefixo from "./components/Teoria/prefixos";
import Sufixo from "./components/Teoria/sufixo";
import Radical from "./components/Teoria/radical";

//Import dos components de teoria de classificação das palavras
import Substantivo from "./components/Teoria2/substantivo";
import Verbo from "./components/Teoria2/verbo";
import Adjetivo from "./components/Teoria2/adjetivos";
import Pronome from "./components/Teoria2/pronome";
import Artigo from "./components/Teoria2/artigo";
import Numeral from "./components/Teoria2/numeral";

//Mensagens de ERRO e de ACERTO das atividades
import Message from './components/Mensagem/acertou/acertou'
import Message2 from './components/Mensagem/errou/errou'

//Imjportação das atividades 
import Atividades from "./components/Atividades/substantvoAtiv/sub1/atividade1";//Atividade 1
import AcertouSub1 from './components/Atividades/substantvoAtiv/sub1/acertou/acertou';//Atividade 1
import ErrouSub1 from './components/Atividades/substantvoAtiv/sub1/errou/errou';//Atividade 1

//sub2
import Atividades2 from "./components/Atividades/substantvoAtiv/sub2/atividade2";
import AcertouSub2 from './components/Atividades/substantvoAtiv/sub2/acertou';//Atividade 2
import ErrouSub2 from './components/Atividades/substantvoAtiv/sub2/errou';//Atividade 2

//sub3
import Atividades3 from "./components/Atividades/substantvoAtiv/sub3/atividade3";
import AcertouSub3 from './components/Atividades/substantvoAtiv/sub3/acertou';//Atividade 3
import ErrouSub3 from './components/Atividades/substantvoAtiv/sub3/errou';//Atividade 3
//sub4
import Atividades4 from "./components/Atividades/substantvoAtiv/sub4/atividade4";
import AcertouSub4 from './components/Atividades/substantvoAtiv/sub4/acertou';//Atividade 4
import ErrouSub4 from './components/Atividades/substantvoAtiv/sub4/errou';//Atividade 4

//sub5
import Atividades5 from "./components/Atividades/substantvoAtiv/sub5/atividade5";
import AcertouSub5 from './components/Atividades/substantvoAtiv/sub5/acertou';//Atividade 4
import ErrouSub5 from './components/Atividades/substantvoAtiv/sub5/errou';//Atividade 4

//IMportação dos componentes do router 
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Board />
       
      
        {/*Rodas para navegação entre paginas  */}
       
        <Route component={Modal} path="/Modal" />
        <Route component={Prefixo} path="/Prefixo" />
        <Route component={Sufixo} path="/Sufixo" />
        <Route component={Radical} path="/Radical" />

        <Route component={Substantivo} path="/Substantivo" />
        <Route component={Verbo} path="/Verbo" />
        <Route component={Adjetivo} path="/Adjetivo" />
        <Route component={Pronome} path="/Pronome" />
        <Route component={Artigo} path="/Artigo" />
        <Route component={Numeral} path="/Numeral" />

        <Route component={Atividades}  path="/Atividade" />
        <Route component={ AcertouSub1} path="/Atividade/AcertouSub1"/>
        <Route component={ErrouSub1} path="/Atividade/ErrouSub1"/>

        <Route component={Atividades2} path="/Atividade2" />
        <Route component={AcertouSub2} path="/Atividade2/AcertouSub2"/>
        <Route component={ErrouSub2} path="/Atividade2/ErrouSub2"/>

        <Route component={Atividades3} path="/Atividade3" />
        <Route component={AcertouSub3} path="/Atividade3/AcertouSub3"/>
        <Route component={ErrouSub3} path="/Atividade3/ErrouSub3"/>

        <Route component={Atividades4} path="/Atividade4" />
        <Route component={AcertouSub4} path="/Atividade4/AcertouSub4"/>
        <Route component={ErrouSub4} path="/Atividade4/ErrouSub4"/>
       

        <Route component={Atividades5} path="/Atividade5" />
        <Route component={AcertouSub5} path="/Atividade5/AcertouSub5"/>
        <Route component={ErrouSub5} path="/Atividade5/ErrouSub5"/>

      </Router>
    </>
  );
}

export default App;
