import { createAction } from '@reduxjs/toolkit';

const fetchPopularMoviesRequest = createAction('movies/fetchPopularMoviesRequest');
const fetchPopularMoviesSuccess = createAction('movies/fetchPopularMoviesSuccess');
const fetchPopularMoviesError = createAction('movies/fetchPopularMoviesError');

const fetchTotalPopularMoviesRequest = createAction('movies/fetchTotalPopularMoviesRequest');
const fetchTotalPopularMoviesSuccess = createAction('movies/fetchTotalPopularMoviesSuccess');
const fetchTotalPopularMoviesError = createAction('movies/fetchTotalPopularMoviesError');

const fetchMoviesRequest = createAction('movies/fetchMoviesRequest');
const fetchMoviesSuccess = createAction('movies/fetchMoviesSuccess');
const fetchMoviesError = createAction('movies/fetchMoviesError');

const fetchTotalMoviesRequest = createAction('movies/fetchTotalMoviesRequest');
const fetchTotalMoviesSuccess = createAction('movies/fetchTotalMoviesSuccess');
const fetchTotalMoviesError = createAction('movies/fetchTotalMoviesError');

const clearMovies = createAction('movies/clearMovies');
const clearTotalResultMovies = createAction('movies/clearTotalResultMovies');

const fetchMovieDetailsRequest = createAction('movies/fetchMovieDetailsRequest');
const fetchMovieDetailsSuccess = createAction('movies/fetchMovieDetailsSuccess');
const fetchMovieDetailsError = createAction('movies/fetchMovieDetailsError');

const fetchMovieCastRequest = createAction('movies/fetchMovieCastRequest');
const fetchMovieCastSuccess = createAction('movies/fetchMovieCastSuccess');
const fetchMovieCastError = createAction('movies/fetchMovieCastError');

const fetchMovieReviewRequest = createAction('movies/fetchMovieReviewRequest');
const fetchMovieReviewSuccess = createAction('movies/fetchMovieReviewSuccess');
const fetchMovieReviewError = createAction('movies/fetchMovieReviewError');

export default {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchTotalPopularMoviesRequest,
  fetchTotalPopularMoviesSuccess,
  fetchTotalPopularMoviesError,
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchTotalMoviesRequest,
  fetchTotalMoviesSuccess,
  fetchTotalMoviesError,
  clearMovies,
  clearTotalResultMovies,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieCastRequest,
  fetchMovieCastSuccess,
  fetchMovieCastError,
  fetchMovieReviewRequest,
  fetchMovieReviewSuccess,
  fetchMovieReviewError,
};
