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
        to="/Verbo1"
        style={{ textDecoration: "none", color: "#1cb0f6" }}
      >
        <button id="pratica">Praticar</button>{" "}
      </Link>
      <h2>Verbo</h2>
      <p>
        Um <b>verbo</b> é uma palavra que indica acontecimentos representados no
        tempo, como uma ação, um estado, um processo ou um fenômeno.
        <br />
        Os verbos flexionam-se em: <br />
        <b>Número</b> ( singular e plural ) <br />
        <b>Pessoa</b> ( 1ª, 2ª, 3ª pessoa) <br />
        <b>Modo</b> ( indicativo, subjuntivo ou imperativo ) <br />
        <b>Tempo</b> ( passado, presente ou futuro ) <br />
        <b>Voz</b> (Ativa, passiva ou reflexiva) <br />
        As orações e os períodos desenvolvem-se em torno de um verbo.
        <br />
        <b>Exemplos de verbos que indicam uma ação:</b>
        <br />
        Fazer; mandar; construir; comprar; estudar.
        <br />
        <b>Exemplos de verbos que indicam um estado:</b>
        <br />
        Ser; ficar; continuar; estar; permanecer.
        <br />
        <b>Exemplos de verbos que indicam uma ocorrencia:</b>
        <br />
        Acontecer; suceder; passar; ocorrer; decorrer.
        <br />
        <b>Exemplos de verbos que indicam uma fenômeno:</b>
        <br />
        Chover; anoitecer; amanhecer; trovejar; escurecer.
        <br />
        <b>Exemplos de verbos que indicam uma fenômeno:</b>
        <br />
        Apirar; almejar; desejar; querer; ansiar.
        <br />
      </p>
    </Container>
  );
}

export default Teoria;
