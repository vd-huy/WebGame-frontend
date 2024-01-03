import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewGame from "./pages/NewGame";
import AddSlide from "./pages/AddSlide";
import FindGame from "./pages/FindGame";
import Admin from "./pages/Admin";
import UpdateGame from "./pages/UpdateGame";
import GameDetail from "./pages/GameDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/newgames" element={<NewGame />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/update/:id" element={<UpdateGame />} />
      <Route path="/addslide" element={<AddSlide />} />
      <Route path="/search/" element={<FindGame />} />
      <Route path="/game/:slug" element={<GameDetail />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
