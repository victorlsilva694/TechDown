import styled from "styled-components";

export const Presentation = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 35rem;
  margin: 0 auto;
  background-color: rgb(240, 240, 244);
  align-items: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  align-items: center;
  display: flex;
  height: 35rem;

  .primary-card {
    width: 60%;
    display: flex;
    height: 30rem;
    background-color: rgb(50, 80, 210);
    border-radius: 10px;
    position: relative;

    @media(max-width: 800px){
      width: 100%;
    }


    .image-background {
      width: 40%;
      margin-left: 55%;
      margin-top: 2.5rem;
      position: absolute;
      height: 25rem;

      @media(max-width: 1300px){
        margin-top: 11rem;
      }
    }

    .off-price {
      width: 40%;
      margin: 3rem;
      display: flex;
      height: 6rem;

      h1 {
        color: yellow;
        font-size: 5rem;
        font-family: 'Open Sans';
        font-weight: 600;
      }

      p {
        color: white;
        font-size: 2rem;
        margin-left: 2rem;
        font-family: 'Raleway';
        font-weight: 300;
      }
    }
    .content {
      width: 50%;
      margin-left: 2rem;
      height: auto;
      margin: 2rem;

        h1{
          color: white;
          font-size: 2rem;
          font-family: 'Raleway';
          font-weight: 400;
          margin: 1rem;
        }

        p {
          color: rgb(200,200,210);
          margin: 1rem;
        }

        button {
          margin: 1rem;
          font-family: Raleway;
          width: 8rem;
          font-weight: 600;
          height: 3rem;
          font-size: .9rem;
          border: none;
          background-color: white;
          border-radius: 3px;
        }
      }
    }
  }


  .dual-card {
    width: 35%;
    height: 20rem;
    justify-content: center;
    margin-left: 5%;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
      display: none;
    }
      
    .cards {
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      background-color: white;
      width: 100%;
      height: 20rem;
      margin-bottom: 2rem;

      p {
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 1.5rem;
        align-items: center;
        margin-top: 4.5rem;
        text-align: center;
      }
      h5 {
        font-family: 'Raleway';
        font-weight: 300;
        font-size: 1.1rem;
        align-items: center;
        margin-top: 1rem;
        color: rgb(90,90,90);
        text-align: center;
      }

      .body {
        width: 50%;
        height: 100%;
      }
      .image{
        width: 50%;
        height: 100%;
      }
    }
  }
`;

export const MoreInfo = styled.button`
  width: 10rem;
  height: 3rem;
  margin-left: 2.8rem;
  margin-top: 1rem;
  border: none;
  color: white;
  font-family: "Raleway";
  border-radius: 5px;
  background-color: rgb(50, 80, 210);
`;
