import React from "react";
import Footer from "./Footer";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isloading, error, movies: movie } = useFetch(`&i=${id}`);
  if (isloading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movie
        </Link>
      </div>
    );
  }
  console.log(movie);

  return (
    <section className="single-movie">
      <p></p>
      <h1>{movie.Title}</h1>
      <div
        style={{
          background: `url(${movie.Poster}) no-repeat`,
          backgroundSize: "contain",
          height: "100vw",
          position: "relative",
        }}
      >
        <div
          className="textBcg"
          style={{
            background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            position: "absolute",
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--font-secondary)",
          }}
        >
          <p style={{ color: "#ffffff", margin: 0 }}>{movie.Plot}</p>
        </div>
      </div>
      {/* <img src={movie.Poster} alt={movie.Title} /> */}
      <div className="single-movie-info">
        <p style={{ textTransform: "capitalize", marginTop: 0 }}>
          {movie.Runtime} | {movie.Type} | {movie.Genre}
        </p>
        {movie.Actors && movie.Actors !== "N/A" && (
          <p>
            <b>Actors: </b>
            {movie.Actors}
          </p>
        )}
        {movie.Director && movie.Director !== "N/A" && (
          <p>
            <b>Director: </b>
            {movie.Director}
          </p>
        )}
        {movie.Writer && movie.Writer !== "N/A" && (
          <p>
            <b>Writer: </b>
            {movie.Writer}
          </p>
        )}
        {movie.Production && movie.Production !== "N/A" && (
          <p>
            <b>Production: </b>
            {movie.Production}
          </p>
        )}
        {movie.Released && movie.Released !== "N/A" && (
          <p>
            <b>Released on: </b>
            {movie.Released}
          </p>
        )}
        {movie.Country && movie.Country !== "N/A" && (
          <p>
            <b>Country: </b>
            {movie.Country}
          </p>
        )}
        {movie.Language && movie.Language !== "N/A" && (
          <p>
            <b>Language: </b>
            {movie.Language}
          </p>
        )}
        {movie.Awards && movie.Awards !== "N/A" && (
          <p>
            <b>Awards: </b>
            {movie.Awards}
          </p>
        )}
        {movie.BoxOffice && movie.BoxOffice !== "N/A" && (
          <p>
            <b>Box Office: </b>
            {movie.BoxOffice}
          </p>
        )}
        <Link to="/" className="btn">
          back to movie
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
