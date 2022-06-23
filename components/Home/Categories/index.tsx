import { Container } from "./styles";
import imageIConsole from "../../../public/assets/images/D_NQ_NP_831828-MLA47920360781_102021-W-removebg-preview.png";
import rtx from "../../../public/assets/images/a_59651_alta_1-removebg-preview.png";
import cell from "../../../public/assets/images/263682-removebg-preview.png";
import Image from "next/image";

export const Categories = () => {
  return (
    <Container>
      <div className="itens">
        <div className="container-itens">
          <div className="options is-active">
            <h1>Favoritos</h1>
          </div>
          <p>Favoritos</p>
        </div>
        <div className="container-itens">
          <div className="options is-double-active">
            <h1>Ofertas</h1>
          </div>
          <p>Ofertas</p>
        </div>
        <div className="container-itens">
          <div className="options">
            <Image src={imageIConsole} />
          </div>
          <p>Consoles</p>
        </div>
        <div className="container-itens">
          <div className="options">
            <Image
              src={rtx}
              style={{ width: "80% !important", height: "80%" }}
            />
          </div>
          <p>Hardware</p>
        </div>

        <div className="container-itens">
          <div className="options">
            <img
              src={cell.src}
              style={{ width: "80% !important", height: "80%" }}
            />
          </div>
          <p>Celulares</p>
        </div>
      </div>
    </Container>
  );
};
