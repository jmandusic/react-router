import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Posts from "./Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Posts />
    </BrowserRouter>
  );
};

export default App;
