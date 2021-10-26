import React, { useRef, useState } from "react";
import Teoria from "../Teoria";

import { Container } from "./styles";

import { render } from "@testing-library/react";




export default function Modal() {
  //const { modalState: { visible}, closeModal} = useModalContext();

  return (
    <Container >
      <button onClick={ <Teoria/>}>Aprender</button>
      <button>Praticar</button>
    </Container>
  );
}
