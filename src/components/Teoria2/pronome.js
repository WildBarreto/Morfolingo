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
      <h2>Pronome</h2>
      <p>
        Pronome é a classe de palavras que substitui o substantivo (nome). Tem a
        finalidade de indicar a pessoa do discurso ou situar no tempo e espaço,
        sem utilizar o seu nome.
        <br />
        <b>Pronome substantivo</b> é aquele que desempenha a função de
        substantivo.
        <br />
        <b>Exemplo:</b>
        <br />
        <i>
          <b>Ela</b>
        </i>{" "}
        é minha convidada.
        <br />
        <b>Pronome adjetivo</b> é aquele que acompanha ou modifica um
        substantivo.
        <br />
        <b>Exemplo:</b>
        <br />
        <i>
          <b>Minha</b>
        </i>{" "}
        caneta é azul,{" "}
        <i>
          <b>aquelas</b>
        </i>{" "}
        canetas são azuis.
      </p>
      <h3>Tipos de pronome:</h3>
      <p>
      <br />
        <b>Pronomes de tratamento</b> <br />
        Os pronomes de tratamento indicam o tratamento formal ou informal: Você,
        Vossa Excelência, Vossa Majestade... Saiba mais sobre os Pronomes de
        Tratamento. <br />

        <b>Pronomes relativos</b> <br />
        São aqueles que se referem a um termo mencionado anteriormente: cujo, o
        qual, as quais, quem... Estabelecem uma relação entre aquilo a que se
        referem e a afirmação que será feita a seu respeito. <br />
        <b>Pronomes pessoais</b>
        <br />
        Os pronomes pessoais representam as pessoas do discurso (primeira,
        segunda ou terceira): eu, tu, ele/ela, nós, vós, eles/elas. Também são
        pronomes pessoais as formas que servem de complementos (me, mim, comigo,
        nos, conosco; te, ti, contigo, vos, convosco; o, a, lhe, se, si,
        consigo, os, as, lhes). Os pronomes pessoais ainda são divididos em:
        pronomes pessoais retos (quando exercem a função de sujeito); e pronomes
        pessoais oblíquos (quando substituem o substantivo e complementam os
        verbos). <br />
        <b> Pronomes demonstrativos</b> 
        <br />
        Pronomes demonstrativos indicam a posição de algo, situando no espaço e tempo:
        este, isso, aquilo... Estes pronomes estabelecem uma relação entre o que
        representa ou determina e os três âmbitos do discurso: este, essa,
        aquele, etc. <br />
        <b>Pronomes possessivos</b>
        <br />
        Pronomes possessivos exprimem a noção de posse de algo: meu, teu, sua,
        vosso... Indica aquele a quem pertence aquilo que é referido no
        discurso. <br />
        <b>Pronomes indefinidos</b> 
        <br />
        Pronomes indefinidos indicam a quantidade do que representa de modo vago ou
        impreciso: ninguém, alguém, qualquer... <br />
        <b>Pronomes interrogativos</b>
        <br />
        Pronomes interrogativos servem para formular uma interrogação.
        Normalmente se trata de um pronome relativo usado para interrogar: quem,
        que, qual...
        <br />
      </p>
    </Container>
  );
}

export default Teoria;
