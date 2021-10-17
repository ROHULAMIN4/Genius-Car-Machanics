import React from "react";
import { Link } from "react-router-dom";
import noFound from "../../images/404/404.png";

const NotFound = () => {
  return (
    <div>
      <img src={noFound} alt="" />
      <p></p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
