import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Children from "./DEMO/Children";

// import UseMemo from "./DEMO/UseMemo";
// import UseRef1 from "./DEMO/UseRef/Demo1";
// import UseRef2 from "./DEMO/UseRef/Demo2";

ReactDOM.render(
  <React.StrictMode>
    <Children />
  </React.StrictMode>,
  document.getElementById("root")
);
