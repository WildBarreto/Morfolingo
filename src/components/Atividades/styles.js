import styled from "styled-components";

export const Container = styled.div`

position: absolute;
  margin-top: -1597px;
  background: #ecf1f8;
  width: 100%;
  height: 250%;
  text-align: justify;
  z-index: 1;

  #close {
    position: absolute;
    left: 120px;
    top: 100px;
  }
  .progress-div {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: rgb(233, 233, 233);
    border-radius: 0.5rem;
    width: 70%;
    height: 10px;
    margin-left: 200px;
  }

  .progress {
    background-color: #1cb0f6;
    height: 10px;
    border-radius: 1rem;
    transition: 1s ease;
    transition-delay: 0.5s;
  }

  #pratica {
    background: #1cb0f6;
    color: #ecf1f8;
    cursor: pointer;
    border-radius: 20px;

    position: absolute;
    width: 120px;
    height: 40px;

    right: 270px;
    top: 330px;

    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    border: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
  

  h2 {
    position: relative;
    width: 714.94px;
    height: 68.66px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 65px;

    color: rgb(75, 75, 75);
  }

  #content {
    margin-left: 300px;
    position: relative;
    width: 56%;
    height: 300px;
    //background: #c4c4c4;
  }

  img{
    width: 200px;
  }
  #medico{
    width:90px;
  }
  #peixe{
    width: 200px;
  }
#navio{
  position: relative;
  top: -20px;
}
#banguelo{
  width: 100px;
  margin-right: 30px;
}
#programer{
  width: 200px;
  margin-right: 10px;
}
  
  #label{
    color:  rgb(75, 75, 75);
  }

  
  label{
    position: absolute;
    color: rgb(75, 75, 75);
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    top: 29%;
  }

  #close{
    //position: absolute;
    left: 80%;
    top: 0%;
  }
  textarea {
    position: absolute;
    width: 400px;
    height: 100px;
    //left: 18.33%;
    right: 40%;
    top: 73%;
    bottom: 28.6%;
    text-align: Left;
    
    background: rgba(196, 196, 196, 0.26);
    border-radius: 10px;
    color: rgb(75, 75, 75);
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    padding: 25px;
    resize: none
  }
`;
