import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "../components/Details";

const Container = styled.div``;

const GameDetail = () => {
  const { slug } = useParams();

  return (
    <Container>
      <Header />

      <Details slug={slug} />
    </Container>
  );
};

export default GameDetail;
