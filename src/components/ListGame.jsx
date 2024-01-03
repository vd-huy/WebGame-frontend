import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { paddingContainer, widthContainer } from "../globalVariable";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { setDateGameUpdate } from "../redux/gameSlice";

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 70%;
  height: 70%;
  border: 1px solid black;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Row = styled.tr`
  border: 1px solid black;
`;

const Column = styled.td`
  text-align: center;
  border: 1px solid black;
`;

const Icon = styled.span`
  padding: 10px;
  cursor: pointer;
`;

const ListGame = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dataGame = useSelector((state) => state.game.gameList);

  const [pageCount, setPageCount] = useState(1);

  const viewGameDisplay = 10;

  const [startDisplay, setStartDisplay] = useState(0);
  const [endDisplay, setEndDisplay] = useState(viewGameDisplay);

  useEffect(() => {
    // lam tron len
    setPageCount(Math.ceil(dataGame.length / viewGameDisplay));
  }, [dataGame]);

  const handlePageClick = (e) => {
    let selectedPage = e.selected;
    console.log(selectedPage);

    setStartDisplay(selectedPage * viewGameDisplay);
    setEndDisplay((selectedPage + 1) * viewGameDisplay);
  };

  const handleClick = (desc, id) => {
    switch (desc) {
      case "update":
        navigate(`/update/${id}`);
        dispatch(
          setDateGameUpdate(dataGame.filter((item) => item._id === id).shift())
        );
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Title>Danh Sách Game</Title>
      <Table paddingContainer={paddingContainer} width={widthContainer}>
        <Row>
          <Column>Id</Column>
          <Column>Tên Game</Column>
          <Column>Thể Loại</Column>
          <Column>Chức Năng</Column>
        </Row>

        {dataGame.slice(startDisplay, endDisplay).map((item, index) => {
          return (
            <Row>
              <Column>{index + 1 + startDisplay}</Column>
              <Column>{item.nameGame}</Column>
              <Column>{item.gameType.map((i) => i + ",")}</Column>
              <Column>
                <Icon
                  onClick={() => {
                    handleClick("update", item._id);
                  }}
                >
                  <IoIosSettings />
                </Icon>
                <Icon
                  onClick={() => {
                    handleClick("delete");
                  }}
                >
                  <MdDelete />
                </Icon>
              </Column>
            </Row>
          );
        })}
      </Table>

      {dataGame.length > 10 && (
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

export default ListGame;
