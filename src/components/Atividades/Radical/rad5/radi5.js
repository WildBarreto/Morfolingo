import React, { useState } from "react";

import {  BrowserRouter as Router, Route, Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Bike from "../../../../assets/Bike.svg";

import { Container } from "../../substantvoAtiv/styles";

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
    if (test === "cicl" || test === "Cicl") {
      // alert("Parabems você acertou: ");
      return "/Radical5/RadCerto5";
    } else {
      //alert("tente novamente: ");
      return "/Radical5/RadErrado5";
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
        <h2>Digite o radical das palavras abaixo:</h2>

        <img src={ Bike} alt="estrelas" />
       
          <label>Bicicleta, ciclismo, ciclista</label>
       
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
