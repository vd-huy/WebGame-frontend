import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDataCategory } from "../redux/categorySlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LabelInput = styled.label``;

const NameGame = styled.input`
  width: 250px;
  height: 30px;

  font-size: 14px;
`;

const ImageGame = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const PlotGame = styled.textarea`
  width: 500px;
  height: 120px;
  resize: none;
`;

const GamePlay = styled.textarea`
  width: 500px;
  height: 120px;
  resize: none;
`;

const GamePlayVideo = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const DeveloperGame = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const PublicBy = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const ReleaseGame = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const FileSize = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const VideoGame = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
`;

const TypeGame = styled.input``;

const ButtonSubmit = styled.button`
  height: 30px;
`;

const NewGame = () => {
  const dispatch = useDispatch();

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
  });

  const [typeGame, setTypeGame] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();

      dispatch(setDataCategory(resData));
    })();
  }, []);

  const handleOnChangeCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setTypeGame(() => {
        return [...typeGame, value];
      });
    } else {
      setTypeGame(() => {
        return typeGame.filter((item) => item !== value);
      });
    }

    setDataSend((prev) => {
      return {
        ...prev,
        gameType: typeGame,
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDataSend((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    console.log(dataSend);
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
    } = dataSend;

    if (
      developerGame &&
      fileSize &&
      gamePlay &&
      gamePlayVideo &&
      gameType &&
      imgGame &&
      nameGame &&
      plotGame &&
      publicBy &&
      releaseGame &&
      videoGame
    ) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/game/newgame`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataSend),
        }
      );
    }
  };

  return (
    <Container>
      <Title>Thêm game mới</Title>
      <FormAddGame onSubmit={handleSubmit}>
        <WrapInput>
          <LabelInput>Nhập tên Game : </LabelInput>
          <NameGame
            onChange={handleOnChange}
            name="nameGame"
            value={dataSend.nameGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Nhập ảnh Baner : </LabelInput>
          <ImageGame
            onChange={handleOnChange}
            name="imgGame"
            value={dataSend.imgGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Cốt truyện : </LabelInput>
          <PlotGame
            onChange={handleOnChange}
            name="plotGame"
            value={dataSend.plotGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Game Play : </LabelInput>
          <GamePlay
            onChange={handleOnChange}
            name="gamePlay"
            value={dataSend.gamePlay}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Video Game Play : </LabelInput>
          <GamePlayVideo
            onChange={handleOnChange}
            name="gamePlayVideo"
            value={dataSend.gamePlayVideo}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput>Nhà phát triển : </LabelInput>
          <DeveloperGame
            onChange={handleOnChange}
            name="developerGame"
            value={dataSend.developerGame}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Nhà xuất bản : </LabelInput>
          <PublicBy
            onChange={handleOnChange}
            name="publicBy"
            value={dataSend.publicBy}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Thể Loại : </LabelInput>
          {dataCategory.map((item) => {
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
          <FileSize
            onChange={handleOnChange}
            name="fileSize"
            value={dataSend.fileSize}
          />
        </WrapInput>

        <WrapInput>
          <LabelInput> Video Game :</LabelInput>
          <VideoGame
            onChange={handleOnChange}
            name="videoGame"
            value={dataSend.videoGame}
          />
        </WrapInput>

        <ButtonSubmit> Thêm game </ButtonSubmit>
      </FormAddGame>
    </Container>
  );
};

export default NewGame;
