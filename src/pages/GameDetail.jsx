import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Footer from "../components/Footer";

const Container = styled.div``;

const GameDetail = () => {
  const { slug } = useParams();

  return (
    <Container>
      <Header />

      <Details slug={slug} />

      <Footer />
    </Container>
  );
};

export default GameDetail;
