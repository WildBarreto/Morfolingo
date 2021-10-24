import React, { useState } from "react";

import { Container, Header } from "./styles";

import Modal from "../Modal";
import { render } from "@testing-library/react";
import { useModalContext } from "../../context/modalContext";



export default function Cards({ data }) {
  const [modalOn, setModal] = useState(false);

  const modal = (props) => {
    if (modalOn == true) {
      render(<Modal />);
    } else {
      render(null);
    }
  };

  const mudal = () => {
    if(modalOn == true){
      render(<Modal />);
    }else{
      setModal(true)
     
    }
   
  };

  //const { openModal } = useModalContext();
  //const testeModal = () => openModal();

  return (
    <Container onClick={() => mudal()} background={data.labels}>
      {" "}
      {/*Passar a cor que está no api.js*/}
      <Header background={data.perfil}>
        <img src={data.user} />
      </Header>
      <p>{data.content}</p>
      <img id="stars" src={data.stars} />
    </Container>
  );
}
