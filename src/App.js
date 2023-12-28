import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataCategory } from "./redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataGame,
  sortByDateCreateAt,
  sortByDateUpdateAt,
} from "./redux/gameSlice";

function App() {
  const categoryData = useSelector((state) => state.category);
  const gameyData = useSelector((state) => state.game.gameList);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();

      dispatch(setDataCategory(resData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/game/getgame`
      );
      const resData = await res.json();

      dispatch(setDataGame(resData));
      dispatch(sortByDateCreateAt(resData));
      dispatch(sortByDateUpdateAt(resData));
    })();
  }, []);

  console.log(gameyData);

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
