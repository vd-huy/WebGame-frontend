import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../responsive";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchUpdateGameAPI } from "../apis";

const Container = styled.div`
  margin: auto;
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
  width: 70%;
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
  width: 250px;
  height: 30px;

  font-size: 14px;
`;

const InputArea = styled.textarea`
  width: 500px;
  height: 120px;
  resize: none;
`;

const ReleaseGame = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const TypeGame = styled.input``;

const ButtonSubmit = styled.button`
  height: 30px;
`;

const UpdateGame = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const data = useSelector((state) => state.game.gameUpdate);

  const [dataSend, setDataSend] = useState({
    _id: id,
    nameGame: data.nameGame,
    imgGame: data.imgGame,
    plotGame: data.plotGame,
    gamePlay: data.gamePlay,
    gamePlayVideo: data.gamePlayVideo,
    developerGame: data.developerGame,
    publicBy: data.publicBy,
    fileSize: data.fileSize,
    videoGame: data.videoGame,
    titleVideo: data.titleVideo,
    linkDowload: data.linkDowload,
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

    const {
      developerGame,
      fileSize,
      gamePlay,
      gamePlayVideo,
      imgGame,
      nameGame,
      plotGame,
      publicBy,
      videoGame,
      titleVideo,
    } = dataSend;

    if (
      developerGame &&
      fileSize &&
      gamePlay &&
      gamePlayVideo &&
      imgGame &&
      nameGame &&
      plotGame &&
      publicBy &&
      videoGame &&
      titleVideo
    ) {
      fetchUpdateGameAPI(dataSend).then((data) => {
        if (data.alert) {
          toast(data.message);
          navigate("/admin");
        }
      });
    }
  };

  return (
    <Container>
      <Title>Cập nhật game</Title>
      <FormAddGame onSubmit={handleSubmit}>
        <WrapInput>
          <LabelInput>Nhập tên Game : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="nameGame"
            value={dataSend.nameGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Nhập ảnh Baner : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="imgGame"
            value={dataSend.imgGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Cốt truyện : </LabelInput>
          <InputArea
            onChange={handleOnChange}
            name="plotGame"
            value={dataSend.plotGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Game Play : </LabelInput>
          <InputArea
            onChange={handleOnChange}
            name="gamePlay"
            value={dataSend.gamePlay}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Video Game Play : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="gamePlayVideo"
            value={dataSend.gamePlayVideo}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Nhà phát triển : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="developerGame"
            value={dataSend.developerGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Nhà xuất bản : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="publicBy"
            value={dataSend.publicBy}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>File tải về : </LabelInput>
          <Input
            onChange={handleOnChange}
            name="fileSize"
            value={dataSend.fileSize}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Video Game :</LabelInput>
          <Input
            onChange={handleOnChange}
            name="videoGame"
            value={dataSend.videoGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Title Video :</LabelInput>
          <Input
            onChange={handleOnChange}
            name="titleVideo"
            value={dataSend.titleVideo}
          />
        </WrapInput>
        <WrapInput>
          <LabelInput> Link dowload :</LabelInput>
          <Input
            onChange={handleOnChange}
            name="linkDowload"
            value={dataSend.linkDowload}
          />
        </WrapInput>

        <ButtonSubmit> Cập nhật </ButtonSubmit>
      </FormAddGame>
    </Container>
  );
};

export default UpdateGame;
