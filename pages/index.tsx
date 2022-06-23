import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Categories } from "../components/Home/Categories";
import { Consoles } from "../components/Home/Consoles";
import { FinalSession } from "../components/Home/FinalSession";
import { NavBar } from "../components/Home/Header";
import { MorePopular } from "../components/Home/Presentation/";
import { PcGamers } from "../components/PcGamer";
import { Hardware } from "../components/Hardware";
import styles from "../styles/Home.module.css";
import { observer } from "mobx-react-lite";
import { SearchContext } from "../components/Contexts/Search";
import { arrMorePriced } from "../components/Hardware/ItensList";
import { buttonsPagination } from "../components/PcGamer/ListComputers";
import {
  Container,
  Title,
  ItensContainer,
  Card,
  PaginationContainer,
  Index,
} from "../components/Hardware/ItensList/styles";

const Home: NextPage = () => {
  const store = useContext(SearchContext);

  const [morePopular, setMorePopular] = useState(true);
  const [pcGamer, setPcGamer] = useState(false);
  const [searchText, setSearchText] = useState({});
  const [search, setSearch] = useState(false);
  const [hardware, setHardware] = useState(false);
  const [celulares, setCelulares] = useState(false);
  const [consoles, setConsoles] = useState(false);

  const morePopularSelected = () => {
    setMorePopular(!morePopular);
    setHardware(false);
    setCelulares(false);
    setConsoles(false);
    setPcGamer(false);
  };

  const morePcGamer = () => {
    setMorePopular(false);
    setHardware(false);
    setCelulares(false);
    setConsoles(false);
    setPcGamer(!pcGamer);
  };

  const moreHardwareSelected = () => {
    setMorePopular(false);
    setHardware(!hardware);
    setCelulares(false);
    setConsoles(false);
    setPcGamer(false);
  };

  const moreCelularesSelected = () => {
    setMorePopular(false);
    setHardware(false);
    setCelulares(!celulares);
    setConsoles(false);
    setPcGamer(false);
  };

  const moreConsolesSelected = () => {
    setMorePopular(false);
    setHardware(false);
    setCelulares(false);
    setConsoles(!consoles);
    setPcGamer(false);
  };

  useEffect(() => {
    if (store.search.isActive === true) {
      setMorePopular(false);
      setHardware(false);
      setCelulares(false);
      setConsoles(false);
      setPcGamer(false);
      setSearch(!search);
    }
  }, [store.search.isActive]);

  const searchCalled = (e: any) => {
    store.setterSearch(e);
    store.search.isActive = true;
  };

  const array = arrMorePriced.filter((val) => {
    return val._name.toLowerCase().includes(store.search.search.toLowerCase());
  });
  console.log(array);
  return (
    <>
      <NavBar
        searchCalled={(e: any) => searchCalled(e)}
        morePopular={morePopular}
        pcGamer={pcGamer}
        hardware={hardware}
        celulares={celulares}
        consoles={consoles}
        morePopularSelected={morePopularSelected}
        morePcGamer={morePcGamer}
        moreHardwareSelected={moreHardwareSelected}
        moreCelularesSelected={moreCelularesSelected}
        moreConsolesSelected={moreConsolesSelected}
      />

      {morePopular ? (
        <>
          <MorePopular />
          <Categories />
          <Consoles />
          <FinalSession />
        </>
      ) : pcGamer ? (
        <PcGamers />
      ) : hardware ? (
        <Hardware />
      ) : search ? (
        <>
          <Container>
            <br />
            <br />
            <Title>Computadores para trabalho / PC's - Gamers</Title>
            <ItensContainer>
              {array.map((cardValues) => {
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
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default observer(Home);
