import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDataSlide } from "../redux/slideSlice";

const Container = styled.div``;

const ImgSlide = styled.img`
  width: 100vw;
  max-width: 616px;
  height: auto;
`;

const Icon = styled.span``;

const Slideder = () => {
  const dataSlide = useSelector((state) => state.slide.slideList);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/slide/getslides`
      );
      const resData = await res.json();
      console.log(resData);

      dispatch(setDataSlide(resData));
    })();
  }, []);

  return (
    <Container>
      <Icon></Icon>

      {dataSlide.map((item, index) => {
        return <ImgSlide src={item.imgSlide} alt="" />;
      })}

      <Icon></Icon>
    </Container>
  );
};

export default Slideder;
