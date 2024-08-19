import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { searchMovies } from "../../JS/api";
import { Navigation } from "../../components/Navigation/Navigation";
import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import css from "./MoviesPage.module.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const MoviesPage = () => {
  return <SearchBar />;
};
