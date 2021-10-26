import React from 'react';
import { Container } from './styles';

import {loadLists} from '../../services/api'

import List from '../List'
import Teoria from '../Teoria';

const lists =loadLists();


function Board() {
  return(
    <Container>
       
        {lists.map(list => <List key={list.title} data={list} />)}

       
       
    </Container>
    
  );
}

export default Board;