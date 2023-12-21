import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";

const Container = styled.div``;

const FindGame = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

export default FindGame;
