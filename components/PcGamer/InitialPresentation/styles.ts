import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  background-color: rgb(230, 230, 230);
  justify-content: space-around;

  @media(max-width: 930px) {
    display: none;
  }

  div {
    width: 100%;
    height: 10rem;

    h1{
        position: absolute;
        font-family: 'Raleway';
        font-size: 2rem;
        margin: 2.5rem;
        color: rgb(80,80,80);
        font-weight: 400;
    }

    .imageWallPaper {
      z-index: 2;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
