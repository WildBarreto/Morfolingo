import React from "react";

import { Container } from "../../../../Mensagem/errou/styles";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import { GiLightBulb } from "react-icons/gi";
import Lamp from "../../../../../assets/Lamp.svg";

function Mensagem() {
  return (
    <Container>
      {/*<div id="icon">
        <RiCloseLine id="close" size={40} color=" #EC0B1B" />
  </div>*/}

      <h1>Tente novamente!</h1>

      <div id="dica">
        {/*<GiLightBulb id="lamp" size={25} color=" #FFD800" />*/}
        <img id="lampi" src={Lamp} />
        <p>
          Pertencem a essa classe todas as palavras que designam os seres em
          geral, as entidades reais ou imagináveis.{" "}
        </p>
      </div>

      <Link to={"/Atividade"} style={{ textDecoration: "none", color: "#fff" }}>
        <button>Tentar</button>
      </Link>
    </Container>
  );
}

export default Mensagem;
