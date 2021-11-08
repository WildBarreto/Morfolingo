import React from "react";

import { Container } from "../../../Mensagem/errou/styles";

import { Link } from "react-router-dom";

//import { RiCloseLine } from "react-icons/ri";
//import { GiLightBulb } from "react-icons/gi";

import Lamp from "../../../../assets/Lamp.svg";

function Mensagem() {
  return (
    <Container>
      {/*<div id="icon">
        <RiCloseLine id="close" size={40} color=" #EC0B1B" />
  </div>*/}

      <h1>Tente novamente!</h1>

      <div id="dica">
        {/*<GiLightBulb id="lamp" size={25} color=" #FFD800" />*/}
        <img id="lampi" src={Lamp} alt=""/>
        <p>
        O artigo é a classe de palavras que antecede o substantivo para
          determiná-lo de modo particular ou geral.
        </p>
      </div>

      <Link to={"/Artigo4"} style={{ textDecoration: "none", color: "#fff" }}>
        <button>Tentar</button>
      </Link>
    </Container>
  );
}

export default Mensagem;
