import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isloading } = useGlobalContext();
  if (isloading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <Link
            to={`/movies/${movie.imdbID}`}
            key={movie.imdbID}
            className="movie"
          >
            <article>
              <img
                src={movie.Poster === "N/A" ? url : movie.Poster}
                alt={movie.Title}
              />
              <div className="movie-info">
                <h4 className="title">{movie.Title}</h4>
                <p>
                  <span>{movie.Year}</span> <span>({movie.Type})</span>
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
