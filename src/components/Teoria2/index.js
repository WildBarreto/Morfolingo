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
      <h2>Substantivos</h2>
      <p>
        Pertencem a essa classe todas as palavras que designam os seres em
        geral, as entidades reais ou imagináveis. Exemplos: mesa, lua, luz,
        fada, centauro, ilusão, tristeza.
        <br />
        <br />
        O substantivo dificilmente aparecerá sozinho na frase, pois ele possui
        várias palavras que orbitam a seu redor. São os chamados satélites do
        substantivo: artigos, pronomes, numerais, adjetivos.
        <br /> A conclusão bem simples é que, para transformar uma palavra em
        substantivo, basta que a determinemos com os satélites artigos,
        numerais, pronomes e adjetivos.
      </p>
      <h3>Classificação dos substantivos</h3>
      
    </Container>
  );
}

export default Teoria;
