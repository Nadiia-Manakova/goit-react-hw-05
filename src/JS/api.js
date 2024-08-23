import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjI3ZDkzZWQ4M2MzNjZmMmUzNjMwZTk1ZjVhYjZmZiIsIm5iZiI6MTcyNDA5ODcyNS4yODUwOTEsInN1YiI6IjY2YzNhNmViNjNkMjg4NzA5ZGEyOTY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMV6yE8eQah97zbEgupzgBk9uIfilkkBBOMN0H9JiXQ";

const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса к TMDB API:", error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  return fetchMovies("/search/movie", { query, page });
};

export const getTrendingMovies = async (page = 1) => {
  return fetchMovies("/trending/movie/day", { page });
};

// export const getMoviesById = async (movieId) => {
//   return fetchMovies(`/movies/:movieId`);
// };

export const getMoviesById = async (movieId) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }
  return fetchMovies(`/movie/${movieId}`);
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении актёрского состава:", error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Ошибка при получении отзывов:", error);
    throw error;
  }
};
