import { Title, ItensContainer, Card, Container } from "./styles";
import Ps5 from "../../../public/assets/images/playstation_5_produto-700x700.png";
import xbox from "../../../public/assets/images/525324-removebg-preview.png";
import rtx from "../../../public/assets/images/rtx.png";
import telefone from "../../../public/assets/images/download-removebg-preview.png";
import Image from "next/image";

const arrMorePriced = [
  {
    id: 1,
    name: "Console PlayStation 5",
    image: "assets/images/playstation_5_produto-700x700.png",
    price: "R$ 6.200,00",
  },
  {
    id: 2,
    name: "Console Xbox Series X",
    price: "R$ 6.200,00",
    image: "assets/images/525324-removebg-preview.png",
  },
  {
    id: 3,
    name: "Placa de vídeo - RTX 2060",
    price: "R$ 6.200,00",
    image: "assets/images/rtx.png",
  },
  {
    id: 4,
    name: "Celular Moto G20",
    price: "R$ 6.200,00",
    image: "assets/images/download-removebg-preview.png",
  },
];

export const Consoles = () => {
  return (
    <Container>
      <br />
      <br />
      <Title>Mais Vendidos</Title>

      <ItensContainer>
        {arrMorePriced.map((itensConsoles, index) => {
          return (
            <Card key={index}>
              <div className="product-image">
                <img
                  style={{ objectFit: "cover", height: "80%" }}
                  src={itensConsoles.image}
                />
              </div>
              <p>{itensConsoles.name}</p>
              <p style={{ marginTop: "-1rem" }}>
                <b>{itensConsoles.price}</b>
              </p>
              <div className="price">
                <p>ver mais</p>
              </div>
            </Card>
          );
        })}
      </ItensContainer>
    </Container>
  );
};


