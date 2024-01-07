import React from "react";
import styled from "styled-components";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { linkFb, linkGithub, paddingContainer } from "../globalVariable";
import { devices } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.footer`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding: ${(props) => props.paddingContainer};
  padding-top: 64px;
  padding-bottom: 64px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const Rules = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media ${devices.mobile} {
    justify-content: start;
    gap: 20px;
    padding-bottom: 20px;
  }
`;
const RulesItem = styled.div`
  color: #777777;
`;

const Colorlib = styled.h4`
  flex: 1;
  color: #3e64ff;
  font-size: 30px;
  text-align: center;

  @media ${devices.mobile} {
    padding-bottom: 20px;
  }
`;

const Contact = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;

  @media ${devices.mobile} {
    justify-content: start;
    gap: 20px;
    padding-bottom: 20px;
  }
`;

const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  color: black;

  & :hover {
    color: ${(props) => props.color};
  }

  @media ${devices.mobile} {
    gap: 20px;
  }
`;

const Bottom = styled.div`
  padding-top: 50px;
  text-align: center;
  color: #777777;
`;

const Footer = () => {
  return (
    <Container paddingContainer={paddingContainer}>
      <Top>
        <Rules>
          <RulesItem>Terms</RulesItem>
          <RulesItem>About</RulesItem>
          <RulesItem>Privacy</RulesItem>
          <RulesItem>Contact</RulesItem>
        </Rules>

        <Colorlib>Colorlib</Colorlib>

        <Contact>
          <Icon href={linkFb} color="#0866ff">
            <CiFacebook />
          </Icon>

          <Icon color="#007bff">
            <CiTwitter />
          </Icon>
          <Icon href={linkGithub} color="#744c4c">
            <IoLogoGithub />
          </Icon>

          <Icon color="#fe0304">
            <CiYoutube />
          </Icon>
        </Contact>
      </Top>

      <Bottom>© Bản quyền thuộc về Huy Dev</Bottom>
    </Container>
  );
};

export default Footer;
