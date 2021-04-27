import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setquery] = useState("Django");
  const { isloading, error, movies } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider
      value={{
        isloading,
        error,
        movies,
        query,
        setquery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
