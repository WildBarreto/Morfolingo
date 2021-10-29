import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import Teoria from "./components/Teoria";
import Teoria2 from "./components/Teoria2";
import Modal from "./components/Modal";

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
          <Route component={Teoria2} path="/Teoria2" />
       
      </Router>
    </>
  );
}

export default App;
