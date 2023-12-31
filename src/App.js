import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataCategory } from "./redux/categorySlice";
import { useDispatch } from "react-redux";
import {
  setDataGame,
  sortByDateCreateAt,
  sortByDateUpdateAt,
} from "./redux/gameSlice";
import { fetchCategoryAPI, fetchGameAPI, fetchGetSlideAPI } from "./apis";
import { setDataSlide } from "./redux/slideSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategoryAPI().then((resData) => {
      dispatch(setDataCategory(resData));
    });
  }, []);

  useEffect(() => {
    fetchGameAPI().then((resData) => {
      dispatch(setDataGame(resData));
      dispatch(sortByDateCreateAt(resData));
      dispatch(sortByDateUpdateAt(resData));
    });
  }, []);

  useEffect(() => {
    fetchGetSlideAPI().then((dataSlide) => {
      dispatch(setDataSlide(dataSlide));
    });
  });

  return (
    <>
      <Toaster />
      <div className="App">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
