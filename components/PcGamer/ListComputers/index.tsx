import { Container, Title, ItensContainer, Card, PaginationContainer, Index } from "./styles";
import 'react-slideshow-image/dist/styles.css'
import Slider from "react-slick";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/Search";


export const arrMorePriced = [
  {
    _id: 1,
    _name: "COMPUTADOR GAMER 3000 - I3 + 8gbram + ssd 240gb ...",
    _price: "R$ 4.305,00",
    _imageURL: 'https://m.media-amazon.com/images/I/61Z+ly7W2+L._AC_SX466_.jpg'
  },
  {
    _id: 2,
    _name: "Pc Cpu Intel Core I5 Quad Core + 8gbram + ssd 240gb",
    _price: "R$ 5.270,00",
    _imageURL: "https://m.media-amazon.com/images/I/41Q4qUMkdML._AC_.jpg"
  },
  {
    _id: 3,
    _name: "Pc Gamer Neologic NLI82737 AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB",
    _price: "R$ 9.729,00",
    _imageURL: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/225542/Pc-Gamer-Neologic-Nli82737-AMD-Ryzen-5-5600G-16GB-radeon-Vega-7-Integrado-SSD-240GB_1631189060_g.jpg"
  },
  {
    _id: 4,
    _name: "Pc Gamer Intel Core i7, 16GB RAM DDR3, GT 1030 2GB, SSD 480GB, Fonte 500w, Gabinete com LED",
    _price: "R$ 4.980,00",
    _imageURL: "https://m.media-amazon.com/images/I/61pWa0reM-L._AC_SX522_.jpg"
  },
  {
    _id: 5,
    _name: "COMPUTADOR GAMER 3000 - I3 + 8gbram + ssd 240gb ...",
    _price: "R$ 4.305,00",
    _imageURL: 'https://m.media-amazon.com/images/I/61Z+ly7W2+L._AC_SX466_.jpg'
  },
  {
    _id: 6,
    _name: "Pc Cpu Intel Core I5 Quad Core + 8gbram + ssd 240gb",
    _price: "R$ 5.270,00",
    _imageURL: "https://m.media-amazon.com/images/I/41Q4qUMkdML._AC_.jpg"
  },
  {
    _id: 7,
    _name: "Pc Gamer Neologic NLI82737 AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB",
    _price: "R$ 9.729,00",
    _imageURL: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/225542/Pc-Gamer-Neologic-Nli82737-AMD-Ryzen-5-5600G-16GB-radeon-Vega-7-Integrado-SSD-240GB_1631189060_g.jpg"
  },
  {
    _id: 8,
    _name: "Pc Gamer Intel Core i7, 16GB RAM DDR3, GT 1030 2GB, SSD 480GB, Fonte 500w, Gabinete com LED",
    _price: "R$ 4.980,00",
    _imageURL: "https://m.media-amazon.com/images/I/61pWa0reM-L._AC_SX522_.jpg"
  },
  {
    _id: 9,
    _name: "Pc Gamer Intel Core i7, 16GB RAM DDR3, GT 1030 2GB, SSD 480GB, Fonte 500w, Gabinete com LED",
    _price: "R$ 4.980,00",
    _imageURL: "https://m.media-amazon.com/images/I/61pWa0reM-L._AC_SX522_.jpg"
  },
  {
    _id: 10,
    _name: "COMPUTADOR GAMER 3000 - I3 + 8gbram + ssd 240gb ...",
    _price: "R$ 4.305,00",
    _imageURL: 'https://m.media-amazon.com/images/I/61Z+ly7W2+L._AC_SX466_.jpg'
  },
  {
    _id: 11,
    _name: "Pc Cpu Intel Core I5 Quad Core + 8gbram + ssd 240gb",
    _price: "R$ 5.270,00",
    _imageURL: "https://m.media-amazon.com/images/I/41Q4qUMkdML._AC_.jpg"
  },
  {
    _id: 12,
    _name: "Pc Gamer Neologic NLI82737 AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB",
    _price: "R$ 9.729,00",
    _imageURL: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/225542/Pc-Gamer-Neologic-Nli82737-AMD-Ryzen-5-5600G-16GB-radeon-Vega-7-Integrado-SSD-240GB_1631189060_g.jpg"
  },
];

export const buttonsPagination = [
  {
    id: 1,
    page: 1
  },
  {
    id: 2,
    page: 2
  },
  {
    id: 3,
    page: 3
  },
  {
    id: 4,
    page: 4
  }
]



export const ListComputers = () => {
  return (
    <Container>
      <br />
      <br />
      <Title>Computadores para trabalho / PC's - Gamers</Title>
      <ItensContainer>
          {
            arrMorePriced.map((cardValues) => {
              return (
                <Card key={cardValues._id}>
                  <div className="product-image">
                    <img style={{ objectFit: "cover", height: "80%" }} src={cardValues._imageURL}  />
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
            })
          }
      </ItensContainer>
      <PaginationContainer>
          {
            buttonsPagination.map((indexPagination, index) => {
              return(
                <Index key={index}>
                  <h1>{indexPagination.page}</h1>
                </Index>
              );
            })
          }
      </PaginationContainer>
    </Container>
  );
};