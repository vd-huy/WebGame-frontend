import React from "react";
import styled from "styled-components";
import GameSearchItem from "./GameSearchItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 66.66666%;
`;

const ListGameSearch = ({ filterData }) => {
  const dataGame = useSelector((state) => state.game.gameList);

  return (
    <Container>
      {filterData[0]
        ? filterData.map((item, index) => {
            return (
              <GameSearchItem imgGame={item.imgGame} nameGame={item.nameGame} />
            );
          })
        : dataGame.map((item, index) => {
            return (
              <GameSearchItem imgGame={item.imgGame} nameGame={item.nameGame} />
            );
          })}
    </Container>
  );
};

export default ListGameSearch;
