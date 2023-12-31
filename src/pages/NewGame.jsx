import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import toast from "react-hot-toast";
import { fetchNewGameAPI } from "../apis";
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

const NewGame = () => {
  const dataCategory = useSelector((state) => state.category.categoryList);

  const [dataSend, setDataSend] = useState({
    nameGame: "",
    imgGame: "",
    plotGame: "",
    gamePlay: "",
    gamePlayVideo: "",
    developerGame: "",
    publicBy: "",
    gameType: [],
    releaseGame: "",
    fileSize: "",
    videoGame: "",
    titleVideo: "",
    linkDowload: "",
  });

  const handleOnChangeCheckbox = (e) => {
    const { value, checked } = e.target;

    const { gameType } = dataSend;

    if (checked) {
      setDataSend({
        ...dataSend,
        gameType: [...gameType, value],
      });
    } else {
      setDataSend({
        ...dataSend,
        gameType: gameType.filter((item) => item !== value),
      });
    }
  };

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
      gameType,
      imgGame,
      nameGame,
      plotGame,
      publicBy,
      releaseGame,
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
      releaseGame &&
      videoGame &&
      titleVideo
    ) {
      fetchNewGameAPI(dataSend).then((data) => {
        if (data.alert) {
          toast(data.message);

          setDataSend({
            nameGame: "",
            imgGame: "",
            plotGame: "",
            gamePlay: "",
            gamePlayVideo: "",
            developerGame: "",
            publicBy: "",
            gameType: [],
            releaseGame: "",
            fileSize: "",
            videoGame: "",
            titleVideo: "",
            linkDowload: "",
          });
          window.location.reload(false);
        } else {
          toast(data.message);
        }
      });
    }
  };

  return (
    <Container>
      <Title>Thêm game mới</Title>
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
          <LabelInput> Thể Loại : </LabelInput>
          {dataCategory.map((item, index) => {
            return (
              <>
                <TypeGame
                  type="checkbox"
                  id={item.category}
                  name="TypeGame"
                  value={item.category}
                  onChange={handleOnChangeCheckbox}
                />
                <LabelInput for={item.category}>{item.category}</LabelInput>
              </>
            );
          })}

          {/* <TypeGame
            type="checkbox"
            id="gameSinhTon"
            name="TypeGame"
            checked={isChecked[0]}
            value="Game sinh tồn"
            onChange={() => handleOnChangeCheckbox(0)}
          />
          <LabelInput for="gameSinhTon">Game sinh tồn</LabelInput>

          <TypeGame
            type="checkbox"
            id="gameSinhTon"
            name="TypeGame"
            checked={isChecked[1]}
            value="Game sinh tồn"
            onChange={() => handleOnChangeCheckbox(1)}
          /> */}
          {/* <LabelInput for="gameSinhTon">Game sinh tồn</LabelInput> */}
        </WrapInput>

        <WrapInput>
          <LabelInput> Ngày phát hành : </LabelInput>
          <ReleaseGame
            type="date"
            onChange={handleOnChange}
            name="releaseGame"
            value={dataSend.releaseGame}
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

        <ButtonSubmit> Thêm game </ButtonSubmit>
      </FormAddGame>
    </Container>
  );
};

export default NewGame;
