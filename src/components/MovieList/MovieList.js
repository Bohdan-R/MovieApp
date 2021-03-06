import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import moviesSelectors from '../../redux/movies/movies-selectors';
import moviesOperations from '../../redux/movies/movies-operations';
import Spinner from '../Spinner';
import className from 'classnames';
import { motion } from 'framer-motion';
import { MdFavorite, MdLocalMovies, MdLibraryAdd } from 'react-icons/md';
import './MovieList.scss';

export default function MoviesList({ movies, page = 1 }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector(moviesSelectors.getLoading);
  const movieGenres = useSelector(moviesSelectors.getMovieGenres);
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);
  const watchedMovies = useSelector(moviesSelectors.getWatchedMovies);
  const queueMovies = useSelector(moviesSelectors.getQueueMovies);

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieGenres());
  }, [dispatch]);

  return (
    <div className="movies">
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          /* exit={{ opacity: 0 }} */
          transition={{ duration: 0.5 }}
          className="movies__list"
        >
          {movies.map(
            ({ id, title, poster_path, release_date, vote_average, genre_ids, genres }) => {
              const genresName = [];

              if (genre_ids) {
                genre_ids.forEach(genreId => {
                  movieGenres.forEach(({ id, name }) => {
                    if (id === genreId) {
                      return genresName.push(name);
                    }
                  });
                });
              } else {
                genres.forEach(({ name }) => genresName.push(name));
              }

              return (
                <Link
                  to={{
                    pathname: `movies/${id}`,
                    state: {
                      ...location,
                      page,
                    },
                  }}
                  key={id}
                  className="movies__link"
                >
                  <li key={id} className="movies__card">
                    <div className="front">
                      <img
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'images/movie-back-im.png'
                        }
                        alt={title}
                        className="movies__card__img"
                      />
                    </div>

                    <div className="back">
                      <ul className="movies__card__icon-list">
                        <li
                          className={className('movies__card__icon-item', {
                            'movies__card__icon-item--active': favouriteMovies.find(
                              movie => movie.id === id,
                            ),
                          })}
                        >
                          <MdFavorite />
                        </li>
                        <li
                          className={className('movies__card__icon-item', {
                            'movies__card__icon-item--active': queueMovies.find(
                              movie => movie.id === id,
                            ),
                          })}
                        >
                          <MdLibraryAdd />
                        </li>
                        <li
                          className={className('movies__card__icon-item', {
                            'movies__card__icon-item--active': watchedMovies.find(
                              movie => movie.id === id,
                            ),
                          })}
                        >
                          <MdLocalMovies />
                        </li>
                      </ul>
                      <h2 className="movies__card__title">{title}</h2>
                      <p className="movies__card__info-title">mark</p>
                      <p className="movies__card__info-item">
                        <span>IMDb</span>&nbsp;&nbsp;
                        {vote_average}
                      </p>
                      <p className="movies__card__info-title">genres</p>
                      <ul className="movies__card__genres-list">
                        {genresName.map(genre => (
                          <li key={genre} className="movies__card__genres-item">
                            {genre}
                            <span>,&nbsp;&nbsp;</span>
                          </li>
                        ))}
                      </ul>
                      <p className="movies__card__date">
                        release data
                        <span>&nbsp;{release_date ? release_date : 'coming soon'}</span>
                      </p>
                    </div>
                  </li>
                </Link>
              );
            },
          )}
        </motion.ul>
      )}
    </div>
  );
}
