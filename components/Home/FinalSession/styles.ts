import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .wallpaper {
    width: 50%;
    background-color: rgb(235, 235, 235);
    border-radius: 16px;
    height: 25rem;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: 35rem;
      width: 100%;
    }

    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40%;
      height: 25rem;

      @media (max-width: 1024px) {
        width: 80%;
        margin: -5rem auto;
      }

      h1 {
        font-family: "Open Sans";
        font-size: 1.8rem;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 1.2rem;
        color: rgb(80, 80, 80);
      }
      .more-info {
        border: none;
        border-radius: 6px;
        width: 13rem;
        height: 40px;
        color: white;
        background-color: rgb(50, 80, 240);
      }
    }
  }
  .container-itens {
    width: 30%;
    height: auto;
    margin-top: 2rem;
    margin: 0 auto;
    @media (max-width: 1024px) {
      flex-direction: column;
      width: 90%;
      margin-left: 5%;
    }

    .mini-itens {
      margin-left: -5rem;
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 6px;
      height: 8rem;
      background-color: rgb(245, 245, 245);
      display: flex;
      justify-content: space-around;

      @media (max-width: 1024px) {
        margin: 2rem auto;
      }

      .sub-image-product {
        width: 30%;
        height: 100%;
      }
      .body-itens {
        width: 60%;
        height: 100%;

        .title-item {
          font-size: 1.1rem;
          font-family: 'Raleway';
          font-weight: 300;
          text-align: left;
        }

        .subtitle-item {
          font-weight: 600;
          font-size: 1.3rem;
          font-family: 'Raleway';
          text-align: left;
        }

        .text-itens {
          font-weight: 300;
          font-size: .9rem;
          font-family: 'Raleway';
          text-align: left;
        }
      }
    }
  }
`;
