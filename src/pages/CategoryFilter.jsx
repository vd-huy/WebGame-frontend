import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";
import { useLocation, useParams } from "react-router-dom";
import ListGameSearch from "../components/ListGameSearch";
import { devices } from "../responsive";
import { paddingContainer } from "../globalVariable";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrap = styled.div`
  min-height: 740px;
  margin-top: 20px;
  padding: ${(props) => props.paddingContainer};
  display: flex;
  justify-content: space-between;

  @media ${devices.tabletAndMobile} {
    flex-direction: column;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

const CategoryFilter = () => {
  const { slugCategory } = useParams();
  const dataGame = useSelector((state) => state.game.gameList);

  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    switch (slugCategory) {
      case "game-kinh-di":
        setFilterCategory("Game kinh dị");
        break;
      case "game-sinh-ton":
        setFilterCategory("Game sinh tồn");
        break;
      case "game-the-thao":
        setFilterCategory("Game thể thao");
        break;
      case "game-phieu-luu":
        setFilterCategory("Game phiêu lưu");
        break;
      default:
    }
  }, [slugCategory]);

  const filter = dataGame.filter((item) => {
    for (let index = 0; index < item.gameType.length; index++) {
      if (item.gameType[index].toLowerCase() === filterCategory.toLowerCase()) {
        return item;
      }
    }
  });

  return (
    <Container>
      <Header />

      <Wrap paddingContainer={paddingContainer}>
        <ListGameSearch filterData={filter} />
        <Search />
      </Wrap>

      <Footer />
    </Container>
  );
};

export default CategoryFilter;
