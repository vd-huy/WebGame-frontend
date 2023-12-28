import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../responsive";

const Container = styled.div`
  width: 33.33333%;
  border: 1px #d9534f solid;
  border-radius: 5px;
  overflow: hidden;
  max-height: 353px;
  min-height: 353px;

  @media ${devices.tabletAndMobile} {
    width: 90%;
    margin-top: 20px;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: white;
  background-color: #d9534f;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  background-image: -webkit-linear-gradient(0deg, #f3786f 8%, #f44336 89%);
`;

const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media ${devices.tablet} {
    padding: 0 15px;
  }
`;

const LableInput = styled.label`
  padding: 30px 0 10px 0;
`;

const Input = styled.input`
  height: 35px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
`;

const Select = styled.select`
  height: 35px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
`;

const Option = styled.option``;

const ButtonSubmit = styled.button`
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

  @media ${devices.tabletAndMobile} {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Search = () => {
  const navigate = useNavigate();

  const dataCategory = useSelector((state) => state.category.categoryList);

  const [dataFilter, setDataFilter] = useState({
    nameGame: "",
    filterCategory: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDataFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSearch = (dataFilter) => {
    navigate(
      `/search/?nameGame=${dataFilter.nameGame}&filterCategory=${dataFilter.filterCategory}`
    );
  };

  return (
    <Container>
      <Title>Bộ lọc game </Title>

      <FormSearch>
        <LableInput for="nameGame">Tìm kiếm</LableInput>
        <Input
          placeholder="Tên game ..."
          id="nameGame"
          name="nameGame"
          value={dataFilter.name}
          onChange={handleOnChange}
        />

        <LableInput for="filterCategory">Thể loại</LableInput>
        <Select name="filterCategory" onChange={handleOnChange}>
          <Option value="">Tất cả thể loại</Option>
          {dataCategory.map((item) => {
            return <Option value={item.gameType}>{item.category}</Option>;
          })}
        </Select>

        <ButtonSubmit
          type="submit"
          onClick={() => {
            handleSearch(dataFilter);
          }}
        >
          Tìm kiếm
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
};

export default Search;
