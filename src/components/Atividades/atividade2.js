import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import Menino from "../../assets/MeninoCe3.svg";

import { Container } from "./styles2";

import Mensagem from "../Mensagem";
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
      //alert("Parabems você acertou: ");
      return "/Message";
    } else {
      // alert("tente novamente: ");
      return "";
    }
  }

  
  return (
    <Container>
      {/*<div>
      <RiCloseLine id="close" size={34} color="#1cb0f6" />
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>
      </div>*/}

      <section id="content">
        <h2>Atividade 2</h2>
        
        <img src={Menino} alt="estrelas" />

        <textarea
          rows="20"
          cols="20"
          placeholder="Escreva o substantivo da frase"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></textarea>
      </section>

      <Link to={verificar} style={{ textDecoration: "none", color: "#fff" }}>
        <button type="submit" id="pratica" >
          Verificar
        </button>
      </Link>
    </Container>
  );
}

export default Atividades;