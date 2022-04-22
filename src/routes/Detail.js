import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Logo from "../components/Logo";
import style from './Detail.module.scss';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres); // TODO setGenres(movie.genres) 로는 세팅이 안됨
    console.log(json);
  }, [id]);
  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
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
        <>
          {
            <div className={style.container_box}>
              <div className={style.img_box}>
                <img
                  src={movie.large_cover_image}
                  alt={movie.large_cover_image}
                />
              </div>
              <div className={style.text_box}>
                <h1 className={style.title}>{movie.title}</h1>
                <div className={style.movie_time}>
                  <span>{movie.year}년 • </span>
                  <span>{movie.runtime}분</span>
                </div>
                <div className={style.rating}>rate: {movie.rating} </div>
                <div className={style.download}>
                  download: {movie.download_count}
                </div>
                <div className={style.like}>
                  like: {movie.like_count}{" "}
                </div>
                <div className={style.genres}>
                  <span>GENRES: </span>
                  {genres.map((g) => (
                    <span key={g}>{g}, </span>
                  ))}
                </div>
                <div className={style.description}>{movie.description_full}</div>
                <div>
                <iframe className={style.traiiler} src={`https://www.youtube.com/embed/${movie.yt_trailer_code}?mute=1&&autoplay=1`}></iframe>
                </div>
              </div>
            </div>
          }
        </>
      )}
    </div>
  </>
  );
}
/* <div className={style.box}>
            <div>
              <img
                src={movie.large_cover_image}
                alt={movie.large_cover_image}
              />
              <div>
                <h1>{movie.title}</h1>
                <div>
                  <span>{movie.year}년 • </span>
                  <span>{movie.runtime}분</span>
                </div>
              </div>
            </div>
            <div>
              <div>rate: {movie.rating} </div>
              <div>
                downloed: {movie.download_count}
              </div>
              <div>
                like: {movie.like_count}{" "}
              </div>
            </div>
            <div>{movie.description_full}</div>
            <div>
              {genres.map((g) => (
                <span key={g}>{g} </span>
              ))}
            </div>
          </div>
          <div>
          </div> */