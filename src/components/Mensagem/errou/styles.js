import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 115px;

  left: 17%;
  background:  #ffa7ad;
  position: absolute;
  top: 80%;
  z-index: 1;
  border-radius: 20px;
  h1 {
    position: absolute;
    top: 5px;
    left: 90px;
    color: #ecf1f8;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #dica {
    width: 300px;
    background: #ecf1f8;
    width: 300px;
    height: 70px;
    border-radius: 10px;
    left: 100px;
    top: 40px;
    position: absolute;
    //align-items: center;
  }

  p {
    position: absolute;
    width: 93%;

    left: 10px;
    top: 2px;

    text-indent: 10px;
    text-align: justify;
    //letter-spacing: 1px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    //line-height: 40px;

    color: rgb(75, 75, 75);
  }

  #lamp {
    //position: absolute;
    top: 60px;
    left: 80px;
  }
  #lampi {
    position: absolute;
    left: -10px;
    width: 20px;
  }

  #icon {
    background: #ecf1f8;
    width: 50px;
    right: 50px;
    border-radius: 50%;
    left: 20px;
    top: 30px;
    position: absolute;
    align-items: center;
  }
  #close {
    position: relative;
    left: 5px;
  }
  button {
    background: #ec0b1b;
    color: #ecf1f8;
    cursor: pointer;
    border-radius: 20px;

    width: 100px;
    height: 30px;
    position: absolute;
    right: 10%;
    top: 55px;

    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    border: none;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    width: 80vw;
    height: 250px;

    left: 29px;
    background: #ffa7ad;
    position: absolute;
    top: 60vh;

    h1 {
      position: absolute;
      top: 5px;
      left: 10px;
    }

    #dica {
      left: 20px;
      top: 45px;
      position: absolute;
      width: 70vw;
      height: 150px;
    }

    p {
      position: absolute;
      width: 93%;

      left: 10px;
      top: 2px;

      text-indent: 10px;
      text-align: justify;
      //letter-spacing: 1px;
      font-size: "Nunito", "Nunito", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      //line-height: 40px;

      color: rgb(75, 75, 75);
    }

    button {
      width: 200px;
      height: 35px;
      position: absolute;
      right: 10%;
      top: 210px;
    }
  }
`;
