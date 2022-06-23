import { useContext, useState } from "react";
import { SearchContext } from "../../Contexts/Search";
import {
  Container,
  Title,
  ItensContainer,
  Card,
  PaginationContainer,
  Index,
} from "./styles";

export const arrMorePriced = [
  {
    _id: 1,
    _name: "Placa-Mãe ASUS Prime - B450M Gaming/BR, AMD ...",
    _price: "R$ 599,00",
    _imageURL:
      "https://m.media-amazon.com/images/I/718jJQI5A+L._AC_SL1000_.jpg",
  },
  {
    _id: 2,
    _name: "Placa Mãe Gigabyte B550M AORUS ELITE (AM4/DDR4/HDMI/M.2) ...",
    _price: "R$ 1.305,00",
    _imageURL:
      "https://m.media-amazon.com/images/I/71OzO9TtYiL._AC_SL1000_.jpg",
  },
  {
    _id: 3,
    _name: "Placa de vídeo estável GTX1050Ti alta definição GDDR5 ...",
    _price: "R$486,37",
    _imageURL: "https://m.media-amazon.com/images/I/41q9uUJWXJL._AC_.jpg",
  },
  {
    _id: 4,
    _name: "Cooler Fan C3Tech Gaming F7-L120M 12cm ...",
    _price: "R$29,90",
    _imageURL:
      "https://m.media-amazon.com/images/I/51vvJ+lmHDS._AC_SL1000_.jpg",
  },
  {
    _id: 5,
    _name: "Placa de Vídeo Gainward - GeForce RTX 3060, 12GB GDDR6 ...",
    _price: "R$3.559,00",
    _imageURL:
      "https://m.media-amazon.com/images/I/61j6OFvZ-SL._AC_SL1000_.jpg",
  },
  {
    _id: 6,
    _name: "Intel PROCESSADOR CORE I5-10400F 2.9GHZ CACHE 12MB 6 ...",
    _price: "R$842,00",
    _imageURL:
      "https://m.media-amazon.com/images/I/61SUV95NFiL._AC_SL1500_.jpg",
  },
  {
    _id: 7,
    _name: "PROCESSADOR INTEL CORE I7-10700F, 8-CORE, 16-THREADS,  ...",
    _price: "R$R$1.717,90",
    _imageURL:
      "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8070110700f.jpg",
  },
  {
    _id: 8,
    _name: "Processador Intel Core i7-10700F, Cache 16MB, 2.9GHz ...",
    _price: "R$1.917,90",
    _imageURL:
      "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8070110700f.jpg",
  },
  {
    _id: 9,
    _name: "Intel PROCESSADOR CORE I5-10400F 2.9GHZ CACHE 12MB 6 ...",
    _price: "R$980,00",
    _imageURL:
      "https://m.media-amazon.com/images/I/61SUV95NFiL._AC_SL1500_.jpg",
  },
];

const buttonsPagination = [
  {
    id: 1,
    page: 1,
  },
  {
    id: 2,
    page: 2,
  },
  {
    id: 3,
    page: 3,
  },
  {
    id: 4,
    page: 4,
  },
];

export const ItensList = () => {
  const store = useContext(SearchContext);

  // const array = arrMorePriced.filter((val) => {
  //   return val._name.toLowerCase().includes(store.search.search.toLowerCase());
  // });

  return (
    <Container>
      <br />
      <br />
      <Title>Computadores para trabalho / PC's - Gamers</Title>
      <ItensContainer>
        {arrMorePriced.map((cardValues) => {
          return (
            <Card key={cardValues._id}>
              <div className="product-image">
                <img
                  style={{ objectFit: "cover", height: "70%" }}
                  src={cardValues._imageURL}
                />
              </div>
              <p>{cardValues._name}</p>
              <p style={{ marginTop: "-1rem" }}>
                <b>{cardValues._price}</b>
              </p>
              <div className="price">
                <p>ver mais</p>
              </div>
            </Card>
          );
        })}
      </ItensContainer>
      <PaginationContainer>
        {buttonsPagination.map((indexPagination, index) => {
          return (
            <Index key={index}>
              <h1>{indexPagination.page}</h1>
            </Index>
          );
        })}
      </PaginationContainer>
    </Container>
  );
};
