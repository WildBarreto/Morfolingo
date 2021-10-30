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
      <button id="pratica">Praticar</button>
      <h2>Prefixo</h2>
      <p>
        Os prefixos são afixos que formam palavras a partir de um morfema que
        antecede o radical. Assim, eles modificam o seu sentido mas, geralmente,
        mantêm a classe gramatical a qual pertencem. A maior parte dos prefixos
        da língua portuguesa são de origem latina ou grega.
        <br />
        <b>Exemplos:</b>
        <br />
        <b>Anti</b>patia (anti = prefixo)
        <br />
        <b>Retro</b>ceder (retro = prefixo) <br />
        <b>Contra</b>dizer (contra = prefixo) <br />
        <b> Anti</b>vírus (anti = prefixo) <br />
        <b> Hiper</b>tensão (hiper = prefixo) <br />
      </p>
    </Container>
  );
}

export default Teoria;
