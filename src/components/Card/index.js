import React, { useState } from "react";

import { Container, Header } from "./styles";

import Modal from "../Modal";

import { Link } from "react-router-dom";

export default function Cards({ data }) {
  /*
  const [modalOn, setModal] = React.useState(false);

  const modal = () => {
    console.log(modalOn)
    if(modalOn == true){
      render(<Modal />);
    }else {
      
    }
   
  };*/

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);
  return (
    <Container background={data.labels}>
      {/*isActive ? <Modal background={data.labels} /> : ""*//*Função para ativar o modal  */}
     
        {/*Passar a cor que está no api.js*/}
        <Header onClick={onClick} background={data.perfil}>
          <img src={data.user} alt="estrelas" />
         
        </Header>
     
      <p>{data.content}</p>
     
      <img id="stars" src={data.stars} alt="estrelas" />
      <Link to={data.teoria} style={{ textDecoration: "none", color: "#fff"}}>
        <button background={data.labels} onClick={onClick}  >Aprender</button>
      </Link>
    </Container>
  );
}
