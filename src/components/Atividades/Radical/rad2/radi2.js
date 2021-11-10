import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Enfermeira from "../../../../assets/Enfermeira.svg";

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
    if (test === "enferm" || test === "Enferm") {
      // alert("Parabems você acertou: ");
      return "/Radical2/RadCerto2";
    } else {
      //alert("tente novamente: ");
      return "/Radical2/RadErrado2";
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
        <h2>Digite o radical da palavra em destaque abaixo:</h2>

        <img id="medico" src={Enfermeira} alt="estrelas" />
       
          <label>Olá me chamo Marta, eu sou <u>enfermeira</u>!</label>
       
        <textarea
          rows="20"
          cols="20"
          placeholder="Digite o radical"
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
