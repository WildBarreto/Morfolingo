import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 900px;

  flex: 0 0 320px;

  align-content: center;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .grid-template-rows-2 {
    grid-template-rows: 280px 280px;
  }
  .grid {
    max-width: 400px;
    margin: 0 auto;
  }

  h2 {
    text-align: left;
    margin: 10px auto;
    padding: auto 30px auto;
    width: 514.94px;
    height: 68.66px;
    font-size: "Nunito", "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 65px;

    color: #000000;
  }

  ul {
    margin-top: 50px;
  }

  @media (max-width: 720px) {
    html{font-size: 62.5%;}
    padding: 0 30%;
    height: 900px;

    flex: 0 0 360px;

    align-content: center;

    .grid {
      display: grid;
      grid-template-columns:  160px 200px;
    }

    .grid-template-rows-2 {
      grid-template-rows: 290px 290px;
    }
    .grid {
      max-width: 400px;
      margin: 0 auto;
    }
  }
`;
