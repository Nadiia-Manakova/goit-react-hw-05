import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

import css from "./SearchBar.module.css";

export const SearchBar = ({ value, onChange }) => {
  return (
    <form className={css.form}>
      <CiSearch className={css.icons} />
      <input
        className={css.formField}
        type="text"
        value={value}
        placeholder="Search your movie"
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};
