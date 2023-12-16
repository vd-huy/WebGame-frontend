import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataCategory } from "./redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const categoryData = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();

      dispatch(setDataCategory(resData));
    })();
  }, []);

  console.log(categoryData);

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
