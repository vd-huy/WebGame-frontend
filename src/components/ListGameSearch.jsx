import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GameSearchItem from "./GameSearchItem";
import { useSelector } from "react-redux";
import noResult from "../assest/noResult.png";
import ReactPaginate from "react-paginate";

const Container = styled.div`
  width: 66.66666%;
`;

const ImgNoSearch = styled.img`
  width: 90%;
  border: 1px solid black;
`;

const ListGameSearch = ({ filterData, isNull }) => {
  const dataGame = useSelector((state) => state.game.gameList);

  const [pageCount, setPageCount] = useState(1);

  const viewGameDisplay = 4;

  const [startDisplay, setStartDisplay] = useState(0);
  const [endDisplay, setEndDisplay] = useState(viewGameDisplay);

  useEffect(() => {
    // lam tron len
    setPageCount(Math.ceil(filterData.length / viewGameDisplay));
  }, [filterData]);

  const handlePageClick = (e) => {
    let selectedPage = e.selected;
    console.log(selectedPage);

    setStartDisplay(selectedPage * viewGameDisplay);
    setEndDisplay((selectedPage + 1) * viewGameDisplay);
  };

  return (
    <Container>
      {filterData[0] ? (
        filterData.slice(startDisplay, endDisplay).map((item, index) => {
          return (
            <GameSearchItem
              imgGame={item.imgGame}
              nameGame={item.nameGame}
              slug={item.slug}
            />
          );
        })
      ) : isNull ? (
        dataGame.map((item, index) => {
          return (
            <GameSearchItem
              imgGame={item.imgGame}
              nameGame={item.nameGame}
              slug={item.slug}
            />
          );
        })
      ) : (
        <ImgNoSearch src={noResult} />
      )}

      {filterData.length > 5 && (
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </Container>
  );
};

export default ListGameSearch;
