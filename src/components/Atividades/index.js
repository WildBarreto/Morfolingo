import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Menino from "../../assets/MeninoCe3.svg";

import { Container } from "./styles";

import Mensagem from "../Mensagem";
import Atvidade2 from "./atividade2";

import { render } from "react-dom";

function Atividades({ width, percent }) {
  const [value, setValue] = React.useState(10);

  React.useEffect(() => {
    setValue(percent * width);
  });

  //const [isTe, setIsTe] = useState(+1);
  //const onClick = () => setValue();

  const [nome, setNome] = useState("");

  //console.log(setValue);
  function verificar() {
    const test = nome;
    if (test == "taxi" || test == "Taxi") {
      alert("Parabems você acertou: ");
      return "/Atividade2";
    } else {
      //alert("tente novamente: ");
      return "/Atividade";
    }
  }
  function m() {
    return <Mensagem />;
  }

  return (
    <Container>
    
      <div>
        <Link to={""}  style={{ textDecoration: "none", color: "#fff" }}>
          <RiCloseLine id="close" size={34} color="#1cb0f6" />
          
        </Link>
        {/*
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>*/}
      </div>

      <section id="content">
        <h2>Digite o substantivo da frase abaixo:</h2>

        <img src={Menino} alt="estrelas" />

        <label>Preciso de um taxi!</label>

        <textarea
          rows="20"
          cols="20"
          placeholder="Escreva o substantivo da frase"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></textarea>
      </section>

      <Link to={m} style={{ textDecoration: "none", color: "#fff" }}>
        <button type="submit" id="pratica">
         Proxima
        </button>
      </Link>
      <Link to={verificar} style={{ textDecoration: "none", color: "#fff" }}>
        <button type="submit" id="pratica2">
          Verificar
        </button>
      </Link>
    </Container>
  );
}

export default Atividades;
