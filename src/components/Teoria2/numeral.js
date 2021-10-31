import React from "react";
import { Container } from "../Teoria/styles";

import { BiArrowBack } from "react-icons/bi";

import { Link } from "react-router-dom";

function Teoria() {
  return (
    <Container>
      <button id="voltar">
        <BiArrowBack size={24} color="#1cb0f6" />
        <Link to="/" style={{ textDecoration: "none", color: "#1cb0f6" }}>
          Voltar{" "}
        </Link>
      </button>
      <button id="pratica">Praticar</button>
      <h2>Numeral</h2>
      <p>
        Numeral é uma classe de palavras utilizada para determinar a quantidade
        ou a ordem de elementos numa sequência. <br />
        Assim, quando dizemos que "Ele ganhou o prêmio pela quinta vez" ou que
        "Esta turma é composta por 25 alunos", estamos usando numerais, seja
        para indicar uma ordem ("quinta") ou para falar de determinada
        quantidade ("25").
        <br />
        O numeral pode ser representado de duas maneiras:
        <br />
        <br />
        <b>Pelo símbolo numérico:</b> (1, 2, 3, 4, 1/2, 1/3, 3/4, 3.º, 5.º,
        13.º...). Dentre os símbolos numéricos, existem os algarismos arábicos
        (1, 2, 3, 4...) e os romanos (I, II, III, IV...).
        <br />
        <br />
        <b>Por extenso:</b> (um, dois, três, cem, mil, terço, meio, dobro,
        dúzia...).
        <br /> <br />
        Há alguns tipos de numeral, que se diferenciam de acordo com a sua
        função. Os numerais podem ser classificados em cardinais, ordinais,
        multiplicativos, fracionários e coletivos. Vejamos cada um deles:
        <br />
        <br />
        <b>Numeral Cardinal</b>O numeral cardinal serve para,{" "}
        <b>nomear uma determinada quantidade</b>.<br /> "Um", "dois", "cinco",
        "dez", "cem", "mil" são numerais cardinais.
        <br />
        <b>Exemplo:</b>
        <br />
        Hoje cedo fui à padaria e comprei <b>oito</b> pães, <b>duas</b> baguetes
        e uma torta.Gastei <b>47</b> reais.
        <br />
        Os gastos da empresa no ano passado excederam os{" "}
        <b>dois milhões de reais.</b>
        <br />
        <br />
        <b>Numeral Ordinal </b>
        <br />O numeral ordinal tem a função de dizer a <b>ordem</b> que
        determinado elemento (uma coisa, um ser, uma ideia...) ocupa numa
        sequência. Se um atleta conquistou a medalha de bronze na Olimpíada,
        usamos o numeral ordinal "terceiro" para nos referirmos à posição desse
        atleta na classificação final. "Segundo", "décimo", " centésimo
        primeiro" e "septuagésimo quarto" são numerais ordinais.
        <br />
        <b>Exemplo</b>:<br />
        Meu apartamento fica no <b>décimo primeiro</b> andar.<br/> 
        Fiquei em <b>sexagésimo terceiro</b> na lista final do concurso. <br />
        <br />
        <b>Numeral Multiplicativo</b> <br /> O numeral multiplicativo tem a
        função de indicar aumento na quantidade, utilizando para isso numerais
        que representam multiplicações. "Triplo", "dupla", "dobro" e "sêxtuplo"
        são numerais multiplicativos. Há sempre a opção de transmitirmos a ideia
        de multiplicação fazendo uso da palavra "vezes" após um numeral
        cardinal. Assim, em vez de dizer "triplo", podemos dizer "três vezes",
        ou em vez de dizer "sêxtuplo", "seis vezes".<b>Exemplo</b>:<br /> Faturamos este mês o
        dobro do que faturamos no mês passado. Ex. 2: O número 11 é undécuplo de
        um. (Undécuplo é onze vezes). <br />
        <br />
        <b>Numeral Fracionário </b>
        <br />
        O numeral fracionário serve para indicar diminuição da quantidade,
        fazendo uso de palavras que indicam fracionamento (divisão em partes).
        "Metade", "terço", "quinto" e "oitavo" são numerais fracionários.
        Importante notar que, à exceção de "metade" ("meio") e "terço", todos os
        outros numerais fracionários são representados com outros tipos de
        numerais. Por exemplo: "quinto" e "centésimo" são numerais ordinais que
        cumprem a função de fracionários. Outros numerais fracionários fazem uso
        da palavra "avos" após um numeral cardinal: "onze avos", "vinte e dois
        avos" etc. Ex. 1: Aquela TV custa um terço do meu salário. Ex. 2: A
        vaquinha está sendo um sucesso! Faltam apenas doze avos do valor
        estipulado! <br />
        <br />
        <b>Numeral Coletivo</b>
        <br />O numeral coletivo faz referência a um conjunto de elementos
        (meses, dias, seres, coisas...)."Dúzia", "dezena", "semana" e "semestre"
        são numerais coletivos. Ex. 1: Pedro comprou uma dúzia de ovos. Ex. 2:
        Por causa da epidemia, os tripulantes da embarcação ficaram de
        quarentena. Na designação de papas, reis, imperadores, séculos e parte
        de uma obra, utilizam-se os numerais ordinais até o décimo. Depois,
        utilizam-se os cardinais. Por exemplo: João Paulo II (segundo) e o Bento
        XVI (dezesseis). Para leis, decretos e portarias, utiliza-se o numeral
        ordinal até o nono e o cardinal a partir do dez. Já para os dias do mês,
        utilizam-se os cardinais, com exceção da indicação do primeiro dia do
        mês, feito pelo ordinal "primeiro".
      </p>
    </Container>
  );
}

export default Teoria;
