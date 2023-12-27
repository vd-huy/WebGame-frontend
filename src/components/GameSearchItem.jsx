import React from "react";
import styled from "styled-components";
import { devices } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

const ImageGame = styled.img`
  padding-right: 10px;
  max-width: 310px;

  height: 172px;
`;

const NameGame = styled.h2`
  font-size: 16px;
`;

const GameSearchItem = ({ imgGame, nameGame }) => {
  return (
    <Container>
      <ImageGame src={imgGame} />
      <NameGame>{nameGame}</NameGame>
    </Container>
  );
};

export default GameSearchItem;
