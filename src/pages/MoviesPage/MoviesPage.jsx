import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../JS/api";
import { MovieList } from "../../components/MovieList/MovieList";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(movieName);
        setMovies(data.results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [movieName]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar value={movieName} onChange={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};
