import React from "react";



import Card from "../Card";

import { Container } from "./styles";

function List({ data }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2> {/*Pegas os dados do sevice api */}
      </header>

      <ul className="grid grid-template-rows-2">
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;

