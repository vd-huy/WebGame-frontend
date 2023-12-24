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
  width: 100%;
`;

const ListGameSearch = ({ filterData, isNull }) => {
  const dataGame = useSelector((state) => state.game.gameList);

  const [pageCount, setPageCount] = useState(1);

  const handlePageClick = (e) => {
    console.log(e.selected);
  };

  return (
    <Container>
      {filterData[0] ? (
        filterData.map((item, index) => {
          return (
            <GameSearchItem imgGame={item.imgGame} nameGame={item.nameGame} />
          );
        })
      ) : isNull ? (
        dataGame.map((item, index) => {
          return (
            <GameSearchItem imgGame={item.imgGame} nameGame={item.nameGame} />
          );
        })
      ) : (
        <ImgNoSearch src={noResult} />
      )}

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </Container>
  );
};

export default ListGameSearch;
