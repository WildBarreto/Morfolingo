import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Atleta from "../../../../assets/atleta.svg";

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
    if (test === "disciplinado" || test === "Disciplinado") {
      // alert("Parabems você acertou: ");
      return "/Adjetivo1/AdjetivoCerto1";
    } else {
      //alert("tente novamente: ");
      return "/Adjetivo1/AdjetivoErrado1";
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
        <h2>Digite o adjetivo da frase abaixo:</h2>

        <img id="navio" src={Atleta} alt="estrelas" />
       
          <label>Sou um homem muito disciplinado. </label>
       
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
