import React, { useState } from "react";

import {  BrowserRouter as Router, Route, Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Nerd from "../../../../assets/Nerd.svg";

import { Container } from "../../styles";

function Atividades({ width, percent }) {
  /*const [value, setValue] = React.useState(10);

  React.useEffect(() => {
    setValue(percent * width);
  });*/

  //const [isTe, setIsTe] = useState(+1);
  //const onClick = () => setValue();

  const [nome, setNome] = useState("");

  //console.log(setValue);
  function verificar() {
    const test = nome;
    if (test === "uma" || test === "uma") {
      // alert("Parabems você acertou: ");
      return "/Artigo4/ArtigoCerto4";
    } else {
      //alert("tente novamente: ");
      return "/Artigo4/ArtigoErrado4";
    }
  }

  return (
    <Container>
      <div>
        <Link to={""} style={{ textDecoration: "none", color: "#fff" }}>
          <RiCloseLine id="close" size={34} color="#1cb0f6" />
        </Link>
        {/*
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>*/}
      </div>

      <section id="content">
        <h2>Digite o artigo da frase abaixo:</h2>

        <img id="navio" src={Nerd} alt="estrelas" />
       
          <label>Encontrei uma pasta na rua.</label>
       
        <textarea
          rows="20"
          cols="20"
          placeholder="Escreva o substantivo da frase"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></textarea>
      </section>

      <Link to={verificar} style={{ textDecoration: "none", color: "#fff" }}>
        <button type="submit" id="pratica">
          Verificar
        </button>
      </Link>
    </Container>
  );
}

export default Atividades;
