import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { MovieDetailsPage } from "../MovieDetailsPage/MovieDetailsPage";
import css from "./MoviesPage.module.css";

export const MoviesPage = () => {
  return (
    <>
      <Link path="/movies/:movieId" element={<MovieDetailsPage />}>
        here will be MovieList
      </Link>
    </>
  );
};
