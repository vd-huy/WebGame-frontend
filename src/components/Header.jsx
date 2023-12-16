import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assest/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";
import { setDataCategory } from "../redux/categorySlice";

const Container = styled.div`
  height: 92px;
  background-color: #127cc3;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 90px;
  height: 90px;
  border-radius: 50%;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;

  padding: ${(props) => (props.role === "dropMenu" ? "0" : "8px 16px")};
  width: 90px;
  text-align: center;
`;

const Category = styled.div`
  position: relative;
  width: 90px;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: transparent;
  }
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropMenu = styled.ul`
  display: none;
  list-style: none;
  background-color: white;
  position: absolute;
  top: 50px;
  right: 0;
  min-width: 236px;
  padding: 0;
  z-index: 1;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  ::before {
    content: "";
    position: absolute;
    top: -20px;
    right: 30px;
    border: 10px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

  ${Category}:hover & {
    display: block;
  }
`;

const DropMenuItem = styled.li`
  height: 30px;
  color: black;
  opacity: 0.6;
  border-bottom: 1px;
  border-style: solid;
  border-color: transparent transparent rgb(0 0 0 / 0.3) transparent;
  padding: 20px;
  text-transform: capitalize;
  /* width: 100%; */
`;

const WrapLogin = styled.div`
  position: relative;
`;

const Login = styled.div`
  min-width: 82px;
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

  console.log(categoryData);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();
      console.log(resData);

      dispatch(setDataCategory(resData));
    })();
  }, []);

  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const handleShowLogin = () => {
    if (userData.username) {
      setActive((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    dispatch(logoutRedux(userData));
    toast("You are logged out");
  };

  return (
    <Container>
      <Nav>
        <Logo src={logo} />

        <StyleLink to={""}>Home</StyleLink>

        <StyleLink to={"blog"}>Blog</StyleLink>

        <Category>
          Thể loại
          <Icon>
            <FaAngleDown />
          </Icon>
          <DropMenu>
            {categoryData.map((category) => {
              return <DropMenuItem>{category.category}</DropMenuItem>;
            })}
          </DropMenu>
        </Category>

        <WrapLogin>
          <Login onClick={handleShowLogin}>
            {userData.username ? userData.username : "Đăng nhập"}
          </Login>

          {userData.id && (
            <MenuLogin active={active}>
              {userData.role === "admin" && (
                <StyleLink role={"dropMenu"} to={"/newgames"}>
                  <MenuLoginItem>Thêm Game</MenuLoginItem>
                </StyleLink>
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
