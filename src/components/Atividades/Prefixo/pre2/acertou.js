import React from "react";

import { Container } from "../../../Mensagem/acertou/styles";
import { BsCheckLg } from "react-icons/bs";

import { Link } from "react-router-dom";

function Mensagem() {
  return (
    <Container>
      <div id="icon">
        < BsCheckLg id="check" size={36} color=" #85D700" />
      </div>
      <h1>Parabens!</h1>
      <Link
        to={"/Prefixo3"}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <button>Continuar</button>
      </Link>
    </Container>
  );
}

export default Mensagem;
