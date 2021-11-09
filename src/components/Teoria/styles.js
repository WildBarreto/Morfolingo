import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  margin-top: -1597px;
  background: #ecf1f8;
  width: 100px;
  height: 290%;
  text-align: justify;
  z-index: 1;

  p {
    width: 900px;
    // height: 68.66px;
    margin-left: 200px;
    //padding: auto;
    text-indent: 30px;
    text-align: justify;
    //letter-spacing: 3px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;

    color: rgb(75, 75, 75);
  }

  h2 {
    position: relative;
    text-align: left;
    left: 200px;
    margin: 0;

    width: 714.94px;
    height: 68.66px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 65px;

    color: rgb(75, 75, 75);
  }

  h3 {
    position: relative;
    text-align: left;
    left: 200px;
    margin: 0;

    width: 714.94px;
    height: 68.66px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 65px;

    color: rgb(75, 75, 75);
  }

  #voltar {
    border: none;
    background-color: #ecf1f8;
    color: #1cb0f6;
    cursor: pointer;

    align-self: flex-end;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;

    margin-left: 100px;
    margin-right: 300px;

    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  #pratica {
    background: #1cb0f6;
    color: #ecf1f8;
    cursor: pointer;
    border-radius: 20px;

    position: absolute;
    width: 120px;
    height: 40px;
    left: 1064.68px;
    top: 20px;

    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    border: none;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    width: 100vw;
    position: absolute;
    margin-top: -1597px;
    background: #ecf1f8;

    height: 350%;
   

    p {
      width: 80vw;
      margin-left: 30px;
      font-size: 18px;
    }
    #voltar {
      margin-left: 30px;
    }

    #pratica {
      left: 150vw;
      top: 20px;
    }

    h2 {
      text-align: left;
      left: 50px;
      margin: 0;
    }

    h3 {
      left: 30px;
      margin: 0;

      width: 714.94px;
      height: 68.66px;
      font-size: "Nunito", "Nunito", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 65px;

      color: rgb(75, 75, 75);
    }

    #pratica {
      position: absolute;
      width: 120px;
      height: 40px;
      left: 190px;
      top: 20px;
    }
  }
`;
