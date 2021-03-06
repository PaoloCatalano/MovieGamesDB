import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setquery, error } = useGlobalContext();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>search movie or game</h1>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
