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
        to="/Sufixo1"
        style={{ textDecoration: "none", color: "#1cb0f6" }}
      >
        <button id="pratica">Praticar</button>{" "}
      </Link>
      <h2>Sufixo</h2>
      <p>
        Os sufixos são afixos que formam palavras a partir de um morfema que
        sucede o radical. Assim, eles modificam o seu sentido e, principalmente,
        alteram a classe gramatical a qual pertencem. Os sufixos podem ser
        nominais, verbais e adverbiais.
        <br />
        <b>Exemplos:</b>
        <br />
        Caminhad<b>ada</b> ( ada = sufixo )
        <br />
        Mud<b>ança</b> ( ança = sufixo ) <br />
        Abund<b>ância</b> ( ancia = sufixo ) <br />
      </p>
      <h3>Sufixos Nominais</h3>
      <p>
        Os sufixos nominais se juntam ao radical para formar substantivos e
        adjetivos.
        <br />
        <b>Exemplos:</b>
        <br />
        <b>
          <i>Sufixos aumentativos</i> :
        </b>
        <br />
        Pared<b>ão</b> ( ão = sufixo )
        <br />
        Grand<b>alhão</b> ( alhão = sufixo ) <br />
        Homen<b>zarrão</b> ( zarrão = sufixo ) <br />
        Bo<b>eirão</b> ( eirão = sufixo ) <br />
        <br />
        <b>
          <i>Sufixos Diminutivo</i> :
        </b>
        <br />
        Avo<b>zinho</b> (zinho = sufixo )
        <br />
        Ri<b>acho</b> ( acho = sufixo ) <br />
        Barb<b>icha</b> ( zarrão = sufixo ) <br />
        Son<b>eca</b> (eca = sufixo) <br />
      </p>

      <h3>Sufixos Verbais</h3>
      <p>
        Os sufixos verbais se juntam ao radical para formar verbos.
        <br />
        <b>Exemplos:</b>
        <br />
        Folh<b>ear</b> ( ear = sufixo )
        <br />
        Espern<b>ear</b> ( ear = sufixo ) <br />
        Got<b>ejar</b> ( ejar = sufixo ) <br />
        Apedr<b>ejar</b> (ejar = sufixo) <br />
      </p>

      <h3>Sufixos adverbiais</h3>
      <p>
        Os sufixos adverbiais se juntam ao radical para formar advérbios. Há
        apenas um sufixo adverbial em português: <b>-mente</b>.
        <br />
        <b>Exemplos:</b>
        <br />
        Cuidadosa<b>mente</b> <br />
        Firme<b>mente</b> <br />
        Franca<b>mente</b> <br />
        Justa<b>mente</b> <br />
        Rapida<b>mente</b>
        <br />
      </p>
    </Container>
  );
}

export default Teoria;
