import React from "react";

const Footer = () => {
  return (
    <footer>
      <h4>
        Copyright&copy;<span>{new Date().getFullYear()} </span>
        <a href="mailto:paolo12587@gmail.com">Paolo Catalano</a>
        <p>
          <span>
            Thanks to <a href="https://www.johnsmilga.com/">John Smilga</a>
          </span>
          <span>
            {" "}
            | Powered by <a href="https://www.omdbapi.com/">OMDb API</a>
          </span>
        </p>
      </h4>
    </footer>
  );
};

export default Footer;
