import React, { useState } from "react";
import styled from "styled-components";
import imgLogin from "../assest/imgLogin.png";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
import { devices } from "../responsive";
import { fetchLoginAPI } from "../apis";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.mobile} {
    width: 100vw;
  }
`;

const FormLogin = styled.div`
  background-color: white;
  width: 735px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px;
  border-radius: 5px;

  @media ${devices.mobile} {
    position: relative;
    width: 90vw;
    padding: 100px 0;
  }
`;

const Image = styled.img`
  @media ${devices.mobile} {
    display: none;
  }
`;

const Account = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
`;

const WrapInput = styled.div`
  width: 290px;
  height: 50px;
  border-radius: 25px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Email = styled.input`
  height: 100%;
  flex: 4;
  padding: 0;
  border: 1px;
  outline: none;
  background-color: #e6e6e6;

  &::placeholder {
    color: grey;
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const Password = styled.input`
  height: 100%;
  flex: 4;
  padding: 0;
  border: 1px;
  outline: none;
  background-color: #e6e6e6;

  &::placeholder {
    color: grey;
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const Icon = styled.span`
  flex: 1;
  color: gray;
  text-align: center;
`;

const ButtonLogin = styled.button`
  height: 50px;
  width: 270px;
  border: 1px;
  background-color: #57b846;
  border-radius: 25px;
  color: white;
  font-weight: 700;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;

const CreateAccount = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  text-transform: capitalize;

  &:hover {
    color: #57b846;
  }

  @media ${devices.mobile} {
    position: absolute;
    bottom: 10px;
  }
`;

const Login = () => {
  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [typePassword, setTypePassword] = useState("password");
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShow((prev) => !prev);

    if (show) {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;
    if (email && password) {
      fetchLoginAPI(data).then((dataRes) => {
        toast(dataRes.message);

        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
    }
  };

  return (
    <Container>
      <FormLogin>
        <Image src={imgLogin} />
        <Account onSubmit={handleSubmit}>
          <Title>Member Login</Title>

          <WrapInput>
            <Icon>
              <HiMail />
            </Icon>

            <Email
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleOnChange}
            />

            <Icon></Icon>
          </WrapInput>

          <WrapInput>
            <Icon>
              <IoMdLock />
            </Icon>
            <Password
              placeholder="Password"
              type={typePassword}
              name="password"
              onChange={handleOnChange}
            />

            {show ? (
              <Icon onClick={handleShowPassword}>
                <BiShow />
              </Icon>
            ) : (
              <Icon onClick={handleShowPassword}>
                <BiHide />
              </Icon>
            )}
          </WrapInput>

          <ButtonLogin type="submit">Login</ButtonLogin>

          <CreateAccount to={"/signup"}>Create your Account </CreateAccount>
        </Account>
      </FormLogin>
    </Container>
  );
};

export default Login;
