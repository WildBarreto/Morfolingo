import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100px;

  left: 17%;
  background: #abff6c;
  position: absolute;
  top: 80%;
  z-index: 1;
  border-radius: 20px;
  h1 {
    position: absolute;
    top: 20px;
    left: 120px;
    color: #ecf1f8;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #icon {
    background: #ecf1f8;
    width: 60px;
    height: 50px;
    border-radius: 50%;
    left: 30px;
    top: 25px;
    position: absolute;
    align-items: center;
  }
  #check {
    position: relative;
    left: 10px;
    top: 10px;
  }
  button {
    background: #85d700;
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
    height: 180px;

    left: 30px;
    background: #abff6c;
    position: absolute;
    top: 65vh;
    
    h1 {
      position: absolute;
    top: 70px;
    left: 5px;
    width: 250px;
    color: #ecf1f8;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
      width: 200px;
      height: 40px;
      position: absolute;
      right: 20px;
      top: 130px;
    }

    #icon {
   
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 20px;
    top: 20px;
    position: absolute;
    align-items: center;
  }
  #check {
    position: relative;
    width: 30px;
    left: 3px;
    top: 3px;
  }
  }
`;
