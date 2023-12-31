import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import toast from "react-hot-toast";
import { fetchNewSlideAPI } from "../apis";
import { devices } from "../responsive";

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobile} {
    width: 100%;
  }
`;

const Title = styled.label`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const FormAddGame = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 1px solid black;
  padding: 20px;
  @media ${devices.mobile} {
    width: 100%;
  }
`;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LabelInput = styled.label``;

const Input = styled.input`
  width: 80%;
  height: 30px;
  font-size: 14px;
`;

const ButtonSubmit = styled.button`
  height: 30px;
`;
const AddSlide = () => {
  const [dataSend, setDataSend] = useState({
    imgSlide: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDataSend((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { imgSlide } = dataSend;

    if (imgSlide) {
      fetchNewSlideAPI(dataSend).then((dataRes) => {
        if (dataRes.alert) {
          toast(dataRes.message);
          setDataSend({ imgSlide: "" });
        }
      });
    }
  };

  return (
    <Container>
      <Title>Thêm Slide</Title>
      <FormAddGame onSubmit={handleSubmit}>
        <WrapInput>
          <LabelInput>Nhập link slide : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="imgSlide"
            value={dataSend.imgSlide}
          />
        </WrapInput>

        <ButtonSubmit> Thêm slide </ButtonSubmit>
      </FormAddGame>
    </Container>
  );
};

export default AddSlide;
