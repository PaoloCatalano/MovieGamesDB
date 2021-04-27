import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const useFetch = (urlParams) => {
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState({ show: false, msg: "" });
  const [movies, setmovies] = useState([]);

  const fetchMovies = async (url) => {
    setisloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setmovies(data.Search || data);
        seterror({ show: false, msg: "" });
        setisloading(false);
      } else {
        seterror({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isloading, error, movies };
};
export default useFetch;
