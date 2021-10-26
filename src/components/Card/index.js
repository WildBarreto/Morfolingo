import React, { useRef, useState } from "react";

import { Container, Header, Container2 } from "./styles";

import Modal from "../Modal";
import { render } from "@testing-library/react";



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

  const dropDownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const modal = () => {
    if ((isActive = true)) {
      render();
    }
  };

  console.log(isActive);
  return (
    <Container background={data.labels}>
      {isActive ? <Modal background={data.labels}/> : ""}

     
      {/*Passar a cor que está no api.js*/}
      <Header onClick={onClick} background={data.perfil}>
        
        <img src={data.user} />
      </Header>

      <p>{data.content}</p>

      <img id="stars" src={data.stars} />
    </Container>
  );
}
