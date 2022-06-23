import { Container } from "./styles";
import vr from "../../../public/assets/images/2014733078-removebg-preview.png";
import airpod from "../../../public/assets/images/MWP22-removebg-preview.png";
import controlXboxSeriesX from "../../../public/assets/images/cpi-1627329671853_vevgerhtarjjhvwcudomtnjwk_202107272_4627-removebg-preview.png";
import headSetGamer from "../../../public/assets/images/137458389-removebg-preview.png";

export const FinalSession = () => {
  return (
    <Container>
      <div className="wallpaper">
        <div className="body">
          <h1>Os melhores equipamentos do mercado</h1>
          <p>Equipamentos profissionais e para uso domésticos</p>
          <button className="more-info">Ver mais</button>
        </div>
        <div className="body">
          <img
            style={{
              objectFit: "cover",
              height: "80%",
              marginLeft: "-3rem",
              marginTop: "2rem",
            }}
            src={vr.src}
          />
        </div>
      </div>
      <div className="container-itens">
        <div className="mini-itens">
          <div className="sub-image-product">
            <img
              style={{
                objectFit: "cover",
                height: "100%",
              }}
              src={airpod.src}
            />
          </div>
          <div className="body-itens">
            <h1 className="title-item">
              AirPods 3ª Geração Apple Original
            </h1>
            <h3 className="subtitle-item">
              R$ 1.600,00
            </h3>
            <p className="text-itens">
              Ou em até 12x sem juros
            </p>
          </div>
        </div>
        <div className="mini-itens">
          <div className="sub-image-product">
            <img
              style={{
                objectFit: "cover",
                height: "100%",
              }}
              src={controlXboxSeriesX.src}
            />
          </div>
          <div className="body-itens">
            <h1 className="title-item">
              Controle Joystick S/fio Xbox Wireless Series X|s Robot White
            </h1>
            <h3 className="subtitle-item">
              R$ 456,00
            </h3>
            <p className="text-itens">
              Ou em até 8x sem juros
            </p>
          </div>
        </div>
        <div className="mini-itens">
          <div className="sub-image-product">
            <img
              style={{
                objectFit: "cover",
                height: "100%",
                marginLeft: "-1.4rem"
              }}
              src={headSetGamer.src}
            />
          </div>
          <div className="body-itens">
            <h1 className="title-item">
              Headset Gamer HyperX Cloud Core
            </h1>
            <h3 className="subtitle-item">
              R$ 429,00
            </h3>
            <p className="text-itens">
              Ou em até 10x sem juros
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
