import React, { useState, useEffect, useRef } from "react";
import { Suspense } from "react";
import { GoArrowRight } from "react-icons/go";
import { useParams, useLocation, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { getMoviesById } from "../../JS/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

import css from "./MovieDetailsPage.module.css";
import { SiH3 } from "react-icons/si";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("Movie ID is not provided");
      return;
    }

    const fetchMovie = async () => {
      try {
        const movieData = await getMoviesById(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <main className={css.container}>
        <p>Loading...</p>
      </main>
    );
  }

  const ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/";
  const IMAGE_SIZE = "original";

  return (
    <main className={css.container}>
      <BackLink to={backLinkRef.current}>Back to movies</BackLink>
      <ul className={css.info}>
        <li className={css.generalInfo}>
          <img
            src={
              movie.poster_path
                ? `${ORIGINAL_IMAGE_URL}${IMAGE_SIZE}${movie.poster_path}`
                : "/images/blank-cover.jpg"
            }
            alt={movie.title}
            className={css.poster}
          />
          <div className={css.details}>
            <h2 className={css.title}>{movie.title}</h2>
            <p>User Score: {(movie.vote_average * 10).toFixed(2)}%</p>
            <h3 className={css.titleDetails}>Overview</h3>
            <p>{movie.overview}</p>
            <h3 className={css.titleDetails}>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </li>
        <li className={css.additionallInfo}>
          <h3 className={css.titleDetails}>Additional information</h3>

          <Link
            to={`/movies/${id}/cast`}
            className={`${css.additionallInfoLink} ${
              location.pathname.includes("/cast") ? css.activeLink : ""
            }`}
          >
            <GoArrowRight className={css.additionallInfoIcon} />
            <p>Cast</p>
          </Link>
          <Link
            to={`/movies/${id}/reviews`}
            className={`${css.additionallInfoLink} ${
              location.pathname.includes("/reviews") ? css.activeLink : ""
            }`}
          >
            <GoArrowRight className={css.additionallInfoIcon} />
            <p>Reviews</p>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
