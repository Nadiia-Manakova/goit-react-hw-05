import React from "react";
import css from "./MovieListItem.module.css";

export const MovieListItem = ({ name, image }) => {
  return (
    <div className={css.imageWrapper}>
      <img src={image} alt={name} className={css.image} />
      <h3 className={css.title}>{name}</h3>
    </div>
  );
};
