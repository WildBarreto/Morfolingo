import React from "react";

import {} from "react-icons/md";

import Card from "../Card";

import { Container } from "./styles";

function List({data}) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>

      
      <section class="grid grid-template-rows-2">
      <div class="item"><Card /></div>
        <div class="item"><Card /></div>
       
        
      </section>

      <section class="grid grid-template-rows-2">
      <div class="item"><Card /></div>
        <div class="item"><Card /></div>
       
        
      </section>
     
    </Container>
  );
}

export default List;
