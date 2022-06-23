import {
  Header,
  BrandTitle,
  SearchMenu,
  Contact,
  ItensSelected,
  Itens,
} from "./styles";
import { MdOutlineMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FormControl, InputGroup } from "react-bootstrap";

interface ISelectItens {
  morePopular: boolean;
  pcGamer: boolean;
  hardware: boolean;
  celulares: boolean;
  consoles: boolean;
  morePopularSelected: () => void;
  morePcGamer: () => void;
  searchCalled: (e: any) => void;
  moreHardwareSelected: () => void;
  moreCelularesSelected: () => void;
  moreConsolesSelected: () => void;
}

export const NavBar = ({
  morePopular,
  pcGamer,
  hardware,
  celulares,
  consoles,
  searchCalled,
  morePopularSelected,
  morePcGamer,
  moreHardwareSelected,
  moreCelularesSelected,
  moreConsolesSelected,
}: ISelectItens) => {
  return (
    <Header>
      <div className="main">
        <div className="brand">
          <div className="tech-down">
            <div className="sub-brand"></div>
          </div>

          <BrandTitle>
            Tech<span>Down</span>
          </BrandTitle>
        </div>

        <SearchMenu>
          <div className="menu">
            <div style={{ height: "2rem", width: "2rem" }}>
              <MdOutlineMenu
                style={{ height: "2rem", width: "2rem", marginTop: "1rem" }}
              />
            </div>
            <h1>Menu</h1>
          </div>

          <div className="search">
            <InputGroup
              className="mb-3"
              style={{ backgroundColor: "rgb(245,245,245)", height: "3rem" }}
            >
              <FormControl
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  height: "3rem",
                }}
                onChange={(e) => searchCalled(e.target.value)}
                placeholder="Em que podemos ajudar?"
                aria-label="Em que podemos ajudar?"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  height: "3rem",
                }}
                id="basic-addon2"
              >
                <BsSearch />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </SearchMenu>

        <Contact>
          <div className="box-contact">
            <div style={{ height: "2rem", width: "2rem" }}>
              <BsFillTelephoneFill
                style={{
                  color: "rgb(40, 90, 215)",
                  width: "1.3rem",
                  height: "1.3rem",
                }}
              />
            </div>
            <div>
              <h1 style={{ fontWeight: "500", color: "rgb(150,150,150)" }}>
                Telefone
              </h1>
              <h1 style={{ fontWeight: "600" }}>(19)98427-7203</h1>
            </div>
          </div>
          <div className="box-contact">
            <div style={{ height: "2rem", width: "2rem" }}>
              <AiOutlineUser
                style={{
                  color: "rgb(40, 90, 215)",
                  width: "1.3rem",
                  height: "1.3rem",
                }}
              />
            </div>
            <h1 style={{ fontWeight: "400" }}>Entrar agora</h1>
          </div>
        </Contact>
      </div>

      <ItensSelected>
        <Itens>
          <div className="itens-link">
            <div
              onClick={morePopularSelected}
              className={morePopular ? "link is-active" : "link"}
            >
              <p>Mais Populares</p>
            </div>
            <div
              onClick={morePcGamer}
              className={pcGamer ? "link is-active" : "link"}
            >
              <p>Pc - Gamer</p>
            </div>
            <div
              onClick={moreHardwareSelected}
              className={hardware ? "link is-active" : "link"}
            >
              <p>Hardware</p>
            </div>
          </div>
        </Itens>
      </ItensSelected>
    </Header>
  );
};
