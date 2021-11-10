import styled from "styled-components";

export const Container = styled.div`
  //position: static;
  width: 170px;
  height: 200px;
  margin-left: 30%;
  top: 443.09px;
  margin-bottom: 30px;
  background: ${(props) =>
    `${props.background}`}; //recebe a passada na propridade background do container do card
  // background: #5acc05;

  border-radius: 12px;

  grid-column-gap: 37px;
  display: grid;
  grid-auto-columns: calc(33.33333% - 8px);
  grid-auto-flow: column;
  justify-content: space-evenly;

  cursor: pointer;

  padding: 11px;

  img {
    width: 50px;
  }
  #stars {
    width: 90px;
    top: 155px;
    position: relative;
    right: 50px;
  }

  p {
    margin: auto;
    position: absolute;
    top: 65px;
    left: 50px;
    transform: translate(-50%, -50%);

    width: 167.6px;
    height: 32.79px;
    position: relative;

    //top: 120px;
    right: 15px;
    font-size: 14px "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 37px;

    color: #ffffff;
  }

  header {
  }

  ul {
    margin-top: 50px;
  }

  button {
    position: relative;
    z-index: 1;
    //align-self: flex-end;
    //margin: 50px;
    top: 200px;
    right: 145px;
    cursor: pointer;
    margin-bottom: 20px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    //text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 43.86px;
    //left: 132.34px;

    background: ${(props) => `${props.background}`}; // #5acc05;
    border: 5px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    width: 130px;
    height: 150px;
    margin-left: 10px;
    top: 40px;
  margin-bottom: 30px;

    margin-bottom: 10px;

    grid-column-gap: 35px;
    display: grid;
    grid-auto-columns: calc(33.33333% - 8px);

    padding: 11px;

    button {
    
    top: 150px;
    right: 113px;
    
    margin-bottom: 20px;
    height: 40px;
   
    font-size: 14px;
    font-weight: bold;
    
    width: 130px;
    height: 43.86px;
   
  }
  }
`;

export const Header = styled.div`
  position: static;
  width: 150px;
  height: 121.49px;
  top: 0px;
  margin-left: 25px;
  background: ${(props) => `${props.background}`}; // rgba(152, 247, 82, 0.85);
  border: 6px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 720px) {
   
    width: 100px;
    height: 100px;
    top: 0px;
    margin-left: 25px;
    box-sizing: border-box;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }
`;
