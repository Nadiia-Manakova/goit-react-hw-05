import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../JS/api";
import { MovieListItem } from "../MovieListItem/MovieListItem";

import css from "./MovieList.module.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};
