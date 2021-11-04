import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 115px;

  left: 17%;
  background:rgba(236, 11, 27, 0.24);
  position: absolute;
  top: 80%;
  z-index: 1;
  border-radius: 20px;
h1{
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

#dica{
 
  width: 300px;
  background:  #ecf1f8;
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
    width: 300px;
   
    left: 10px;
    top: 5px;
    
    text-indent: 10px;
    //text-align: justify;
    //letter-spacing: 1px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    //line-height: 40px;

    color: rgb(75, 75, 75);
  }

#lamp{
  //position: absolute;
  top: 60px;
  left: 80px;
}

#icon{
    background: #ecf1f8;
    width: 50px;
    right: 50px;
    border-radius: 50%;
    left: 20px;
    top: 30px;
    position: absolute;
    align-items: center;
}
#close{
    position: relative;
    left: 5px;
}
  button {
    background: #EC0B1B;
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
`;
