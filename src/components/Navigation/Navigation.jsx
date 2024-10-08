import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive ? css.active : css.notActive);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};
