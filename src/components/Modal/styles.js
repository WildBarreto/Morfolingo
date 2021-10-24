import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  align-self: center;
  width: 350px;
  height: 150px;
  left: 43%;
  top: 250px;
  background: rgba(152, 246, 82, 0.94);
  border: 1px solid rgba(0, 0, 0, 0.42);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-content: space-between;

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
