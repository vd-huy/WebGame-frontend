import axios from "axios";

export const fetchCategoryAPI = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_DOMIN}/category`
  );

  return response.data;
};

export const fetchGameAPI = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_DOMIN}/game/getgame`
  );

  return response.data;
};

export const fetchSignupAPI = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_DOMIN}/user/signup`,
    data
  );

  return response.data;
};

export const fetchNewGameAPI = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_DOMIN}/game/newgame`,
    data
  );

  return response.data;
};

export const fetchLoginAPI = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_DOMIN}/user/login`,
    data
  );

  return response.data;
};

export const fetchNewSlideAPI = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_DOMIN}/slide/newslides`,
    data
  );

  return response.data;
};

export const fetchGetSlideAPI = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_DOMIN}/slide/getslides`
  );

  return response.data;
};

export const fetchUpdateGameAPI = async (data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_DOMIN}/game/updategame`,
    data
  );

  return response.data;
};

export const fetchGetDetailGame = async (slug) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_DOMIN}/game//detail/${slug}`
  );

  return response.data;
};
