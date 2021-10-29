import React, { useState } from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

export default function Modal({ data }) {
  const [isTe, setIsTe] = useState(false);
  const onClick = () => setIsTe(!isTe);

  /*function refreshPage() {
    window.location.reload()
  }*/

  console.log(isTe);
  return (
    <Container>
      <Link to="/Teoria" style={{ textDecoration: "none", color: "#fff" }}>
        <button onClick={onClick}>Aprender</button>
      </Link>

      <button>Praticar</button>
    </Container>
  );
}
