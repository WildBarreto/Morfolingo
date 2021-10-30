import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import Teoria from "./components/Teoria";
import Prefixo from "./components/Teoria/prefixos";
import Sufixo from "./components/Teoria/sufixo";
import Modal from "./components/Modal";

import Radical from './components/Teoria/radical'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Board />

      
          <Route component={Teoria} path="/Teoria" />
          <Route component = { Modal }  path="/Modal" />
          <Route component={Prefixo} path="/Prefixo" />
          <Route component={Sufixo} path="/Sufixo" />
          <Route component={Radical} path="/Radical" />
       
      </Router>
    </>
  );
}

export default App;
