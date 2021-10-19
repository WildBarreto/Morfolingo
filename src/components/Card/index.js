import React from "react";

import { Container, Header } from "./styles";

import Canario from "../../assets/Canario.svg";
import Stars from "../../assets/Stars.svg";

export default function Cards({ data }) {
  return (
    <Container background={data.labels}> {/*Passar a cor que está no api.js*/ }
      
      <Header background={data.perfil}>
        <img src={data.user} />
      </Header>

      <p>{data.content}</p>
      <img id="stars" src={data.stars} />
    </Container>
  );
}

 

