import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "../components/Details";

const Container = styled.div``;

const GameDetail = () => {
  const { slug } = useParams();

  const data = useSelector((state) => state.game.gameList).filter(
    (item) => item.slug === slug
  )[0];

  return (
    <Container>
      <Header />

      <Details data={data} />
    </Container>
  );
};

export default GameDetail;
