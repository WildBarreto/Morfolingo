import React from "react";
import { Container } from "./styles";

import { BiArrowBack } from "react-icons/bi";

function Teoria() {
  return (
    <Container>
      <button id="voltar"><BiArrowBack size={24} color="#1cb0f6"/>Voltar</button>
      <button id="pratica">Praticar</button>
      <h2>Substantivos</h2>
      <p>
        Pertencem a essa classe todas as palavras que designam os seres em
        geral, as entidades reais ou imagináveis. Exemplos: mesa, lua, luz,
        fada, centauro, ilusão, tristeza.
        <br />
        <br />
        O substantivo dificilmente aparecerá sozinho na frase, pois ele possui
        várias palavras que orbitam a seu redor. São os chamados satélites do
        substantivo: artigos, pronomes, numerais, adjetivos.
        <br /> A conclusão bem simples é que, para transformar uma palavra em
        substantivo, basta que a determinemos com os satélites artigos,
        numerais, pronomes e adjetivos.
      </p>
      <h3>Classificação dos substantivos</h3>
      <p>
        O substantivo simples é formado por apenas um radical (pedra, plano,
        guarda, água, etc.), ao passo que o substantivo composto é formado por
        mais de um radical (petróleo = pedra + óleo; planalto = plano + alto;
        guardachuva = guarda + chuva; aguardente = água + ardente).
      </p>
      <h3>Primitivo X Derivado</h3>
      <p>
        O primitivo dá origem ao derivado. O primeiro não possui afixos (pedra),
        ao passo que o segundo sim (pedreiro).
      </p>
      <h3>Comum x Próprio x Coletivo</h3>
      <p>
        O substantivo comum designa uma classe de seres. O próprio designa um
        ser específico da classe. E o coletivo designa uma coleção de seres da
        mesma espécie. O substantivo “aluno” é comum, pois designa uma classe de
        seres; “Paulo” é um substantivo próprio, pois designa um ser específico
        da classe de seres; já “turma” é um coletivo, pois reúne “um monte” de
        seres da mesma classe. Pelo processo de derivação imprópria, é possível
        converter um substantivo próprio em comum. Observe: O Brasil é formado
        de vários brasis. O substantivo “Brasil”, como sabemos, é próprio e
        designa um pais específico. Já “brasis” está empregado como comum e
        designa as diversas realidades das cidades, estados e regiões
        brasileiras.
      </p>
      <h3>Concretos x Abstrato</h3>
      <p>
        São substantivos concretos todas as coisas naturais e materiais, os
        fenômenos, os personagens e os eventos. Por esse critério, “Deus” é
        concreto! Professor, mas se eu não acreditar em Deus? Não importa, ele
        continuará existindo, mas num universo da ficção. É assim também com os
        personagens dos quadrinhos, os superheróis, etc. Já os substantivos
        abstratos são os sentimentos, os atributos e as ações. Para que o
        “estudo” exista, é necessário que alguém estude. Portanto, “estudo” é
        abstrato. Para que a “beleza” exista, é necessário que alguém detenha
        esse atributo. Portanto, “beleza” é abstrato.
      </p>
    </Container>
  );
}

export default Teoria;
