import React from "react";

import { Container } from "./styles";

import Canario from "../../assets/Canario.svg";
import Stars from "../../assets/Stars.svg";

function Cards() {
  return (
    <Container>
      <header>
        <img src={Canario} />
      </header>

      <p>Substantivo</p>
      <img id="stars" src={Stars} />
    </Container>
  );
}

export default Cards;
