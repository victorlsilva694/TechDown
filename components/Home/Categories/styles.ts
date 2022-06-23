import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  display: flex;

  .itens {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 80%;

    .container-itens {
      align-items: "center";
      display: "flex";
      flex-direction: "column";
      justify-content: "center";
    }

    p {
      font-family: "Raleway";
      font-weight: 500;
      font-size: 1.4rem;
      color: black;
      text-align: center;
    }

    .options {
      border-radius: 12rem;
      margin: 30px;
      max-width: 12rem;
      min-width: 12rem;
      height: 12rem;
      background-color: rgb(230, 230, 230);
      align-items: center;
      justify-content: center;
      display: flex;

      h1 {
        font-family: "Raleway";
        font-weight: 400;
        font-size: 2rem;
        color: white;
        text-align: center;
      }
    }
  }

  .is-active {
    background-color: rgb(50, 80, 210) !important;
  }

  .is-double-active {
    background-color: rgb(70, 130, 240) !important;
  }
`;
