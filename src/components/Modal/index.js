import React from 'react';

import { Container } from './styles';



function Modal() {
//const { modalState: { visible}, closeModal} = useModalContext();

  return (
      <Container >
          <button>
              Aprender
          </button>
          <button>
              Praticar
          </button>
      </Container>
  );
}

export default Modal;