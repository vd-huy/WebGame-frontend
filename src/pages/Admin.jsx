import React from "react";
import styled from "styled-components";
import MenuAdmin from "../components/MenuAdmin";
import { useSelector } from "react-redux";
import ListGame from "../components/ListGame";
import NewGame from "./NewGame";
import AddSlide from "./AddSlide";
import { devices } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #eaedf7;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

const Admin = () => {
  const componentActive = useSelector((state) => state.active.active);

  let component;

  switch (componentActive) {
    case "ListGame":
      component = <ListGame />;
      break;
    case "AddGame":
      component = <NewGame />;
      break;
    case "AddSlide":
      component = <AddSlide />;
      break;
    default:
      break;
  }

  return (
    <Container>
      <MenuAdmin />

      {component}
      {/* <AddSlide /> */}
    </Container>
  );
};

export default Admin;
