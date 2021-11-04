import React from "react";

import { Container } from "../../../Mensagem/errou/styles";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import { GiLightBulb } from "react-icons/gi";

function Mensagem() {
  return (
    <Container>
      {/*<div id="icon">
        <RiCloseLine id="close" size={40} color=" #EC0B1B" />
  </div>*/}

      <h1>Tente novamente!</h1>

      <div id="dica">
        <GiLightBulb id="lamp" size={25} color=" #FFD800" />
        <p>O substantivo coletivo designa uma coleção de seres da mesma espécie.</p>
      </div>

      <Link
        to={"/Atividade4"}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <button>Tentar</button>
      </Link>
    </Container>
  );
}

export default Mensagem;
