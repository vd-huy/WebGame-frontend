import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { paddingContainer } from "../globalVariable";
import loading from "../assest/loading.svg";

const Container = styled.div`
  padding: ${(props) => props.paddingContainer};
  display: flex;
`;

const Loading = styled.img``;

const Content = styled.div`
  width: 66.66666%;
`;

const Title = styled.h1``;

const Details = ({ data }) => {
  const dataGame = sessionStorage.getItem("dataGameDetail");

  console.log(dataGame);

  return (
    <Container paddingContainer={paddingContainer}>
      {data ? (
        <Content>
          <Title>{data.name}</Title>
        </Content>
      ) : (
        <Loading src={loading} />
      )}

      <Search />
    </Container>
  );
};

export default Details;
