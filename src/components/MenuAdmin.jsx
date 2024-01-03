import React, { useState } from "react";
import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";
import { IoGameController } from "react-icons/io5";
import { RiSlideshow3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setComponentActive } from "../redux/activeSlice";
import { devices } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 30%;
  border: 1px solid black;
  height: 100vh;

  @media ${devices.mobile} {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h2`
  text-align: center;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 10px 0;
`;

const ListItem = styled.ul`
  background-color: #0e0e23;
  margin: 0;
  padding: 0;

  @media ${devices.mobile} {
    display: flex;
  }
`;

const Item = styled.li`
  cursor: pointer;
  color: ${(props) =>
    props.active === props.desc ? "#6259ca" : "hsla(0, 0%, 100%, 0.4)"};
  font-size: 24px;
  list-style: none;
  padding: 10px 32px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: ${(props) => props.active === props.desc && "#eaedf7"};
`;

const ItemName = styled.div`
  display: inline-block;
  transform: translate(0, 0);
  transition: all 0.4s ease;

  ${Item}:hover & {
    transform: translateX(10px);
    color: ${(props) => props.active !== props.desc && "#ffffff"};

    @media ${devices.mobile} {
      transform: translateY(10px);
    }
  }
`;

const Icon = styled.span`
  color: ${(props) =>
    props.active === props.desc ? "#ffffff" : "hsla(0, 0%, 100%, 0.4)"};
  text-align: center;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.active === props.desc && "#6259ca"};
  border-radius: 50%;
  margin: 10px;

  ${Item}:hover & {
    color: ${(props) => props.active !== props.desc && "#ffffff"};
  }
`;

const MenuAdmin = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("ListGame");
  const dispatch = useDispatch();

  const handleClick = (desc) => {
    switch (desc) {
      case "ListGame":
        setActive("ListGame");
        dispatch(setComponentActive("ListGame"));
        break;
      case "AddGame":
        setActive("AddGame");
        dispatch(setComponentActive("AddGame"));
        break;
      case "AddSlide":
        setActive("AddSlide");
        dispatch(setComponentActive("AddSlide"));
        break;
      case "Home":
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>Menu Admin</Title>
      <ListItem>
        <Item
          onClick={() => {
            handleClick("ListGame");
          }}
          active={active}
          desc="ListGame"
        >
          <Icon active={active} desc="ListGame">
            <CiBoxList />
          </Icon>
          <ItemName active={active} desc="ListGame">
            Danh Sách Game
          </ItemName>
        </Item>

        <Item
          onClick={() => {
            handleClick("AddGame");
          }}
          active={active}
          desc="AddGame"
        >
          <Icon active={active} desc="AddGame">
            <IoGameController />
          </Icon>
          <ItemName active={active} desc="AddGame">
            Thêm Game
          </ItemName>
        </Item>

        <Item
          onClick={() => {
            handleClick("AddSlide");
          }}
          active={active}
          desc="AddSlide"
        >
          <Icon active={active} desc="AddSlide">
            <RiSlideshow3Fill />
          </Icon>
          <ItemName active={active} desc="AddSlide">
            Thêm Slide
          </ItemName>
        </Item>

        <Item
          onClick={() => {
            handleClick("Home");
          }}
          active={active}
          desc="Home"
        >
          <Icon active={active} desc="Home">
            <FaHome />
          </Icon>
          <ItemName active={active} desc="Home">
            Trang chủ
          </ItemName>
        </Item>
      </ListItem>
    </Container>
  );
};

export default MenuAdmin;
