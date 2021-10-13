import React from 'react';

import { } from 'react-icons/md'

import Card from '../Card'

import { Container } from './styles';

function List() {
  return (
      <Container>
          <header>
              <h2>Estrutura das palavras</h2>
          </header>

          <ul>
              <Card/>
              <Card/>
              <Card/>
            
          </ul>
      </Container>
  );
}

export default List;