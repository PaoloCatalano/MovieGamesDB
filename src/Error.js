import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <center className="page-error">
      <div className="error">404 HORROR</div>
      <p></p>
      <span>
        <Link to="/" className="btn">
          Back home
        </Link>
      </span>
    </center>
  );
};

export default Error;
