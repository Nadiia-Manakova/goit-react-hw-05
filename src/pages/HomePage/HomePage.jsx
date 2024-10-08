import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../JS/api";
import { MovieList } from "../../components/MovieList/MovieList";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const fetchedMovies = await getTrendingMovies();
      if (fetchedMovies && fetchedMovies.results) {
        setMovies(fetchedMovies.results);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <main>
      <h1>The most popular Films</h1>
      <MovieList movies={movies} />
    </main>
  );
}
