import React, { useEffect, useState } from "react";
import GroupGameItem from "./GroupGameItem";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { paddingContainer, widthContainer } from "../globalVariable";
import { devices } from "../responsive";

const Container = styled.div`
  margin: ${(props) => props.paddingContainer};
  padding: 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    margin: auto;
    border: 0;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  color: rgb(255, 0, 0);
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 2px;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);

    @media ${devices.mobile} {
      max-width: 50px;
      right: -14%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);

    @media ${devices.mobile} {
      max-width: 50px;
      left: -14%;
    }
  }
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${devices.mobile} {
  }
`;

const GroupGame = ({ nameGroup, dataGame }) => {
  return (
    <Container
      paddingContainer={paddingContainer}
      widthContainer={widthContainer}
    >
      <Title>{nameGroup}</Title>

      <Group>
        {dataGame.slice(0, 9).map((item) => {
          return (
            <GroupGameItem imgGame={item.imgGame} nameGame={item.nameGame} />
          );
        })}
      </Group>
    </Container>
  );
};

export default GroupGame;
