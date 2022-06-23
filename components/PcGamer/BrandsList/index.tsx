import { Container, ContainerListbrands } from "./styles";

const brands = [
  {
    id: 1,
    brand: "Dell",
    image:
      "https://http2.mlstatic.com/D_Q_NP_659601-MLA41674422368_052020-G.webp",
  },
  {
    id: 2,
    brand: "acer",
    image:
      "https://http2.mlstatic.com/D_Q_NP_848742-MLA41691729084_052020-G.webp",
  },
  {
    id: 3,
    brand: "Lenovo",
    image:
      "https://http2.mlstatic.com/D_Q_NP_852386-MLA41691199488_052020-G.webp",
  },
  {
    id: 4,
    brand: "Positivo",
    image:
      "https://http2.mlstatic.com/D_Q_NP_805040-MLA41691729174_052020-G.webp",
  },
  {
    id: 5,
    brand: "Asus",
    image:
      "https://http2.mlstatic.com/D_Q_NP_627265-MLA41691199566_052020-G.webp",
  },
  {
    id: 6,
    brand: "HP",
    image:
      "https://http2.mlstatic.com/D_Q_NP_763022-MLA41691729253_052020-G.webp",
  },
];

export const BrandList = () => {
  return (
    <Container>
      <h1>ENCONTRE AS MELHORES MARCAS</h1>
      <ContainerListbrands>
        {brands.map((brands, index) => {
          return (
            <div key={index} className="container-brand">
              <img src={brands.image} alt="" />
            </div>
          );
        })}
      </ContainerListbrands>
    </Container>
  );
};
