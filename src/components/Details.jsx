import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { paddingContainer } from "../globalVariable";
import loading from "../assest/loading.svg";
import { fetchGetDetailGame } from "../apis";
import { GrNotes } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { MdOutlineCategory, MdOutlinePushPin } from "react-icons/md";
import {
  IoGameController,
  IoNewspaperOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import { FaPlus, FaLock } from "react-icons/fa";
import { LuFileDown } from "react-icons/lu";
import Config from "./Config";

const Container = styled.div`
  padding: ${(props) => props.paddingContainer};
  display: flex;
  margin-top: 30px;
`;

const Loading = styled.img``;

const Content = styled.div`
  width: 66.66666%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
`;

const InforGame = styled.div`
  width: 90%;
  border: 3px dashed black;
  padding: 10px 5px;
  background-color: rgb(247, 247, 247);
  margin-bottom: 50px;
`;

const InforTitle = styled.h2`
  font-size: 20px;
  color: #ed1c24;
  padding: 10px 0;
`;

const InforContent = styled.p`
  font-size: 20px;
  font-weight: 450;
  text-align: left;
  color: rgba(0, 0, 0, 0.83);
`;

const InforImage = styled.img`
  width: 100%;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const VideoYoutobe = styled.iframe`
  display: block;
  width: 90%;
  height: 400px;
  margin-bottom: 50px;
`;

const Dowload = styled.a`
  height: 50px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 90%;
  display: flex;
  color: white;
  font-size: 20px;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
`;

const PasswordWrap = styled.p`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  font-size: 18px;
  width: 90%;
`;

const Password = styled.p`
  color: red;
  margin-left: 5px;
  font-weight: 500;
`;

const Details = ({ slug }) => {
  const [data, setData] = useState({
    gameType: [],
  });

  useEffect(() => {
    fetchGetDetailGame(slug).then((dataRes) => {
      setData(dataRes);
    });
  }, [slug]);

  console.log(data);

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  console.log(data.linkDowload);

  return (
    <Container paddingContainer={paddingContainer}>
      {data ? (
        <Content>
          <Title>{data.nameGame}</Title>

          <InforGame>
            <InforTitle>Cốt truyện hấp dẫn</InforTitle>

            <InforContent>{data.plotGame}</InforContent>

            <InforImage src={data.gamePlayVideo} />

            <InforTitle>Gameplay hấp dẫn</InforTitle>

            <InforContent>{data.gamePlay}</InforContent>

            <InforContent>
              Hãy tải ngay {data.nameGame} này về và đã được tích hợp thêm DLC
              mới để trải nghiệm xem sao nhé.
            </InforContent>
          </InforGame>

          <InforGame>
            <InforContent>
              <Icon>
                <GrNotes />
              </Icon>
              Tên trò chơi: {data.nameGame}
            </InforContent>

            <InforContent>
              <Icon>
                <TbWorld />
              </Icon>
              Trang chủ: BUY ON STEAM
            </InforContent>

            <InforContent>
              <Icon>
                <MdOutlineCategory />
              </Icon>
              Thể loại: {data.gameType.join(",")}
            </InforContent>

            <InforContent>
              <Icon>
                <IoGameController />
              </Icon>
              Nhà phát triển : {data.developerGame}
            </InforContent>

            <InforContent>
              <Icon>
                <IoNewspaperOutline />
              </Icon>
              Nhà xuất bản : {data.publicBy}
            </InforContent>

            <InforContent>
              <Icon>
                <IoCalendarNumberOutline />
              </Icon>
              Ngày phát hành : {formatDate(data.releaseGame)}
            </InforContent>

            <InforContent>
              <Icon>
                <MdOutlinePushPin />
              </Icon>
              Ngày cập nhật : {formatDate(data.updatedAt)}
            </InforContent>

            <InforContent>
              <Icon>
                <LuFileDown />
              </Icon>
              File tải về : {data.fileSize}
            </InforContent>
          </InforGame>

          <VideoYoutobe
            src={data.videoGame}
            title={data.titleGame}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></VideoYoutobe>

          <Dowload href={data.linkDowload}>
            <Icon>
              <FaPlus />
            </Icon>
            Dowload
          </Dowload>

          <PasswordWrap>
            <Icon>
              <FaLock />
            </Icon>
            Pass mở file tải game và Pass giải nén file game là:
            <Password>hadoantv.com</Password>
          </PasswordWrap>

          <Config />
        </Content>
      ) : (
        <Loading src={loading} />
      )}

      <Search />
    </Container>
  );
};

export default Details;
