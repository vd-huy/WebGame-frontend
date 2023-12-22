import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ImageGame = styled.img`
  padding-right: 10px;
  max-width: 310px;
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
