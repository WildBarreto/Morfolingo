import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

import Modal from "./components/Modal";

import Prefixo from "./components/Teoria/prefixos";
import Sufixo from "./components/Teoria/sufixo";
import Radical from "./components/Teoria/radical";

import Substantivo from "./components/Teoria2/substantivo";
import Verbo from "./components/Teoria2/verbo";
import Adjetivo from "./components/Teoria2/adjetivos";
import Pronome from "./components/Teoria2/pronome";
import Artigo from "./components/Teoria2/artigo";
import Numeral from "./components/Teoria2/numeral";

import Message from './components/Mensagem'

import Atividades2 from "./components/Atividades/atividade2";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Atividades from "./components/Atividades";


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

        <Route component={Atividades} path="/Atividade" />
        <Route component={Message} path="/Message"/>
        <Route component={Atividades2} path="/Atividade2" />

      </Router>
    </>
  );
}

export default App;
