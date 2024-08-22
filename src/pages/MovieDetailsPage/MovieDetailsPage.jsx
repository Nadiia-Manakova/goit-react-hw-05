import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { getMoviesById } from "../../JS/api";
import { MovieCast } from "../../components/MovieCast/MovieCast";
import { MovieReviews } from "../../components/MovieReviews/MovieReviews";

import css from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
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
    return <p>Loading...</p>;
  }

  const ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/";
  const IMAGE_SIZE = "original";

  return (
    <main className={css.container}>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img
        src={`${ORIGINAL_IMAGE_URL}${IMAGE_SIZE}${movie.poster_path}`}
        alt={movie.title}
        className={css.poster}
      />
      <div className={css.details}>
        <h2>{movie.title}</h2>
        <p>User Score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <MovieCast movieId={id} />
          </li>
          <li>
            <MovieReviews movieId={id} />
          </li>
        </ul>
      </div>
    </main>
  );
};
