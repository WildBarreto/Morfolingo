import React from "react";

import { Container } from "./styles";

import star from '../../assets/Star.svg'

import boy from '../../assets/boy.svg'


export default function Header() {
  return (
    <Container>
      <h1>Morfolingo</h1>

      <img id="star" src={star} alt=""></img>
      <span id="cont">10</span>
      <div id="userImage">
       <img id="perfil" src={boy} alt=""></img>
      </div>
    </Container>
  );
}
