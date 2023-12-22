import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assest/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";
import { setDataCategory } from "../redux/categorySlice";
import { devices } from "../responsive";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { paddingContainer, widthContainer } from "../globalVariable";

const Container = styled.div`
  height: 92px;
  background-color: #127cc3;
  display: flex;
  /* justify-content: center; */
  padding: ${(props) => props.paddingContainer};
`;

const Nav = styled.nav`
  width: ${(props) => props.widthContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobile} {
    width: 100vw;
  }
`;

const Logo = styled.img`
  height: 90px;
  height: 90px;
  border-radius: 50%;

  @media ${devices.mobile} {
    flex: 1;
    height: 70px;
    height: 70px;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;

  /* padding: ${(props) => (props.role === "dropMenu" ? "0" : "8px 16px")}; */
  width: 90px;
  text-align: center;

  @media ${devices.mobile} {
    display: ${(props) => (props.desc === "menu" ? "none" : "block")};
    width: 100%;
  }
`;

// const Category = styled.div`
//   position: relative;
//   width: 90px;
//   color: white;
//   font-weight: 500;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding: 8px 16px;
//   cursor: pointer;

//   ::after {
//     content: "";
//     position: absolute;
//     top: 30px;
//     right: 20px;
//     width: 40px;
//     height: 40px;
//     background-color: transparent;
//   }
// `;

const Icon = styled.span`
  display: ${(props) => (props.desc === "iconLogin" ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: white;

  @media ${devices.mobile} {
    display: flex;
    font-size: 30px;
  }
`;

const NavMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;

  @media ${devices.mobile} {
    display: flex;
    font-size: 30px;
  }
`;

const NavIcon = styled.span`
  display: ${(props) => (props.desc === "iconLogin" ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: white;

  @media ${devices.mobile} {
    display: flex;
    font-size: 30px;
  }
`;

const DropMenu = styled.ul`
  display: ${(props) => (props.active ? "block" : "none")};
  height: 100vh;
  list-style: none;
  background-color: white;
  position: absolute;
  top: 32px;
  left: 0;
  min-width: 236px;
  padding: 0;
  z-index: 1;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  animation: leftToRight 0.5s ease;

  @keyframes leftToRight {
    from {
      opacity: 0;
      transform: translateX(-250px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const DropMenuItem = styled.li`
  height: 30px;
  color: black;
  opacity: 0.6;
  border-bottom: ${(props) => (props.index === props.lastIndex ? "0" : "1px")};
  border-style: solid;
  border-color: transparent transparent rgb(0 0 0 / 0.3) transparent;
  padding: 20px;
  text-transform: capitalize;
  font-size: 20px;
  /* width: 100%; */
`;

const WrapLogin = styled.div`
  position: relative;
`;

const TextLogin = styled.span`
  @media ${devices.mobile} {
    display: none;
  }
`;

const Login = styled.div`
  height: 16px;
  font-size: 14px;
  background-color: #29ae62;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  @media ${devices.mobile} {
    flex: 1;
  }
`;

const MenuLogin = styled.ul`
  display: ${(props) => (props.active ? "block" : "none")};
  list-style: none;
  background-color: white;
  position: absolute;
  top: 50px;
  right: 0;
  min-width: 236px;
  padding: 0;
  z-index: 1;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  cursor: pointer;
  animation: appear 0.5s ease;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: -20px;
    right: 30px;
    border: 10px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

const MenuLoginItem = styled.li`
  height: 30px;
  color: black;
  opacity: 0.6;
  border-bottom: 1px;
  border-style: solid;
  border-color: transparent transparent rgb(0 0 0 / 0.3) transparent;
  padding: 20px;
  text-transform: capitalize;
  text-align: center;
`;

const Header = () => {
  const userData = useSelector((state) => state.user.user);
  const categoryData = useSelector((state) => state.category.categoryList);

  const categoryLast = categoryData.length - 1;

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();

      dispatch(setDataCategory(resData));
    })();
  }, []);

  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleHiddenMenu = () => {
    if (active) {
      setActive((prev) => !prev);
    }
    setActiveMenu((prev) => !prev);
  };

  const handleShowLogin = () => {
    if (userData.username) {
      setActive((prev) => !prev);
      if (activeMenu) {
        setActiveMenu((prev) => !prev);
      }
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    dispatch(logoutRedux(userData));
    toast("You are logged out");
  };

  return (
    <Container paddingContainer={paddingContainer}>
      <Nav widthContainer={widthContainer}>
        <NavMenu>
          <NavIcon onClick={handleHiddenMenu}>
            <IoMenu />
          </NavIcon>

          <DropMenu active={activeMenu}>
            {categoryData.map((item, index) => {
              return (
                <DropMenuItem
                  key={index}
                  index={index}
                  lastIndex={categoryLast}
                  to={item.slug}
                >
                  {item.category}
                </DropMenuItem>
              );
            })}
          </DropMenu>
        </NavMenu>

        <StyleLink to={"/"}>
          <Logo src={logo} />
        </StyleLink>

        {categoryData.map((item) => {
          return (
            <StyleLink to={item.slug} desc={"menu"}>
              {item.category}
            </StyleLink>
          );
        })}

        <WrapLogin>
          <Login onClick={handleShowLogin}>
            <TextLogin>
              {userData.username ? userData.username : "Đăng nhập"}
            </TextLogin>

            <Icon desc={"iconLogin"}>
              <FaUser />
            </Icon>
          </Login>

          {userData.id && (
            <MenuLogin active={active}>
              {userData.role === "admin" && (
                <>
                  <StyleLink role={"dropMenu"} to={"/addslide"}>
                    <MenuLoginItem>Thêm Slide</MenuLoginItem>
                  </StyleLink>

                  <StyleLink role={"dropMenu"} to={"/newgames"}>
                    <MenuLoginItem>Thêm Game</MenuLoginItem>
                  </StyleLink>
                </>
              )}
              <MenuLoginItem onClick={handleLogout}>Logout</MenuLoginItem>
            </MenuLogin>
          )}
        </WrapLogin>
      </Nav>
    </Container>
  );
};

export default Header;
