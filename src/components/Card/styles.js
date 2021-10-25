import react from "react";
import styled from "styled-components";

export const Container = styled.div`
  
  width: 170px;
  height: 200px;
  margin-left: 50%;
  top: 443.09px;
  margin-bottom: 10px;
  background: ${props => `${props.background}`};//recebe a passada na propridade background do container do card 
 // background: #5acc05;

  border-radius: 12px;

  grid-column-gap: 11px;
  display: grid;
  grid-auto-columns: calc(33.33333% - 8px);
  grid-auto-flow: column;
  justify-content: center;

  cursor: pointer;
  
  padding: 11px ;
  
  img {
   
    width: 60px;
  }
  #stars{
    width: 90px;
    top: 155px;
    position: relative;
    right: 70px;
  }

  p {
    width: 167.6px;
    height: 32.79px;
    position: relative;
    top: 120px;
    right: 34px;
    font-size: 14px 'Nunito', 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 37px;

    color: #ffffff;
  }

  header {
    
    
  }

  ul{
    margin-top: 50px;
  }

  button {
    
    align-self: flex-end;
    margin:  20px;
    cursor: pointer;
    
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 315.47px;
    height: 43.86px;
    left: 432.34px;

    background: #5acc05;
    border: 5px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
`;

export const Header = styled.div`

position: relative;
    width: 150px;
    height: 121.49px;
    top: 0px;
    
    background: ${props => `${props.background}`};// rgba(152, 247, 82, 0.85);
    border: 6px solid #ffffff;
    box-sizing: border-box;
    border-radius: 12px;
    display: flex;
    justify-content: center;
`;

export const Container2 = styled.div`
  
`;



