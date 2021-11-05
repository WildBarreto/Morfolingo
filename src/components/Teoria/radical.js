import React from "react";
import { Container } from "./styles";

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
        to="/Radical1"
        style={{ textDecoration: "none", color: "#1cb0f6" }}
      >
        <button id="pratica">Praticar</button>{" "}
      </Link>
      <h2>Radical</h2>
      <p>
        É o elemento comum de palavras cognatas, também chamadas de palavras da
        mesma família. É responsável pelo significado básico da palavra
        <br />
        Observe a estrutura das palavras abaixo: <br />
        <b>Terr</b>a<br />
        <b> Terr</b>eno
        <br />
        <b> Terr</b>eiro
        <br />
        <b> Terr</b>inha
        <br />
        En<b>terr</b>ar
        <br />
        <b> Terr</b>estre. <br />
        Você notou que as palavras acima possuem um elemento comum a todas elas:
        <b> terr-</b>, a que chamamos de <b>radical</b>.
        <br />
        <b>obs:</b>{" "}
        <i>
          {" "}
          Há palavras indivisiveis que possuem apenas o radical, como: bar, sol,
          mar.
        </i>
      </p>
    </Container>
  );
}

export default Teoria;
