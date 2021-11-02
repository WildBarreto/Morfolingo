import React from 'react';

 import { Container } from './styles';

 import { Link } from "react-router-dom";

function Mensagem() {
  return (
      <Container>
          <p>
              Parabens
          </p>
          <Link to={"/Atividade2"} style={{ textDecoration: "none", color: "#fff" }}>
        <button>
          Continuar
        </button>
      </Link>
      </Container>
  );
}

export default Mensagem;