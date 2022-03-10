import React, { useEffect } from "react";
import { getPosts } from "../services/data";

const App = () => {
  useEffect(() => {
    getPosts().then((res) => console.log(res));
  }, []);

  return <div>App</div>;
};

export default App;
