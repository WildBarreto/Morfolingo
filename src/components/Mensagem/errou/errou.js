import React from "react";

import { Container } from "../errou/styles";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";

function Mensagem() {
  return (
    <Container>
      <div id="icon">
      
        <RiCloseLine id="close" size={40} color=" #EC0B1B" />
      </div>

      <h1>Tente novamente!</h1>
      <Link to={"/Atividade"} style={{ textDecoration: "none", color: "#fff" }}>
        <button>Tentar</button>
      </Link>
    </Container>
  );
}

export default Mensagem;
