import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { searchMovies } from "../../JS/api";
import { MovieListItem } from "../MovieListItem/MovieListItem";

import css from "./SearchBar.module.css";

export const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then((data) => {
        setMovies(data.results);
      });
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query) {
      setSearchQuery(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search for movies..." />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};
