import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";
import { useLocation, useSearchParams } from "react-router-dom";
import ListGameSearch from "../components/ListGameSearch";
import { devices } from "../responsive";
import { paddingContainer } from "../globalVariable";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrap = styled.div`
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

  const filter = dataGame.filter((item) => {
    if (nameGame === "") {
      for (let index = 0; index < item.gameType.length; index++) {
        if (
          item.gameType[index].toLowerCase() === filterCategory.toLowerCase()
        ) {
          return item;
        }
      }
    } else if (filterCategory === "") {
      return item.nameGame.includes(nameGame);
    }
  });

  console.log(filter);

  return (
    <Container>
      <Header />

      <Wrap paddingContainer={paddingContainer}>
        <ListGameSearch filterData={filter} />
        <Search />
      </Wrap>
    </Container>
  );
};

export default FindGame;
