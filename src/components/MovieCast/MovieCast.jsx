import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../JS/api";
import css from "./MovieCast.module.css";

export const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCast(id);
        setCast(castData.cast);
      } catch (error) {
        console.error("Failed to fetch cast:", error);
      }
    };

    fetchCast();
  }, [id]);

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
  const IMAGE_SIZE = "w500";

  return (
    <ul className={css.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.movieCastItem}>
          <img
            src={
              actor.profile_path
                ? `${BASE_IMAGE_URL}${IMAGE_SIZE}${actor.profile_path}`
                : "/public/images/blank-actor.jpg"
            }
            alt={actor.name}
            className={css.actorImage}
          />
          <div className={css.actorDetails}>
            <p className={css.actorName}>{actor.name}</p>
            <p className={css.actorCharacter}>{actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
