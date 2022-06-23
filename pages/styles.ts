import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
`;

export const Title = styled.h1`
  font-family: "Raleway";
  font-size: 1.3rem;
  margin: 2rem;
`;

export const ItensContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const Card = styled.div`
  width: 5%;
  min-width: 18rem;
  border-radius: 6px;
  height: 25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-height: 40rem;
  min-height: 20rem;
  margin: 4rem;
  border: 1px solid rgb(220, 220, 220);

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 13rem;
    background-color: 12rem;
    background-color: white;
  }

  p {
    text-align: center;
    font-family: "Raleway";
  }

  .price {
    margin: 1rem auto;
    height: 40px;
    border-radius: 3px;
    width: 80%;
    border: 1px solid rgb(220, 220, 220);
    text-align: center;
    display: flex;
    font-family: "Raleway";
    font-weight: 400;
    background-color: rgb(240, 240, 240);
    justify-content: center;

    p {
      text-align: left;
      font-family: "Raleway";
      font-weight: 400;
      margin-top: 0.3rem;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 3rem;
  float: right;
`;

export const Index = styled.div`
  width: 20%;
  text-align: center;
  align-items: center;
  border-radius: 2px;
  height: 3rem;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  color: rgb(80, 80, 80);
  justify-content: center;

  h1 {
    font-family: "Raleway";
    font-size: 1rem;
  }
`;
