import React from "react";

import { Container } from "./styles";

import Canario from "../../assets/Canario.svg";
import Stars from "../../assets/Stars.svg";

export default function Cards({ data }) {
  return (
    <Container background="#ffffff">
      
      <header>
        <img src={data.user} />
      </header>

      <p>{data.content}</p>
      <img id="stars" src={Stars} />
    </Container>
  );
}

 

