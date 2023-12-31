import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";
import { useLocation, useSearchParams } from "react-router-dom";
import ListGameSearch from "../components/ListGameSearch";
import { devices } from "../responsive";
import { paddingContainer } from "../globalVariable";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrap = styled.div`
  min-height: 740px;
  margin-top: 20px;
  padding: ${(props) => props.paddingContainer};
  display: flex;
  justify-content: space-between;

  @media ${devices.tabletAndMobile} {
    flex-direction: column;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

const FindGame = () => {
  const search = useLocation().search;
  const nameGame = new URLSearchParams(search).get("nameGame");
  const filterCategory = new URLSearchParams(search).get("filterCategory");

  const dataGame = useSelector((state) => state.game.gameList);

  const [isNull, setIsNull] = useState(true);

  useEffect(() => {
    if (nameGame !== "" && filterCategory !== "") {
      setIsNull(false);
    }
  }, [nameGame, filterCategory]);

  const filter = dataGame.filter((item) => {
    if (nameGame !== "" || filterCategory !== "") {
      for (let index = 0; index < item.gameType.length; index++) {
        if (
          item.gameType[index].toLowerCase() === filterCategory.toLowerCase()
        ) {
          return item.nameGame.includes(nameGame);
        }
      }
    }

    if (nameGame === "") {
      for (let index = 0; index < item.gameType.length; index++) {
        if (
          item.gameType[index].toLowerCase() === filterCategory.toLowerCase()
        ) {
          return item;
        }
      }
    }

    if (filterCategory === "") {
      return item.nameGame.includes(nameGame);
    }
  });

  console.log(nameGame);

  return (
    <Container>
      <Header />

      <Wrap paddingContainer={paddingContainer}>
        <ListGameSearch filterData={filter} isNull={isNull} />
        <Search />
      </Wrap>

      <Footer />
    </Container>
  );
};

export default FindGame;
