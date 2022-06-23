import { Presentation, Container, MoreInfo } from "./styles";
import imagePlayStation from "../../../public/assets/images/playstation_5_produto-700x700.png";
import imageIphone from "../../../public/assets/images/iphone-13-pro-family-hero.png";

import Image from "next/image";

export const MorePopular = () => {
  return (
    <>
      <Presentation>
        <Container>
          <div className="primary-card">
            <div>
              <div className="off-price">
                <h1>30% </h1>
                <p>
                  De <br /> Desconto
                </p>
              </div>

              <div className="content">
                <h1>PlayStation 5 - 825GB</h1>

                <p>
                  Console PlayStation 5 - 825GB. Compre agora e consiga 30% de
                  desconto em até 30 dias
                </p>

                <button>Ver mais</button>
              </div>
            </div>
            <div className="image-background">
              <Image src={imagePlayStation} />
            </div>
          </div>

          <div className="dual-card">
            <div className="cards">
              <div className="body">
                <p>Iphone 13s ProMax 128gb</p>

                <h5> <strong><b>18%</b></strong> de desconto á vista</h5>

                <MoreInfo>
                  Ver mais
                </MoreInfo>
              </div>
              <div className="image">
                <Image src={imageIphone} style={{ height: "4rem" }} />
              </div>
            </div>
          </div>
        </Container>
      </Presentation>
    </>
  );
};
