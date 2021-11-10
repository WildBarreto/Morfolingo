import styled from "styled-components";

export const Container = styled.div`
  height: 80px;

  padding: 0 30px;
  background: #1cb0f6;
  color: #fff;
  display: flex;
  align-items: center;
  width: 84rem;

  #star {
    position: absolute;
    right: 200px;
    width: 40px;
    height: 40px;
  }

  #cont {
    position: absolute;
    top: 10px;
    right: 150px;
    width: 40px;
    height: 40px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 65px;
  }

  #userImage {
    position: absolute;
    right: 50px;
    padding: 10px;
    background: #1cb0f6;
    border-radius: 50%;

    #perfil {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 4px solid #fff;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 200px;
    }
    width: 100vw;
    #star {
      position: absolute;
      left: 150%;
      width: 40px;
      height: 40px;
    }
    #userImage {
      position: absolute;
      left: 180%;
      padding: 10px;
      background: #1cb0f6;
      border-radius: 50%;

      #perfil {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid #fff;
      }
    }
    #cont {
      position: absolute;
      top: 10px;
      left: 170%;
      width: 40px;
      height: 40px;
      font-size: "Nunito", "Nunito", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 65px;
    }
  }
`;
