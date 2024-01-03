import React from "react";
import styled from "styled-components";
import { devices } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 30%;
  cursor: pointer;

  @media ${devices.mobile} {
    width: 40%;
  }
`;

const ImageGame = styled.img`
  height: 182px;
  border-radius: 10px;
  max-width: 300px;

  @media ${devices.mobile} {
    width: 132px;
    height: 114px;
  }
`;

const NameGame = styled.h5`
  margin: 10px 0 20px 0;
  font-size: 18px;

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const GroupGameItem = ({ imgGame, nameGame, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${slug}`);
  };

  return (
    <Container onClick={handleClick}>
      <ImageGame src={imgGame} />
      <NameGame>{nameGame}</NameGame>
    </Container>
  );
};

export default GroupGameItem;
