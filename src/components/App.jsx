import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage/MovieDetailsPage";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieReviews";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { Navigation } from "./Navigation/Navigation";

import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.section}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
