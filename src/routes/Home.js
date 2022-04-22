import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from './Home.module.scss';
import Logo from '../components/Logo';

export default function Home(props) {
  const rating = (Math.random() * (10 - 7.5) ) + 7.5;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [setMovies]);
  return (
    <>
    <div className={style.logo}>
      <Logo/>
    </div>
    <div className={style.container}>
      {loading ? (
        <div className={style.loading}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={style.box}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
              runtime={movie.runtime}
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
}