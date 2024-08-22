import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../JS/api";
import { MovieListItem } from "../MovieListItem/MovieListItem";

import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
  const IMAGE_SIZE = "w500";
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => {
        const posterUrl = movie.poster_path
          ? `${BASE_IMAGE_URL}${IMAGE_SIZE}${movie.poster_path}`
          : "/images/blank-cover.jpg";
        return (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieListItem
                name={movie.title || movie.name}
                image={posterUrl}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
