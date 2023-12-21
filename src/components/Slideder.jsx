import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setDataSlide } from "../redux/slideSlice";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Search from "./Search";
import { devices } from "../responsive";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 calc((100vw - 1140px) / 2);
  display: flex;
  justify-content: space-between;

  @media ${devices.tabletAndMobile} {
    flex-direction: column;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
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

  @media ${devices.tabletAndMobile} {
    display: block;
  }
`;

const Slide = styled.div`
  width: 66.66666%;
  position: relative;
  background-color: #eff0f3;
  max-width: 676px;

  &:hover ${Icon} {
    opacity: 1;
    transform: translateX(0);
  }

  @media ${devices.tabletAndMobile} {
    width: 90%;
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

  @media ${devices.mobile} {
    width: 90%;
    margin: auto;
  }
`;

const appearAnimate = (action) => keyframes`
from {
      opacity: 0.6;
      transform: translateX(${action ? "-10%" : "10%"});
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }`;

const WrapDot = styled.div`
  display: flex;
  margin: 0 30px;
  position: absolute;
  bottom: 15px;
  right: 20%;
  left: 20%;
`;

const DotSlice = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.index === props.indexSlide ? "#ffffff" : "#c3c2c3"};

  cursor: pointer;
`;

const SearchContainer = styled.div`
  width: 33.33333%;
  border: 1px #d9534f solid;
  border-radius: 5px;
  overflow: hidden;

  @media ${devices.tabletAndMobile} {
    width: 90%;
    margin-top: 20px;
  }
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

  const handleSelectSilde = (index) => {
    setIndexSlide(index);
    if (index > indexSlide) {
      setAction(true);
    } else {
      setAction(false);
    }
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
            return (
              <DotSlice
                index={index}
                indexSlide={indexSlide}
                onClick={() => handleSelectSilde(index)}
              ></DotSlice>
            );
          })}
        </WrapDot>

        <Icon desc={"right"} onClick={handleIncreaseSlice}>
          <GrFormNext />
        </Icon>
      </Slide>

      <SearchContainer>
        <Search />
      </SearchContainer>
    </Container>
  );
};

export default Slideder;
