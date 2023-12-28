import React from "react";
import Header from "../components/Header";
import Slideder from "../components/Slideder";
import Footer from "../components/Footer";
import GroupGame from "../components/GroupGame";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Home = () => {
  const dataGameSortCreated = useSelector(
    (state) => state.game.gameListSortByCreateAt
  );
  const dataGameSortUpdated = useSelector(
    (state) => state.game.gameListSortByUpdateAt
  );

  return (
    <Container>
      <Header />
      <Slideder />
      <GroupGame nameGroup="Game mới đăng" dataGame={dataGameSortCreated} />
      <GroupGame nameGroup="Game mới cập nhật" dataGame={dataGameSortUpdated} />
      <Footer />
    </Container>
  );
};

export default Home;
