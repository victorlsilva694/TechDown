import * as S from "./style";
import { Carousel, Container, Row } from "react-bootstrap";

const menu = [
  {
    name: "Contato",
    links: [
      { title: "Quem Somos?" },
      { title: "Entre em Contato" },
      { title: "Trabalhe conosco" },
    ],
  },
  {
    name: "Serviços",
    links: [
      { title: "Celulares" },
      { title: "Consoles" },
      { title: "Produtos gerais" },
    ],
  },
];

export default function Footer() {
  return (
    <S.Footer>
      <S.TopBar>
        <S.GetTheApp></S.GetTheApp>
        <S.DesktopSocialList></S.DesktopSocialList>
      </S.TopBar>
      <S.HR />
      <S.BottomBar>
        {menu.map(({ name, links }, index) => (
          <S.Menu key={index}>
            <S.MenuHead>{name}</S.MenuHead>
            {links.map(({ title }, index) => (
              <S.MenuLink key={index} href="#">{title}</S.MenuLink>
            ))}
          </S.Menu>
        ))}
        <S.MobileSocialList>TechDown - Shop</S.MobileSocialList>
        <S.Policy>
          <S.PolicyRow>© 2022 TechDown - Shop</S.PolicyRow>
          <S.PolicyRow>
            A plataforma TechDown Shop não se responsabiliza por erros durante
            as vendas dos sistemas, golpes vindo de terceiros em ataques de
            phishing, produtos que não são o que se esperava ou que não
            agradaram o cliente de alguma forma.
          </S.PolicyRow>
          <S.PolicyRow>
            Nós da TechDown - Shop não temos vínculo algum com os vendedores nem
            mesmo com os cliente, somos somente uma plataforma de venda de
            produtos.
          </S.PolicyRow>
          <S.PolicyRow>
            Desde já agradecemos pela preferencia e desejamos que sinta-se a
            vontade dentro da nossa plataforma!
          </S.PolicyRow>
        </S.Policy>
      </S.BottomBar>
    </S.Footer>
  );
}
