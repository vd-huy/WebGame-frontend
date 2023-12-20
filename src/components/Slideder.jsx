import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setDataSlide } from "../redux/slideSlice";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 calc((100vw - 1140px) / 2);
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.span`
  position: absolute;
  font-size: 30px;
  color: white;
  top: 50%;
  left: ${(props) => props.desc === "left" && "30px"};
  right: ${(props) => props.desc === "right" && "30px"};
  transform: translateX(-50%, -50%);
  cursor: pointer;
  transition: all 0.4s ease-in;
  opacity: 0;
  transform: translateX(
    ${(props) => (props.desc === "left" ? "10px" : "-10px")}
  );
`;

const Slide = styled.div`
  width: 66.66666%;
  width: 100vw;
  position: relative;
  background-color: #eff0f3;
  max-width: 676px;

  &:hover ${Icon} {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImgSlide = styled.img`
  max-width: 616px;
  height: auto;
  display: ${(props) => (props.index === props.indexSlide ? "block" : "none")};
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  animation: ${(props) => appearAnimate(props.action)} 0.4s ease-in;
`;

const appearAnimate = (action) => keyframes`
from {
      opacity: 0;
      transform: translateX(${action ? "-10%" : "10%"});
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }`;

const WrapDot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
`;

const DotSlice = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  background-color: #c3c2c3;
`;

const Search = styled.div`
  width: 33.33333%;
  background-color: red;
`;

const Slideder = () => {
  const dataSlide = useSelector((state) => state.slide.slideList);

  const dispatch = useDispatch();

  const [indexSlide, setIndexSlide] = useState(0);
  const [action, setAction] = useState(false);

  const SlideLength = dataSlide.length - 1;

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

  const handleReduceSlice = () => {
    setIndexSlide(indexSlide > 0 ? indexSlide - 1 : SlideLength);
    setAction((prev) => {
      if (prev) {
        return !prev;
      } else {
        return prev;
      }
    });
  };

  const handleIncreaseSlice = () => {
    setIndexSlide(indexSlide < SlideLength ? indexSlide + 1 : 0);
    setAction((prev) => {
      if (prev) {
        return prev;
      } else {
        return !prev;
      }
    });
  };

  return (
    <Container>
      <Slide>
        <Icon desc={"left"} onClick={handleReduceSlice}>
          <GrFormPrevious />
        </Icon>

        {dataSlide.map((item, index) => {
          return (
            <ImgSlide
              src={item.imgSlide}
              alt=""
              key={index}
              index={index}
              indexSlide={indexSlide}
              action={action}
            />
          );
        })}

        <WrapDot>
          {dataSlide.map((item, index) => {
            return <DotSlice></DotSlice>;
          })}
        </WrapDot>

        <Icon desc={"right"} onClick={handleIncreaseSlice}>
          <GrFormNext />
        </Icon>
      </Slide>

      <Search></Search>
    </Container>
  );
};

export default Slideder;
