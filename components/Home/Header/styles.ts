import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .main {
    width: 90%;
    height: 6rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 700px){
          border-bottom: 1px solid rgb(150, 150, 150);
    }

    .brand {
      width: 18rem;
      height: 3rem;
      margin: 1.5rem;
      display: flex;

      .tech-down {
        margin-top: -0.6rem;
        width: 50px;
        height: 50px;
        border-radius: 6px;
        background-color: rgb(40, 80, 200);

        .sub-brand {
          width: 40px;
          height: 40px;
          border-radius: 0px 0px 40px 0px;
          background-color: rgb(70, 110, 225);
        }
      }
    }
  }
`;

export const BrandTitle = styled.h1`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  font-weight: 600;
  font-family: Raleway;

  span {
    font-weight: 400;
  }
`;

export const SearchMenu = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  .menu {
    height: 6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 8rem;

    h1 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 1rem;
      font-family: Raleway;
    }
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 6rem;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Contact = styled.div`
  width: 45%;
  height: 6rem;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    display: none;
  }
  .box-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 6rem;

    h1 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 1rem;
      font-family: Raleway;
    }
  }
`;

export const ItensSelected = styled.div`
  width: 100%;
  border-top: 1px solid rgb(200, 200, 200);
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Itens = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 2rem;
  @media (max-width: 900px) {
    width: 100%;
  }
  .itens-link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
      width: 100%;
    }

    .is-active {
      color: rgb(50, 90, 180);
      border-bottom: 3px solid rgb(50, 90, 180);
    }

    .link {
      width: 20%;
      height: 100%;
      text-align: center;
      cursor: pointer;

      p {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 1rem;
        font-family: Raleway;
      }
    }
  }
`;
