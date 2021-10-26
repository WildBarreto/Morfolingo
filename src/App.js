import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import Teoria from "./components/Teoria";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board/>
      
    </>
  );
}

export default App;
