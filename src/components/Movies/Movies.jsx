import { MoviesCard } from '../MoviesCard/MoviesCard';
import styles from './Movies.module.scss';
import { Loader } from '../Loader/Loader';

export function Movies({ films, error }) {
  if (error || !films) {
    return <Loader />;
  }
  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {films.map(({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
          <MoviesCard
            key={kinopoiskId}
            nameRu={nameRu}
            year={year}
            posterUrl={posterUrl}
            nameOriginal={nameOriginal}
            kinopoiskId={kinopoiskId}
          />
        ))}
      </ul>
    </div>
  );
}
