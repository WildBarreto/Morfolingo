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
      <button id="pratica">Praticar</button>
      <h2>Artigo</h2>
      <p>
        o artigo é a classe de palavras que antecede o substantivo para
        determiná-lo de modo particular ou geral.
        <br />
        Há dois tipos de artigos: <br />
        <b>Artigos definidos:</b> o, os, a, as;
        <br />
        <b>Artigos definidos:</b> um, uns, uma, umas.
        <br />
        Os artigos definidos determinam um sujeito específico. Ou seja, são
        utilizados para especificar e particularizar algo para o leitor ou
        receptor da mensagem.
        <br />
        <br />
        <b>Exemplo do uso de artigo definido:</b> Eu conheci <b>o</b> professor
        de matemática ontem.
        <br />
        Neste caso, o interlocutor especifica que conheceu o professor de
        matemática, alguém que numa forma de definir exatamente quem é o
        professor especificando e particularizando a pessoa. <br />
        <br />
        Já os <b>artigos indefinidos</b> abordam um sujeito de forma
        generalizada. São utilizados para apontar algo ou alguém que não é
        especificado no contexto de quem fala. <br />
        <b>Exemplo do uso de artigo indefinido:</b> Eu conheci <b>um</b>{" "}
        professor de matemática ontem.
        <br />
        Neste caso, a pessoa não se preocupa em definir ou particularizar a
        pessoa que conheceu, por isso utilizou um artigo indefinido.
      </p>
    </Container>
  );
}

export default Teoria;
