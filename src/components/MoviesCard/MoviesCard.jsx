import PropTypes from 'prop-types';

import styles from './MoviesCard.module.scss';
export default function MoviesCard({ posterUrl, nameRu, year, nameOriginal }) {
  return (
    <li className={styles.moviesCard}>
      <img className={styles.moviesCardImg} src={posterUrl} alt="poster" />
      <div className={styles.moviesCardInfo}>
        <p className={styles.moviesCardTitle}>{nameRu ?? nameOriginal}</p>
        <span className={styles.moviesCardYear}>{year}</span>
      </div>
    </li>
  );
}
MoviesCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  nameRu: PropTypes.string,
  year: PropTypes.number.isRequired,
  nameOriginal: PropTypes.string,
};
