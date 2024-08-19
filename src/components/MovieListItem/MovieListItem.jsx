import React from "react";
import { Link } from "react-router-dom";
import css from "./MovieListItem.module.css";

export const MovieListItem = ({ id, title }) => {
  const movieTitleSlug = encodeURIComponent(
    title.toLowerCase().replace(/\s+/g, "-")
  );
  return (
    <li className={css.item}>
      <Link to={`/movies/${id}/${movieTitleSlug}`} className={css.link}>
        {title}
      </Link>
    </li>
  );
};
