import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../JS/api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const backLinkHref = useRef(location.state ?? "/");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const reviewData = await getMovieReviews(id);
        console.log("Review data in component:", reviewData);
        setReviews(reviewData);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={css.reviewsList}>
      {reviews.map(
        ({
          id,
          author = "Unknown Author",
          content = "No content available.",
        }) => (
          <li key={id} className={css.movieReviewItem}>
            <p className={css.reviewAuthor}>{author}</p>
            <p className={css.reviewContent}>{content}</p>
          </li>
        )
      )}
    </ul>
  );
}
