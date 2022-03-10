import React from "react";
import { Link } from "react-router-dom";

import route from "../../constants/route";

const NotFound = () => {
  return (
    <div>
      <p>Not found 404</p>
      <Link to={route.posts}>
        <button>Return to posts</button>
      </Link>
    </div>
  );
};

export default NotFound;
