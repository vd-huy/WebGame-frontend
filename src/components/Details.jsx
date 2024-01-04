import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { paddingContainer } from "../globalVariable";
import loading from "../assest/loading.svg";
import { fetchGetDetailGame } from "../apis";
import { GrNotes } from "react-icons/gr";

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

const Details = ({ slug }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchGetDetailGame(slug).then((dataRes) => {
      setData(dataRes);
    });
  }, [slug]);

  console.log(data);

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
          </InforGame>
        </Content>
      ) : (
        <Loading src={loading} />
      )}

      <Search />
    </Container>
  );
};

export default Details;
