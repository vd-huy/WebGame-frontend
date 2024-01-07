import React from "react";
import styled from "styled-components";
import { RiComputerFill } from "react-icons/ri";

const Container = styled.div``;

const Title = styled.div`
  display: flex;

  align-items: center;
`;

const Icon = styled.span`
  font-size: 20px;
`;

const TitleContent = styled.h3`
  margin: 0 0 0 5px;
  color: red;
`;

const ListConfig = styled.ul``;

const ConfigItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
`;

const Config = () => {
  return (
    <Container>
      <Title>
        <Icon>
          <RiComputerFill />
        </Icon>
        <TitleContent>Cấu hình tối thiểu</TitleContent>
      </Title>

      <ListConfig>
        <ConfigItem>Windows 7 64bit</ConfigItem>
        <ConfigItem>Intel Core i5-6500</ConfigItem>
        <ConfigItem>Bộ nhớ: 8G RAM</ConfigItem>
        <ConfigItem>NVIDIA GeForce GTX 950 2GB</ConfigItem>
        <ConfigItem>Lưu trữ: 20G chỗ trống khả dụng</ConfigItem>
      </ListConfig>
    </Container>
  );
};

export default Config;
