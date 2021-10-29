import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import Teoria from "./components/Teoria";
import Modal from "./components/Modal";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Board />

      
          <Route component={Teoria} path="/Teoria" />
          <Route component = { Modal }  path="/Modal" />
       
      </Router>
    </>
  );
}

export default App;
