import React from "react";
import { Container } from "../Teoria/styles";

import { BiArrowBack } from "react-icons/bi";

import { Link } from "react-router-dom";

function Teoria() {
  return (
    <Container>
      <button id="voltar">
        <BiArrowBack size={24} color="#1cb0f6" />
        <Link to="/" style={{ textDecoration: "none", color: "#1cb0f6" }}>
          Voltar{" "}
        </Link>
      </button>
      <Link
        to="/Adjetivo1"
        style={{ textDecoration: "none", color: "#1cb0f6" }}
      >
        <button id="pratica">Praticar</button>{" "}
      </Link>
      <h2>Adjetivos</h2>
      <p>
        É toda palavra que caracteriza o substantivo, indicando-lhe qualidade,
        defeito, estado, condição, etc.
        <br />
        <b>Exemplos: </b> <br />
        Homem <b>bom</b> (qualidade) <br />
        Menino <b>traquina</b> (defeito) <br />
        Moça <b>feliz</b> (estado) <br />
        Família <b>rica</b> (condição).
        <br />
        O adjetivo pode aparecer antes ou depois do substantivo.
        <br />
        <b>Exemplos: </b> <br />
        <b>Linda</b> moça ou moça <b>linda</b>.
        <br />
        Os adjetivos apresentam alguns tipos de flexões: gênero (masculino e
        feminino), número (singular e plural) e grau (comparativo e
        superlativo).
      </p>
    </Container>
  );
}

export default Teoria;
