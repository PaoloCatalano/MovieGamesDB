import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import Footer from "./Footer";
import logo from "../src/MovieGames.png";
const Home = () => {
  return (
    <main>
      <div className="logo">
        <img src={logo} alt="Movie Games DataBase" />
      </div>
      <Form />
      <Movies />
      <Footer />
    </main>
  );
};

export default Home;
