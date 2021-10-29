import React, { useRef, useState } from "react";
import Teoria from "../Teoria";

import { Container } from "./styles";

import { render } from "@testing-library/react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Modal() {
  //const { modalState: { visible}, closeModal} = useModalContext();
  const [isTe, setIsTe] = useState(false);
  const onClick = () => setIsTe(!isTe);

  function refreshPage() {
    window.location.reload()
  }

  console.log(isTe);
  return (
    <Container >
      <button onClick={onClick}>
          <Link to="/Teoria"  style={{ textDecoration: 'none', color:"#fff" }}>Aprender </Link>
          {/*isTe ? <Teoria /> : ""*/}
        </button>
       {/*<Link to="/Teoria"  style={{ textDecoration: 'none', color:"#fff" }}>Aprender </Link>
      <button onClick={ onClick}>Aprender</button>*/}
      <button>Praticar</button>
    </Container>
  );
}
