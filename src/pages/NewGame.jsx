import React, { useEffect } from "react";

const NewGame = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/category`);
      const resData = await res.json();

      console.log(resData);
    })();
  }, []);

  return <div></div>;
};

export default NewGame;
