import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import style from './Movie.module.scss';

export default function Movie({runtime, year, id, coverImg, title,  genres }) {
  return (
    <div className={style.container}>
      <img className={style.poster} src={coverImg} alt={title}  />
      <div>
        <h2>
          <Link className={style.title} to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={style.time}>
          <span>{year} </span>
          <span>• {runtime}분</span>
        </div>
        <div className={style.genres}>
        <span>장르: </span>
          {genres.map((g) => (
            <span key={g}> {g},</span>
          ))}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  runtime:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};