import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Programer from "../../../../assets/Programer.svg";

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
    if (test === "anti" || test === "Anti") {
      // alert("Parabems você acertou: ");
      return "/Prefixo4/PreCerto4";
    } else {
      //alert("tente novamente: ");
      return "/Prefixo4/PreErrado4";
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
        <h2>Digite o prefixo da palavra em destaque abaixo abaixo:</h2>

        <img id="programer" src={Programer} alt="estrelas" />
       
          <label>Preciso instalar um <u>ativírus</u> em meu computador.</label>
         
        <textarea
          rows="20"
          cols="20"
          placeholder="Escreva o prefixo da palavra"
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
